import { __toESM } from "./chunk-BLXvPPr8.js";
import { require_common } from "./common-AJXMMmZt.js";
import { require_decorate } from "./decorate-X8-ckSX6.js";
import * as path from "node:path";
import { SourceFile, StructureKind, Type, VariableDeclarationKind } from "ts-morph";

//#region lib/generators/static.generator.ts
var import_common = __toESM(require_common(), 1);
var import_decorate = __toESM(require_decorate(), 1);
let StaticGenerator = class StaticGenerator$1 {
	generateStaticDeclaration(sourceFile) {
		sourceFile.addImportDeclaration({
			kind: StructureKind.ImportDeclaration,
			moduleSpecifier: "@trpc/server",
			namedImports: ["initTRPC"]
		});
		sourceFile.addImportDeclaration({
			kind: StructureKind.ImportDeclaration,
			moduleSpecifier: "zod",
			namedImports: ["z"]
		});
		sourceFile.addVariableStatements([{
			declarationKind: VariableDeclarationKind.Const,
			declarations: [{
				name: "t",
				initializer: "initTRPC.create()"
			}]
		}, {
			declarationKind: VariableDeclarationKind.Const,
			declarations: [{
				name: "publicProcedure",
				initializer: "t.procedure"
			}]
		}]);
	}
	addSchemaImports(sourceFile, schemaImportNames, importsMap) {
		const importDeclarations = [];
		for (const schemaImportName of schemaImportNames) for (const [importMapKey, importMapMetadata] of importsMap.entries()) {
			if (schemaImportName == null || importMapKey !== schemaImportName) continue;
			const relativePath = path.relative(path.dirname(sourceFile.getFilePath()), importMapMetadata.sourceFile.getFilePath().replace(/\.ts$/, ""));
			importDeclarations.push({
				kind: StructureKind.ImportDeclaration,
				moduleSpecifier: relativePath.startsWith(".") ? relativePath : `./${relativePath}`,
				namedImports: [schemaImportName]
			});
		}
		sourceFile.addImportDeclarations(importDeclarations);
	}
	findCtxOutProperty(type) {
		const typeText = type.getText();
		const ctxOutMatch = typeText.match(new RegExp("_ctx_out:\\s*{([^}]*)}", ""));
		return ctxOutMatch ? ctxOutMatch[1].trim() : void 0;
	}
};
StaticGenerator = (0, import_decorate.default)([(0, import_common.Injectable)()], StaticGenerator);

//#endregion
export { StaticGenerator };
//# sourceMappingURL=static.generator-FNFHztAl.js.map