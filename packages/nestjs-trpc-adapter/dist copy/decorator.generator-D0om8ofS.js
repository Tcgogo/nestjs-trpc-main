import { __toESM } from "./chunk-BLXvPPr8.js";
import { require_common, require_objectSpread2 } from "./common-AJXMMmZt.js";
import { require_defineProperty } from "./defineProperty-DOiqJb-o.js";
import { require_decorate } from "./decorate-X8-ckSX6.js";
import { require_decorateMetadata } from "./decorateMetadata-BmFM2rdr.js";
import { ProcedureGenerator } from "./procedure.generator-BS8c8w2r.js";
import { Decorator, Expression, Project, SourceFile, SyntaxKind } from "ts-morph";

//#region lib/generators/decorator.generator.ts
var import_common = __toESM(require_common(), 1);
var import_defineProperty = __toESM(require_defineProperty(), 1);
var import_decorateMetadata = __toESM(require_decorateMetadata(), 1);
var import_objectSpread2 = __toESM(require_objectSpread2(), 1);
var import_decorate = __toESM(require_decorate(), 1);
var _ref, _ref2;
let DecoratorGenerator = class DecoratorGenerator$1 {
	constructor() {
		(0, import_defineProperty.default)(this, "consoleLogger", void 0);
		(0, import_defineProperty.default)(this, "procedureGenerator", void 0);
	}
	serializeProcedureDecorators(decorators, sourceFile, project) {
		var _this = this;
		return decorators.reduce(function(array, decorator) {
			const decoratorName = decorator.getName();
			if (decoratorName === "Query" || decoratorName === "Mutation") {
				const input = _this.getDecoratorPropertyValue(decorator, "input", sourceFile, project);
				const output = _this.getDecoratorPropertyValue(decorator, "output", sourceFile, project);
				array.push({
					name: decoratorName,
					arguments: (0, import_objectSpread2.default)((0, import_objectSpread2.default)({}, input ? { input } : {}), output ? { output } : {})
				});
			} else if (decoratorName === "UseMiddlewares" || decoratorName === "Middlewares") return array;
			else _this.consoleLogger.warn(`Decorator ${decoratorName}, not supported.`);
			return array;
		}, []);
	}
	getDecoratorPropertyValue(decorator, propertyName, sourceFile, project) {
		const args = decorator.getArguments();
		for (const arg of args) if (arg.getKind() === SyntaxKind.ObjectLiteralExpression) {
			const properties = arg.getProperties();
			const property = properties.find(function(p) {
				return p.getName() === propertyName;
			});
			if (!property) return null;
			const propertyInitializer = property.getInitializer();
			return this.procedureGenerator.flattenZodSchema(propertyInitializer, sourceFile, project, propertyInitializer.getText());
		}
		return null;
	}
};
(0, import_decorate.default)([(0, import_common.Inject)(import_common.ConsoleLogger), (0, import_decorateMetadata.default)("design:type", typeof (_ref = typeof import_common.ConsoleLogger !== "undefined" && import_common.ConsoleLogger) === "function" ? _ref : Object)], DecoratorGenerator.prototype, "consoleLogger", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(ProcedureGenerator), (0, import_decorateMetadata.default)("design:type", typeof (_ref2 = typeof ProcedureGenerator !== "undefined" && ProcedureGenerator) === "function" ? _ref2 : Object)], DecoratorGenerator.prototype, "procedureGenerator", void 0);
DecoratorGenerator = (0, import_decorate.default)([(0, import_common.Injectable)()], DecoratorGenerator);

//#endregion
export { DecoratorGenerator };
//# sourceMappingURL=decorator.generator-D0om8ofS.js.map