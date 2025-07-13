import { __toESM } from "./chunk-BLXvPPr8.js";
import { require_common } from "./common-AJXMMmZt.js";
import { require_defineProperty } from "./defineProperty-DOiqJb-o.js";
import { require_decorate } from "./decorate-X8-ckSX6.js";

//#region lib/app-router.host.ts
var import_common = __toESM(require_common(), 1);
var import_defineProperty = __toESM(require_defineProperty(), 1);
var import_decorate = __toESM(require_decorate(), 1);
let AppRouterHost = class AppRouterHost$1 {
	constructor() {
		(0, import_defineProperty.default)(this, "_appRouter", void 0);
	}
	set appRouter(schemaRef) {
		this._appRouter = schemaRef;
	}
	get appRouter() {
		if (!this._appRouter) throw new Error("TRPC appRouter has not yet been created. Make sure to call the \"AppRouterHost#appRouter\" getter when the application is already initialized (after the \"onModuleInit\" hook triggered by either \"app.listen()\" or \"app.init()\" method).");
		return this._appRouter;
	}
};
AppRouterHost = (0, import_decorate.default)([(0, import_common.Injectable)()], AppRouterHost);

//#endregion
export { AppRouterHost };
//# sourceMappingURL=app-router.host-CRteAOv-.js.map