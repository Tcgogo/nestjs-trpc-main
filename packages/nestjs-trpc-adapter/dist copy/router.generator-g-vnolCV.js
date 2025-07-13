import { __toESM } from "./chunk-BLXvPPr8.js";
import { require_common } from "./common-AJXMMmZt.js";
import { require_defineProperty } from "./defineProperty-DOiqJb-o.js";
import { require_decorate } from "./decorate-X8-ckSX6.js";
import { require_decorateMetadata } from "./decorateMetadata-BmFM2rdr.js";
import { ProcedureGenerator } from "./procedure.generator-BS8c8w2r.js";
import { DecoratorGenerator } from "./decorator.generator-D0om8ofS.js";
import { camelCase } from "lodash-es";
import { Project } from "ts-morph";

//#region lib/generators/router.generator.ts
var import_common = __toESM(require_common(), 1);
var import_defineProperty = __toESM(require_defineProperty(), 1);
var import_decorateMetadata = __toESM(require_decorateMetadata(), 1);
var import_decorate = __toESM(require_decorate(), 1);
var _ref, _ref2;
let RouterGenerator = class RouterGenerator$1 {
	constructor() {
		(0, import_defineProperty.default)(this, "decoratorHandler", void 0);
		(0, import_defineProperty.default)(this, "procedureGenerator", void 0);
	}
	serializeRouters(routers, project) {
		var _this = this;
		return routers.map(function(router) {
			const proceduresMetadata = router.procedures.map(function(procedure) {
				return _this.serializeRouterProcedures(router.path, procedure, router.name, project);
			});
			return {
				name: router.name,
				alias: router.alias,
				procedures: proceduresMetadata
			};
		});
	}
	serializeRouterProcedures(routerFilePath, procedure, routerName, project) {
		const sourceFile = project.addSourceFileAtPath(routerFilePath);
		const classDeclaration = sourceFile.getClass(routerName);
		if (!classDeclaration) throw new Error(`Could not find router ${routerName} class declaration.`);
		const methodDeclaration = classDeclaration.getMethod(procedure.name);
		if (!methodDeclaration) throw new Error(`Could not find ${routerName}, method declarations.`);
		const decorators = methodDeclaration.getDecorators();
		if (!decorators) throw new Error(`could not find ${methodDeclaration.getName()}, method decorators.`);
		const serializedDecorators = this.decoratorHandler.serializeProcedureDecorators(decorators, sourceFile, project);
		return {
			name: procedure.name,
			decorators: serializedDecorators
		};
	}
	generateRoutersStringFromMetadata(routers) {
		var _this2 = this;
		return routers.map(function(router) {
			const { name, procedures, alias } = router;
			return `${alias !== null && alias !== void 0 ? alias : camelCase(name)}: t.router({ ${procedures.map(_this2.procedureGenerator.generateProcedureString).join(",\n")} })`;
		}).join(",\n");
	}
};
(0, import_decorate.default)([(0, import_common.Inject)(DecoratorGenerator), (0, import_decorateMetadata.default)("design:type", typeof (_ref = typeof DecoratorGenerator !== "undefined" && DecoratorGenerator) === "function" ? _ref : Object)], RouterGenerator.prototype, "decoratorHandler", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(ProcedureGenerator), (0, import_decorateMetadata.default)("design:type", typeof (_ref2 = typeof ProcedureGenerator !== "undefined" && ProcedureGenerator) === "function" ? _ref2 : Object)], RouterGenerator.prototype, "procedureGenerator", void 0);
RouterGenerator = (0, import_decorate.default)([(0, import_common.Injectable)()], RouterGenerator);

//#endregion
export { RouterGenerator };
//# sourceMappingURL=router.generator-g-vnolCV.js.map