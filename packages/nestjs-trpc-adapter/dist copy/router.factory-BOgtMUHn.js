import { __toESM } from "./chunk-BLXvPPr8.js";
import { require_common } from "./common-AJXMMmZt.js";
import { require_defineProperty } from "./defineProperty-DOiqJb-o.js";
import { require_decorate } from "./decorate-X8-ckSX6.js";
import { ProcedureFactory, require_core, require_instance_wrapper } from "./procedure.factory-BVIy_yls.js";
import { MIDDLEWARES_KEY, ROUTER_METADATA_KEY } from "./trpc.constants-bTuZEOOy.js";
import { require_decorateMetadata } from "./decorateMetadata-BmFM2rdr.js";
import { camelCase } from "lodash-es";

//#region lib/factories/router.factory.ts
var import_common = __toESM(require_common(), 1);
var import_core = __toESM(require_core(), 1);
var import_instance_wrapper = __toESM(require_instance_wrapper(), 1);
var import_defineProperty = __toESM(require_defineProperty(), 1);
var import_decorateMetadata = __toESM(require_decorateMetadata(), 1);
var import_decorate = __toESM(require_decorate(), 1);
var _ref, _ref2, _ref3;
let RouterFactory = class RouterFactory$1 {
	constructor() {
		(0, import_defineProperty.default)(this, "consoleLogger", void 0);
		(0, import_defineProperty.default)(this, "modulesContainer", void 0);
		(0, import_defineProperty.default)(this, "procedureFactory", void 0);
	}
	getRouters() {
		var _this = this;
		const routers = [];
		this.modulesContainer.forEach(function(moduleRef) {
			moduleRef.providers.forEach(function(wrapper) {
				const router = _this.extractRouterFromWrapper(wrapper);
				if (router != null) routers.push(router);
			});
		});
		return routers;
	}
	extractRouterFromWrapper(wrapper) {
		const { instance, name } = wrapper;
		if (instance == null) return null;
		const router = Reflect.getMetadata(ROUTER_METADATA_KEY, instance.constructor);
		if (router == null) return null;
		const middlewares = Reflect.getMetadata(MIDDLEWARES_KEY, instance.constructor) || [];
		return {
			name,
			instance,
			path: router.path,
			alias: router.alias,
			middlewares
		};
	}
	serializeRoutes(router, procedure) {
		var _this2 = this;
		const routers = this.getRouters();
		const routerSchema = Object.create({});
		routers.forEach(function(route) {
			const { instance, name, middlewares, alias } = route;
			const camelCasedRouterName = camelCase(alias !== null && alias !== void 0 ? alias : name);
			const prototype = Object.getPrototypeOf(instance);
			const procedures = _this2.procedureFactory.getProcedures(instance, prototype);
			_this2.consoleLogger.log(`Router ${name} as ${camelCasedRouterName}.`, "Router Factory");
			const routerProcedures = _this2.procedureFactory.serializeProcedures(procedures, instance, camelCasedRouterName, procedure, middlewares);
			routerSchema[camelCasedRouterName] = router(routerProcedures);
		});
		return routerSchema;
	}
};
(0, import_decorate.default)([(0, import_common.Inject)(import_common.ConsoleLogger), (0, import_decorateMetadata.default)("design:type", typeof (_ref = typeof import_common.ConsoleLogger !== "undefined" && import_common.ConsoleLogger) === "function" ? _ref : Object)], RouterFactory.prototype, "consoleLogger", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(import_core.ModulesContainer), (0, import_decorateMetadata.default)("design:type", typeof (_ref2 = typeof import_core.ModulesContainer !== "undefined" && import_core.ModulesContainer) === "function" ? _ref2 : Object)], RouterFactory.prototype, "modulesContainer", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(ProcedureFactory), (0, import_decorateMetadata.default)("design:type", typeof (_ref3 = typeof ProcedureFactory !== "undefined" && ProcedureFactory) === "function" ? _ref3 : Object)], RouterFactory.prototype, "procedureFactory", void 0);
RouterFactory = (0, import_decorate.default)([(0, import_common.Injectable)()], RouterFactory);

//#endregion
export { RouterFactory };
//# sourceMappingURL=router.factory-BOgtMUHn.js.map