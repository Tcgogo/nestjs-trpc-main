import { __toESM } from "./chunk-BLXvPPr8.js";
import { require_common } from "./common-AJXMMmZt.js";
import { require_asyncToGenerator } from "./asyncToGenerator-CDlr4A8U.js";
import { require_decorate } from "./decorate-X8-ckSX6.js";
import { ClassDeclaration, SourceFile, SyntaxKind, Type } from "ts-morph";

//#region lib/generators/context.generator.ts
var import_common = __toESM(require_common(), 1);
var import_asyncToGenerator = __toESM(require_asyncToGenerator(), 1);
var import_decorate = __toESM(require_decorate(), 1);
let ContextGenerator = class ContextGenerator$1 {
	getContextInterface(sourceFile, context) {
		return (0, import_asyncToGenerator.default)(function* () {
			const className = context === null || context === void 0 ? void 0 : context.name;
			if (!className) return null;
			const contextInstance = new context();
			if (typeof contextInstance.create !== "function") return null;
			const classDeclaration = this.getClassDeclaration(sourceFile, context.name);
			if (!classDeclaration) return null;
			const createMethod = classDeclaration.getMethod("create");
			if (!createMethod) return null;
			const ctxType = this.extractReturnTypeFromCreateMethod(createMethod);
			if (!ctxType) return null;
			return ctxType.getText();
		})();
	}
	extractReturnTypeFromCreateMethod(createMethod) {
		const body = createMethod.getBody();
		if (!body) return null;
		const returnStatement = body.getDescendantsOfKind(SyntaxKind.ReturnStatement).find(function(statement) {
			return statement.getExpression() !== void 0;
		});
		if (!returnStatement) return null;
		const returnExpression = returnStatement.getExpression();
		if (!returnExpression) return null;
		const returnType = returnExpression.getType();
		if (this.isPromiseType(returnType)) {
			const typeArguments = returnType.getTypeArguments();
			return typeArguments.length > 0 ? typeArguments[0] : null;
		}
		return returnType;
	}
	isPromiseType(type) {
		var _type$getSymbol, _type$getSymbol2;
		return ((_type$getSymbol = type.getSymbol()) === null || _type$getSymbol === void 0 ? void 0 : _type$getSymbol.getName()) === "Promise" || ((_type$getSymbol2 = type.getSymbol()) === null || _type$getSymbol2 === void 0 ? void 0 : _type$getSymbol2.getName()) === "__global.Promise" || type.getText().startsWith("Promise<");
	}
	getClassDeclaration(sourceFile, className) {
		const classDeclaration = sourceFile.getClass(className);
		if (classDeclaration) return classDeclaration;
		return void 0;
	}
};
ContextGenerator = (0, import_decorate.default)([(0, import_common.Injectable)()], ContextGenerator);

//#endregion
export { ContextGenerator };
//# sourceMappingURL=context.generator-DKcrJxMc.js.map