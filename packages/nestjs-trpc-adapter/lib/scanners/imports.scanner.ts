import type { Project, SourceFile } from 'ts-morph'
import type { SourceFileImportsMap } from '../interfaces/generator.interface'
import { Injectable } from '@nestjs/common'
import * as ts from 'typescript'

function getExportName(importedSourceFile: SourceFile) {
  // 获取声明变量名称
  const defaultExport = importedSourceFile.getExportAssignments().filter(e => !e.isExportEquals())
  let exportName = ''

  if (defaultExport && defaultExport.length > 0) {
    const expr = defaultExport[0].getExpression()

    // 处理标识符导出 (export default otherName)
    if (expr.getKind() === ts.SyntaxKind.Identifier) {
      exportName = expr.getText()
    }
    // 处理其他导出形式（可选）
    else if (expr.getKind() === ts.SyntaxKind.FunctionExpression) {
      // 处理匿名函数导出
    }
    else {
      // 其他类型的导出（字面量等）
      console.log('Export expression:', expr.getText())
    }
  }

  return exportName
}

@Injectable()
export class ImportsScanner {
  public buildSourceFileImportsMap(
    sourceFile: SourceFile,
    project: Project,
  ): Map<string, SourceFileImportsMap> {
    const sourceFileImportsMap = new Map<string, SourceFileImportsMap>()
    // const importDeclarations = sourceFile.getImportDeclarations()

    // for (const importDeclaration of importDeclarations) {
    //   const namedImports = importDeclaration.getNamedImports()
    //   const defaultImport = importDeclaration.getDefaultImport()
    //   const nameSpaceImport = importDeclaration.getNamespaceImport()

    //   if (defaultImport) {
    //     const name = defaultImport.getText()
    //     const importedSourceFile
    //       = importDeclaration.getModuleSpecifierSourceFile()

    //     if (importedSourceFile == null) {
    //       continue
    //     }

    //     const exportName = getExportName(importedSourceFile)

    //     const declaration
    //       = importedSourceFile.getVariableDeclaration(exportName)
    //       || importedSourceFile.getClass(exportName)
    //       || importedSourceFile.getInterface(exportName)
    //       || importedSourceFile.getEnum(exportName)
    //       || importedSourceFile.getFunction(exportName)

    //     if (declaration != null) {
    //       const initializer
    //         = 'getInitializer' in declaration
    //           ? declaration.getInitializer()
    //           : declaration
    //       sourceFileImportsMap.set(name, {
    //         initializer: initializer ?? declaration,
    //         sourceFile: importedSourceFile,
    //       })
    //     }
    //   }

    //   for (const namedImport of namedImports) {
    //     const name = namedImport.getName()

    //     // 获取重命名导出
    //     const aliasName = namedImport.getAliasNode()?.getFullText()?.trim()

    //     const importedSourceFile
    //       = importDeclaration.getModuleSpecifierSourceFile()

    //     if (importedSourceFile == null) {
    //       continue
    //     }

    //     const resolvedSourceFile
    //       = importedSourceFile.getFilePath().endsWith('index.ts')
    //         && !importedSourceFile.getVariableDeclaration(name)
    //         ? this.resolveBarrelFileImport(importedSourceFile, name, project)
    //         : importedSourceFile

    //     if (resolvedSourceFile == null) {
    //       continue
    //     }

    //     // Generalized logic to handle various kinds of declarations
    //     const declaration
    //       = resolvedSourceFile.getVariableDeclaration(name)
    //       || resolvedSourceFile.getClass(name)
    //       || resolvedSourceFile.getInterface(name)
    //       || resolvedSourceFile.getEnum(name)
    //       || resolvedSourceFile.getFunction(name)

    //     if (declaration != null) {
    //       const initializer
    //         = 'getInitializer' in declaration
    //           ? declaration.getInitializer()
    //           : declaration
    //       sourceFileImportsMap.set(aliasName ?? name, {
    //         initializer: initializer ?? declaration,
    //         sourceFile: resolvedSourceFile,
    //       })
    //     }
    //   }
    // }

    return sourceFileImportsMap
  }

  /**
   * https://github.com/dsherret/ts-morph/issues/327
   * Note that if the module resolution of the compiler is Classic then it won't resolve those implicit index.ts module specifiers.
   * So for example, if the moduleResolution compiler option isn't explicitly set then setting the module
   * compiler option to anything but ModuleKind.CommonJS will cause the module resolution kind to resolve to Classic.
   * Additionally, if moduleResolution and the module compiler option isn't set,
   * then a script target of ES2015 and above will also use Classic module resolution.
   */
  private resolveBarrelFileImport(
    barrelSourceFile: SourceFile,
    name: string,
    project: Project,
  ): SourceFile | undefined {
    // Traverse through export declarations to find the actual source of the named import
    for (const exportDeclaration of barrelSourceFile.getExportDeclarations()) {
      const exportedSourceFile
        = exportDeclaration.getModuleSpecifierSourceFile()
      if (exportedSourceFile == null) { continue }

      // Check if the named export is explicitly re-exported
      const namedExports = exportDeclaration.getNamedExports()
      if (namedExports.length > 0) {
        const matchingExport = namedExports.find(e => e.getName() === name)
        if (matchingExport) {
          return exportedSourceFile
        }
      }
      else {
        // Handle `export * from ...` case: recursively resolve the export
        const schemaVariable = exportedSourceFile.getVariableDeclaration(name)
        if (schemaVariable) {
          return exportedSourceFile
        }
        else {
          // Continue resolving if it's another barrel file
          const baseSourceFile = this.resolveBarrelFileImport(
            exportedSourceFile,
            name,
            project,
          )
          if (baseSourceFile) { return baseSourceFile }
        }
      }
    }

    return undefined
  }
}
