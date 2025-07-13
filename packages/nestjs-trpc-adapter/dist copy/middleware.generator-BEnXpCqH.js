import { __toESM } from "./chunk-BLXvPPr8.js";
import { require_common } from "./common-AJXMMmZt.js";
import { require_asyncToGenerator } from "./asyncToGenerator-CDlr4A8U.js";
import { require_decorate } from "./decorate-X8-ckSX6.js";
import { ClassDeclaration, Node, Project, SourceFile, SyntaxKind, Type } from "ts-morph";

//#region lib/generators/middleware.generator.ts
var import_common = __toESM(require_common(), 1);
var import_asyncToGenerator = __toESM(require_asyncToGenerator(), 1);
var import_decorate = __toESM(require_decorate(), 1);
let MiddlewareGenerator = class MiddlewareGenerator$1 {
	getMiddlewareInterface(routerFilePath, middleware, project) {
		return (0, import_asyncToGenerator.default)(function* () {
			const className = middleware.name;
			if (!className) return null;
			const middlewareInstance = new middleware();
			if (typeof middlewareInstance.use !== "function") return null;
			const contextSourceFile = project.addSourceFileAtPath(routerFilePath);
			const classDeclaration = this.getClassDeclaration(contextSourceFile, middleware.name);
			if (!classDeclaration) return null;
			const useMethod = classDeclaration.getMethod("use");
			if (!useMethod) return null;
			const ctxType = this.extractCtxTypeFromUseMethod(useMethod);
			if (!ctxType) return null;
			return {
				name: className,
				properties: this.typeToProperties(ctxType)
			};
		})();
	}
	extractCtxTypeFromUseMethod(useMethod) {
		var _ctxProperty$getIniti;
		const body = useMethod.getBody();
		if (!body) return null;
		const nextCall = body.getDescendantsOfKind(SyntaxKind.CallExpression).find(function(call) {
			const expression = call.getExpression();
			return Node.isPropertyAccessExpression(expression) && expression.getName() === "next" && Node.isIdentifier(expression.getExpression()) && expression.getExpression().getText() === "opts";
		});
		if (!nextCall) return null;
		const nextArg = nextCall.getArguments()[0];
		if (!Node.isObjectLiteralExpression(nextArg)) return null;
		const ctxProperty = nextArg.getProperties().find(function(prop) {
			return Node.isPropertyAssignment(prop) && prop.getName() === "ctx";
		});
		if (!Node.isPropertyAssignment(ctxProperty)) return null;
		return ((_ctxProperty$getIniti = ctxProperty.getInitializer()) === null || _ctxProperty$getIniti === void 0 ? void 0 : _ctxProperty$getIniti.getType()) || null;
	}
	getClassDeclaration(sourceFile, className) {
		const classDeclaration = sourceFile.getClass(className);
		if (classDeclaration) return classDeclaration;
		return void 0;
	}
	typeToProperties(type) {
		const properties = [];
		if (type.isObject()) type.getProperties().forEach(function(prop) {
			const propValueDeclaration = prop.getValueDeclaration();
			if (propValueDeclaration != null) properties.push({
				name: prop.getName(),
				type: prop.getTypeAtLocation(propValueDeclaration).getText()
			});
		});
		return properties;
	}
};
MiddlewareGenerator = (0, import_decorate.default)([(0, import_common.Injectable)()], MiddlewareGenerator);

//#endregion
export { MiddlewareGenerator };
//# sourceMappingURL=middleware.generator-BEnXpCqH.js.map