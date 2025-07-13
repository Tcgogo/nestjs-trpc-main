import { __toESM } from "./chunk-BLXvPPr8.js";
import { require_common } from "./common-AJXMMmZt.js";
import { require_decorate } from "./decorate-X8-ckSX6.js";
import { Project, SourceFile } from "ts-morph";

//#region lib/scanners/imports.scanner.ts
var import_common = __toESM(require_common(), 1);
var import_decorate = __toESM(require_decorate(), 1);
let ImportsScanner = class ImportsScanner$1 {
	buildSourceFileImportsMap(sourceFile, project) {
		const sourceFileImportsMap = /* @__PURE__ */ new Map();
		const importDeclarations = sourceFile.getImportDeclarations();
		for (const importDeclaration of importDeclarations) {
			const namedImports = importDeclaration.getNamedImports();
			for (const namedImport of namedImports) {
				const name = namedImport.getName();
				const importedSourceFile = importDeclaration.getModuleSpecifierSourceFile();
				if (importedSourceFile == null) continue;
				const resolvedSourceFile = importedSourceFile.getFilePath().endsWith("index.ts") && !importedSourceFile.getVariableDeclaration(name) ? this.resolveBarrelFileImport(importedSourceFile, name, project) : importedSourceFile;
				if (resolvedSourceFile == null) continue;
				const declaration = resolvedSourceFile.getVariableDeclaration(name) || resolvedSourceFile.getClass(name) || resolvedSourceFile.getInterface(name) || resolvedSourceFile.getEnum(name) || resolvedSourceFile.getFunction(name);
				if (declaration != null) {
					const initializer = "getInitializer" in declaration ? declaration.getInitializer() : declaration;
					sourceFileImportsMap.set(name, {
						initializer: initializer !== null && initializer !== void 0 ? initializer : declaration,
						sourceFile: resolvedSourceFile
					});
				}
			}
		}
		return sourceFileImportsMap;
	}
	/**
	* https://github.com/dsherret/ts-morph/issues/327
	* Note that if the module resolution of the compiler is Classic then it won't resolve those implicit index.ts module specifiers.
	* So for example, if the moduleResolution compiler option isn't explicitly set then setting the module
	* compiler option to anything but ModuleKind.CommonJS will cause the module resolution kind to resolve to Classic.
	* Additionally, if moduleResolution and the module compiler option isn't set,
	* then a script target of ES2015 and above will also use Classic module resolution.
	*/
	resolveBarrelFileImport(barrelSourceFile, name, project) {
		for (const exportDeclaration of barrelSourceFile.getExportDeclarations()) {
			const exportedSourceFile = exportDeclaration.getModuleSpecifierSourceFile();
			if (exportedSourceFile == null) continue;
			const namedExports = exportDeclaration.getNamedExports();
			if (namedExports.length > 0) {
				const matchingExport = namedExports.find(function(e) {
					return e.getName() === name;
				});
				if (matchingExport) return exportedSourceFile;
			} else {
				const schemaVariable = exportedSourceFile.getVariableDeclaration(name);
				if (schemaVariable) return exportedSourceFile;
				else {
					const baseSourceFile = this.resolveBarrelFileImport(exportedSourceFile, name, project);
					if (baseSourceFile) return baseSourceFile;
				}
			}
		}
		return void 0;
	}
};
ImportsScanner = (0, import_decorate.default)([(0, import_common.Injectable)()], ImportsScanner);

//#endregion
export { ImportsScanner };
//# sourceMappingURL=imports.scanner-m3j-zqOP.js.map