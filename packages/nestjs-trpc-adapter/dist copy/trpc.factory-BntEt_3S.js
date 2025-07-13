import { __toESM } from "./chunk-BLXvPPr8.js";
import { require_common } from "./common-AJXMMmZt.js";
import { require_defineProperty } from "./defineProperty-DOiqJb-o.js";
import { require_decorate } from "./decorate-X8-ckSX6.js";
import { require_decorateMetadata } from "./decorateMetadata-BmFM2rdr.js";
import { RouterFactory } from "./router.factory-BOgtMUHn.js";

//#region lib/factories/trpc.factory.ts
var import_common = __toESM(require_common(), 1);
var import_defineProperty = __toESM(require_defineProperty(), 1);
var import_decorateMetadata = __toESM(require_decorateMetadata(), 1);
var import_decorate = __toESM(require_decorate(), 1);
var _ref;
let TRPCFactory = class TRPCFactory$1 {
	constructor() {
		(0, import_defineProperty.default)(this, "routerFactory", void 0);
	}
	serializeAppRoutes(router, procedure) {
		const routerSchema = this.routerFactory.serializeRoutes(router, procedure);
		return router(routerSchema);
	}
};
(0, import_decorate.default)([(0, import_common.Inject)(RouterFactory), (0, import_decorateMetadata.default)("design:type", typeof (_ref = typeof RouterFactory !== "undefined" && RouterFactory) === "function" ? _ref : Object)], TRPCFactory.prototype, "routerFactory", void 0);
TRPCFactory = (0, import_decorate.default)([(0, import_common.Injectable)()], TRPCFactory);

//#endregion
export { TRPCFactory };
//# sourceMappingURL=trpc.factory-BntEt_3S.js.map