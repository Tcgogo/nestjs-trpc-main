import type { MethodDeclaration, ObjectLiteralExpression, Project, PropertyAssignment, SourceFile, VariableDeclaration } from 'ts-morph'
import type { ProcedureGeneratorMetadata } from '../interfaces/generator.interface'
import { Inject, Injectable } from '@nestjs/common'
import { Node } from 'ts-morph'
import { ImportsScanner } from '../scanners/imports.scanner'
import { ProcedureType } from '../trpc.enum'
import { TYPESCRIPT_APP_ROUTER_SOURCE_FILE } from './generator.constants'
import { StaticGenerator } from './static.generator'

// 获取对象属性的值
function getPropertyValue(
  variable: VariableDeclaration,
  propertyKey: string,
): { kindName: 'PropertyAssignment' | 'ShorthandPropertyAssignment' | 'MethodDeclaration', value: string } | undefined {
  const initializer = variable.getInitializer()

  // 检查是否是对象字面量
  if (initializer && initializer.getKindName() === 'ObjectLiteralExpression') {
    const objLiteral = initializer as ObjectLiteralExpression

    // 查找指定属性
    const property = objLiteral.getProperty(propertyKey)

    if (property) {
      // 处理不同属性类型
      if (property.getKindName() === 'PropertyAssignment') {
        return {
          kindName: 'PropertyAssignment',
          value: (property as PropertyAssignment).getInitializer()?.getText() || '',
        }
      }
      // 处理简写属性 (shorthand property)
      if (property.getKindName() === 'ShorthandPropertyAssignment') {
        return {
          kindName: 'ShorthandPropertyAssignment',
          value: property.getText(),
        }
      }
      // 处理方法属性
      if (property.getKindName() === 'MethodDeclaration') {
        return {
          kindName: 'MethodDeclaration',
          value: (property as MethodDeclaration).getBody()?.getText() || '',
        }
      }
    }
  }
  return undefined
}

@Injectable()
export class ProcedureGenerator {
  @Inject(ImportsScanner)
  private readonly importsScanner!: ImportsScanner

  @Inject(StaticGenerator)
  private readonly staticGenerator!: StaticGenerator

  @Inject(TYPESCRIPT_APP_ROUTER_SOURCE_FILE)
  private readonly appRouterSourceFile!: SourceFile

  public generateProcedureString(
    procedure: ProcedureGeneratorMetadata,
  ): string {
    const { name, decorators } = procedure
    const decorator = decorators.find(
      decorator =>
        decorator.name === ProcedureType.Mutation
        || decorator.name === ProcedureType.Query,
    )

    if (!decorator) {
      return ''
    }

    const decoratorArgumentsArray = Object.entries(decorator.arguments)
      .map(([key, value]) => `.${key}(${value})`)
      .join('')

    return `${name}: publicProcedure${decoratorArgumentsArray}.${decorator.name.toLowerCase()}(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any )`
  }

  public flattenZodSchema(
    node: Node,
    sourceFile: SourceFile,
    project: Project,
    schema: string,
  ): string {
    const importsMap = this.importsScanner.buildSourceFileImportsMap(
      sourceFile,
      project,
    )
    if (Node.isIdentifier(node)) {
      const identifierName = node.getText()
      const identifierDeclaration
        = sourceFile.getVariableDeclaration(identifierName)

      if (identifierDeclaration != null) {
        const identifierInitializer = identifierDeclaration.getInitializer()

        if (identifierInitializer != null) {
          const identifierSchema = this.flattenZodSchema(
            identifierInitializer,
            sourceFile,
            project,
            identifierInitializer.getText(),
          )

          schema = schema.replace(identifierName, identifierSchema)
        }
      }
      else if (importsMap.has(identifierName)) {
        const importedIdentifier = importsMap.get(identifierName)

        if (importedIdentifier != null) {
          const { initializer } = importedIdentifier
          const identifierSchema = this.flattenZodSchema(
            initializer,
            importedIdentifier.sourceFile,
            project,
            initializer.getText(),
          )

          schema = schema.replace(identifierName, identifierSchema)
        }
      }
    }
    else if (Node.isObjectLiteralExpression(node)) {
      for (const property of node.getProperties()) {
        if (Node.isPropertyAssignment(property)) {
          const propertyText = property.getText()
          const propertyInitializer = property.getInitializer()

          if (propertyInitializer != null) {
            schema = schema.replace(
              propertyText,
              this.flattenZodSchema(
                propertyInitializer,
                sourceFile,
                project,
                propertyText,
              ),
            )
          }
        }
      }
    }
    else if (Node.isArrayLiteralExpression(node)) {
      for (const element of node.getElements()) {
        const elementText = element.getText()
        schema = schema.replace(
          elementText,
          this.flattenZodSchema(element, sourceFile, project, elementText),
        )
      }
    }
    else if (Node.isCallExpression(node)) {
      const expression = node.getExpression()
      if (
        Node.isPropertyAccessExpression(expression)
        && !expression.getText().startsWith('z')
      ) {
        const baseSchema = this.flattenZodSchema(
          expression,
          sourceFile,
          project,
          expression.getText(),
        )
        const propertyName = expression.getName()
        schema = schema.replace(
          expression.getText(),
          `${baseSchema}.${propertyName}`,
        )
      }
      else if (!expression.getText().startsWith('z')) {
        this.staticGenerator.addSchemaImports(
          this.appRouterSourceFile,
          [expression.getText()],
          importsMap,
        )
      }

      for (const arg of node.getArguments()) {
        const argText = arg.getText()
        schema = schema.replace(
          argText,
          this.flattenZodSchema(arg, sourceFile, project, argText),
        )
      }
    }
    else if (Node.isPropertyAccessExpression(node)) {
      const nodeTextArr = node.getText().split('.')

      const parentNodePath = nodeTextArr[0]
      const childNodePath = nodeTextArr[1]

      if (importsMap.has(parentNodePath)) {
      // 只支持 obj.a 一层读取
        if (nodeTextArr.length > 2) {
          console.warn(`只支持 obj.a 一层读取, 当前路径: ${node.getText()}`)
          schema = node.getText()
          return schema
        }

        const parentSourceFile = importsMap.get(parentNodePath)!.sourceFile
        const childSourceFile = parentSourceFile.getVariableDeclaration(parentNodePath)
        if (childSourceFile) {
          const childPropertyValue = getPropertyValue(childSourceFile!, childNodePath!)
          const { kindName, value } = childPropertyValue || {}
          if (kindName === 'ShorthandPropertyAssignment') {
            const declaration = parentSourceFile.getVariableDeclaration(childNodePath)
              || parentSourceFile.getClass(childNodePath)
              || parentSourceFile.getInterface(childNodePath)
              || parentSourceFile.getEnum(childNodePath)
            const initializer
          = 'getInitializer' in declaration!
            ? declaration.getInitializer()
            : declaration
            schema = initializer?.getText() || node.getText()
          }
          else {
            schema = value || node.getText()
          }
        }
      }
      else {
        schema = this.flattenZodSchema(
          node.getExpression(),
          sourceFile,
          project,
          node.getExpression().getText(),
        )
      }
    }

    return schema
  }
}
