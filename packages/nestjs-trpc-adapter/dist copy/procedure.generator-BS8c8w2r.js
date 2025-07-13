import { __toESM } from "./chunk-BLXvPPr8.js";
import { require_common } from "./common-AJXMMmZt.js";
import { require_defineProperty } from "./defineProperty-DOiqJb-o.js";
import { require_decorate } from "./decorate-X8-ckSX6.js";
import { ProcedureType } from "./trpc.enum-XZGct68f.js";
import { require_decorateMetadata } from "./decorateMetadata-BmFM2rdr.js";
import { ImportsScanner } from "./imports.scanner-m3j-zqOP.js";
import { StaticGenerator } from "./static.generator-FNFHztAl.js";
import { TYPESCRIPT_APP_ROUTER_SOURCE_FILE } from "./generator.constants-BHzRvyZp.js";
import { Node, Project, SourceFile } from "ts-morph";

//#region lib/generators/procedure.generator.ts
var import_common = __toESM(require_common(), 1);
var import_defineProperty = __toESM(require_defineProperty(), 1);
var import_decorateMetadata = __toESM(require_decorateMetadata(), 1);
var import_decorate = __toESM(require_decorate(), 1);
var _ref, _ref2, _ref3;
let ProcedureGenerator = class ProcedureGenerator$1 {
	constructor() {
		(0, import_defineProperty.default)(this, "importsScanner", void 0);
		(0, import_defineProperty.default)(this, "staticGenerator", void 0);
		(0, import_defineProperty.default)(this, "appRouterSourceFile", void 0);
	}
	generateProcedureString(procedure) {
		const { name, decorators } = procedure;
		const decorator = decorators.find(function(decorator$1) {
			return decorator$1.name === ProcedureType.Mutation || decorator$1.name === ProcedureType.Query;
		});
		if (!decorator) return "";
		const decoratorArgumentsArray = Object.entries(decorator.arguments).map(function([key, value]) {
			return `.${key}(${value})`;
		}).join("");
		return `${name}: publicProcedure${decoratorArgumentsArray}.${decorator.name.toLowerCase()}(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any )`;
	}
	flattenZodSchema(node, sourceFile, project, schema) {
		const importsMap = this.importsScanner.buildSourceFileImportsMap(sourceFile, project);
		if (Node.isIdentifier(node)) {
			const identifierName = node.getText();
			const identifierDeclaration = sourceFile.getVariableDeclaration(identifierName);
			if (identifierDeclaration != null) {
				const identifierInitializer = identifierDeclaration.getInitializer();
				if (identifierInitializer != null) {
					const identifierSchema = this.flattenZodSchema(identifierInitializer, sourceFile, project, identifierInitializer.getText());
					schema = schema.replace(identifierName, identifierSchema);
				}
			} else if (importsMap.has(identifierName)) {
				const importedIdentifier = importsMap.get(identifierName);
				if (importedIdentifier != null) {
					const { initializer } = importedIdentifier;
					const identifierSchema = this.flattenZodSchema(initializer, importedIdentifier.sourceFile, project, initializer.getText());
					schema = schema.replace(identifierName, identifierSchema);
				}
			}
		} else if (Node.isObjectLiteralExpression(node)) {
			for (const property of node.getProperties()) if (Node.isPropertyAssignment(property)) {
				const propertyText = property.getText();
				const propertyInitializer = property.getInitializer();
				if (propertyInitializer != null) schema = schema.replace(propertyText, this.flattenZodSchema(propertyInitializer, sourceFile, project, propertyText));
			}
		} else if (Node.isArrayLiteralExpression(node)) for (const element of node.getElements()) {
			const elementText = element.getText();
			schema = schema.replace(elementText, this.flattenZodSchema(element, sourceFile, project, elementText));
		}
		else if (Node.isCallExpression(node)) {
			const expression = node.getExpression();
			if (Node.isPropertyAccessExpression(expression) && !expression.getText().startsWith("z")) {
				const baseSchema = this.flattenZodSchema(expression, sourceFile, project, expression.getText());
				const propertyName = expression.getName();
				schema = schema.replace(expression.getText(), `${baseSchema}.${propertyName}`);
			} else if (!expression.getText().startsWith("z")) this.staticGenerator.addSchemaImports(this.appRouterSourceFile, [expression.getText()], importsMap);
			for (const arg of node.getArguments()) {
				const argText = arg.getText();
				schema = schema.replace(argText, this.flattenZodSchema(arg, sourceFile, project, argText));
			}
		} else if (Node.isPropertyAccessExpression(node)) schema = this.flattenZodSchema(node.getExpression(), sourceFile, project, node.getExpression().getText());
		return schema;
	}
};
(0, import_decorate.default)([(0, import_common.Inject)(ImportsScanner), (0, import_decorateMetadata.default)("design:type", typeof (_ref = typeof ImportsScanner !== "undefined" && ImportsScanner) === "function" ? _ref : Object)], ProcedureGenerator.prototype, "importsScanner", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(StaticGenerator), (0, import_decorateMetadata.default)("design:type", typeof (_ref2 = typeof StaticGenerator !== "undefined" && StaticGenerator) === "function" ? _ref2 : Object)], ProcedureGenerator.prototype, "staticGenerator", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(TYPESCRIPT_APP_ROUTER_SOURCE_FILE), (0, import_decorateMetadata.default)("design:type", typeof (_ref3 = typeof SourceFile !== "undefined" && SourceFile) === "function" ? _ref3 : Object)], ProcedureGenerator.prototype, "appRouterSourceFile", void 0);
ProcedureGenerator = (0, import_decorate.default)([(0, import_common.Injectable)()], ProcedureGenerator);

//#endregion
export { ProcedureGenerator };
//# sourceMappingURL=procedure.generator-BS8c8w2r.js.map