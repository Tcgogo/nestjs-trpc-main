import type { Project, SourceFile } from 'ts-morph'
import type { ProcedureGeneratorMetadata } from '../interfaces/generator.interface'
import type { GeneratorModuleOptions } from './generator.interface'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { Inject, Injectable } from '@nestjs/common'
import { TRPC_GENERATOR_OPTIONS } from 'lib/trpc.constants'
import { Node } from 'ts-morph'
import { ImportSet } from '../import-set'
import { ImportsScanner } from '../scanners/imports.scanner'
import { ProcedureType } from '../trpc.enum'
import { TYPESCRIPT_APP_ROUTER_SOURCE_FILE } from './generator.constants'
import { StaticGenerator } from './static.generator'

/**
 * 解析导入路径
 * @param importPath 导入路径
 * @param baseUrl 基础路径
 * @param paths 路径映射
 * @returns 解析后的路径
 */
function resolvePath(importPath: string, baseUrl: string, paths: Record<string, string[]>) {
  for (const [aliasPattern, mappings] of Object.entries(paths)) {
    // 移除模式中的通配符
    const cleanAlias = aliasPattern.replace('/*', '')

    // 检查路径是否匹配别名
    if (importPath.startsWith(cleanAlias)) {
      // 获取路径中的剩余部分
      const remainingPath = importPath.slice(cleanAlias.length)

      // 尝试每个映射
      for (const mapping of mappings) {
        // 移除映射中的通配符
        const cleanMapping = mapping.replace('/*', '')

        // 构造完整路径
        let resolvedPath = path.resolve(baseUrl, cleanMapping)

        // 添加剩余路径
        if (remainingPath) {
          resolvedPath = path.join(resolvedPath, remainingPath)
        }

        // 检查路径是否存在
        if (existsSync(resolvedPath) || existsSync(`${resolvedPath}.ts`)) {
          // 转换为相对路径
          return resolvedPath
        }
      }
    }
  }
}

@Injectable()
export class ProcedureGenerator {
  @Inject(ImportsScanner)
  private readonly importsScanner!: ImportsScanner

  @Inject(StaticGenerator)
  private readonly staticGenerator!: StaticGenerator

  @Inject(TYPESCRIPT_APP_ROUTER_SOURCE_FILE)
  private readonly appRouterSourceFile!: SourceFile

  @Inject(TRPC_GENERATOR_OPTIONS)
  private readonly options!: GeneratorModuleOptions

  @Inject(ImportSet)
  private readonly importSet!: ImportSet

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
    const compilerOptions = project.getCompilerOptions()
    const paths = compilerOptions.paths || {}
    const baseUrl = path.resolve(process.cwd(), compilerOptions.baseUrl || '.')

    if (Node.isIdentifier(node)) {
      const identifierDeclaration
        = sourceFile.getVariableDeclaration(schema)

      if (identifierDeclaration != null) {
        const identifierInitializer = identifierDeclaration.getInitializer()

        if (identifierInitializer != null) {
          // 不支持嵌套的变量
          schema = identifierInitializer.getText()
        }
      }
      else {
        const importDeclarations = sourceFile.getImportDeclarations()
        for (const importDeclaration of importDeclarations) {
          const namedImports = importDeclaration.getNamedImports()
          const defaultImport = importDeclaration.getDefaultImport()
          namedImports.forEach((namedImport) => {
            const text = importDeclaration.getText()
            const name = namedImport.getAliasNode()?.getFullText()?.trim() || namedImport.getName()
            // 匹配到对应名称
            if (name === schema) {
              // importDeclaration 获取导入路径
              const moduleSpecifier = importDeclaration.getModuleSpecifier()
              const importPath = moduleSpecifier.getLiteralValue()
              const importText = moduleSpecifier.getText()
              if (importDeclaration.isModuleSpecifierRelative()) {
                const p1 = path.resolve(path.resolve(sourceFile.getFilePath(), '..'), importPath)
                const relativeImportPath = path.relative(this.options.outputDirPath!, p1).replace(new RegExp(`\\${path.sep}`, 'g'), '/')
                this.importSet.addImport(text.replace(importText, `"${relativeImportPath}";`))
              }
              else {
                const resolvedPath = resolvePath(importPath, baseUrl, paths)
                const relativePath = resolvedPath ? path.relative(this.options.outputDirPath!, resolvedPath).replace(new RegExp(`\\${path.sep}`, 'g'), '/') : ''
                const relativeImportPath = resolvedPath ? text.replace(importText, `"${relativePath}";`) : importPath

                this.importSet.addImport(relativeImportPath)
              }
            }
          })

          if (defaultImport) {
            const text = importDeclaration.getText()
            const moduleSpecifier = importDeclaration.getModuleSpecifier()
            const importText = moduleSpecifier.getText()
            const importPath = moduleSpecifier.getLiteralValue()
            const importName = defaultImport.getText()

            if (importName === schema) {
              if (importDeclaration.isModuleSpecifierRelative()) {
                const p1 = path.resolve(path.resolve(sourceFile.getFilePath(), '..'), importPath)
                const relativeImportPath = path.relative(this.options.outputDirPath!, p1).replace(new RegExp(`\\${path.sep}`, 'g'), '/')
                this.importSet.addImport(text.replace(importText, `"${relativeImportPath}";`))
              }
              else {
                const resolvedPath = resolvePath(importPath, baseUrl, paths)
                const relativePath = resolvedPath ? path.relative(this.options.outputDirPath!, resolvedPath).replace(new RegExp(`\\${path.sep}`, 'g'), '/') : ''
                const relativeImportPath = resolvedPath ? text.replace(importText, `"${relativePath}";`) : importPath

                this.importSet.addImport(relativeImportPath)
              }
            }
          }
        }
      }
    }

    return schema
  }
}
