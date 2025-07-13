import { __toESM } from "./chunk-BLXvPPr8.js";
import { require_common } from "./common-AJXMMmZt.js";
import { require_defineProperty } from "./defineProperty-DOiqJb-o.js";
import { require_decorate } from "./decorate-X8-ckSX6.js";
import { ProcedureFactory } from "./procedure.factory-BVIy_yls.js";
import { require_decorateMetadata } from "./decorateMetadata-BmFM2rdr.js";
import { RouterFactory } from "./router.factory-BOgtMUHn.js";
import { isEqual, uniqWith } from "lodash-es";

//#region lib/factories/middleware.factory.ts
var import_common = __toESM(require_common(), 1);
var import_defineProperty = __toESM(require_defineProperty(), 1);
var import_decorateMetadata = __toESM(require_decorateMetadata(), 1);
var import_decorate = __toESM(require_decorate(), 1);
var _ref, _ref2;
let MiddlewareFactory = class MiddlewareFactory$1 {
	constructor() {
		(0, import_defineProperty.default)(this, "routerFactory", void 0);
		(0, import_defineProperty.default)(this, "procedureFactory", void 0);
	}
	getMiddlewares() {
		var _this = this;
		const routers = this.routerFactory.getRouters();
		const middlewaresMetadata = routers.flatMap(function(router) {
			const { instance, middlewares, path } = router;
			const prototype = Object.getPrototypeOf(instance);
			const procedures = _this.procedureFactory.getProcedures(instance, prototype);
			const procedureMiddleware = procedures.flatMap(function(procedure) {
				var _procedure$middleware;
				return (_procedure$middleware = procedure.middlewares) !== null && _procedure$middleware !== void 0 ? _procedure$middleware : [];
			});
			return [...middlewares, ...procedureMiddleware].map(function(middleware) {
				return {
					path,
					instance: middleware
				};
			});
		});
		return uniqWith(middlewaresMetadata, isEqual);
	}
};
(0, import_decorate.default)([(0, import_common.Inject)(RouterFactory), (0, import_decorateMetadata.default)("design:type", typeof (_ref = typeof RouterFactory !== "undefined" && RouterFactory) === "function" ? _ref : Object)], MiddlewareFactory.prototype, "routerFactory", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(ProcedureFactory), (0, import_decorateMetadata.default)("design:type", typeof (_ref2 = typeof ProcedureFactory !== "undefined" && ProcedureFactory) === "function" ? _ref2 : Object)], MiddlewareFactory.prototype, "procedureFactory", void 0);
MiddlewareFactory = (0, import_decorate.default)([(0, import_common.Injectable)()], MiddlewareFactory);

//#endregion
export { MiddlewareFactory };
//# sourceMappingURL=middleware.factory-CF9uL2dJ.js.map