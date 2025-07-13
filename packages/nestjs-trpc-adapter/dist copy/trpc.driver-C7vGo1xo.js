import { __toESM } from "./chunk-BLXvPPr8.js";
import { require_common, require_objectSpread2 } from "./common-AJXMMmZt.js";
import { require_defineProperty } from "./defineProperty-DOiqJb-o.js";
import { require_asyncToGenerator } from "./asyncToGenerator-CDlr4A8U.js";
import { require_decorate } from "./decorate-X8-ckSX6.js";
import { AppRouterHost } from "./app-router.host-CRteAOv-.js";
import { require_core } from "./procedure.factory-BVIy_yls.js";
import { initTRPC } from "./node-http-ZvZKxPic-xWxFTMZn.js";
import { require_decorateMetadata } from "./decorateMetadata-BmFM2rdr.js";
import { TRPCFactory } from "./trpc.factory-BntEt_3S.js";
import { FastifyDriver } from "./fastify.driver-D__pY79n.js";
import { ExpressDriver } from "./express.driver-Crc-0hjX.js";

//#region lib/trpc.driver.ts
var import_common = __toESM(require_common(), 1);
var import_core = __toESM(require_core(), 1);
var import_decorateMetadata = __toESM(require_decorateMetadata(), 1);
var import_defineProperty = __toESM(require_defineProperty(), 1);
var import_objectSpread2 = __toESM(require_objectSpread2(), 1);
var import_asyncToGenerator = __toESM(require_asyncToGenerator(), 1);
var import_decorate = __toESM(require_decorate(), 1);
var _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7;
function isExpressApplication(app) {
	return typeof app === "function" && typeof app.get === "function" && typeof app.post === "function" && typeof app.use === "function" && typeof app.listen === "function";
}
function isFastifyApplication(app) {
	return typeof app === "object" && app !== null && typeof app.get === "function" && typeof app.post === "function" && typeof app.register === "function" && typeof app.listen === "function";
}
let TRPCDriver = class TRPCDriver$1 {
	constructor(moduleRef) {
		this.moduleRef = moduleRef;
		(0, import_defineProperty.default)(this, "httpAdapterHost", void 0);
		(0, import_defineProperty.default)(this, "trpcFactory", void 0);
		(0, import_defineProperty.default)(this, "consoleLogger", void 0);
		(0, import_defineProperty.default)(this, "appRouterHost", void 0);
		(0, import_defineProperty.default)(this, "expressDriver", void 0);
		(0, import_defineProperty.default)(this, "fastifyDriver", void 0);
	}
	start(options) {
		return (0, import_asyncToGenerator.default)(function* () {
			const { procedure, router } = initTRPC.context().create((0, import_objectSpread2.default)((0, import_objectSpread2.default)({}, options.transformer != null ? { transformer: options.transformer } : {}), options.errorFormatter != null ? { errorFormatter: options.errorFormatter } : {}));
			const appRouter = this.trpcFactory.serializeAppRoutes(router, procedure);
			this.appRouterHost.appRouter = appRouter;
			const contextClass = options.context;
			const contextInstance = contextClass != null ? this.moduleRef.get(contextClass, { strict: false }) : null;
			const { httpAdapter } = this.httpAdapterHost;
			const platformName = httpAdapter.getType();
			const app = httpAdapter.getInstance();
			if (platformName === "express" && isExpressApplication(app)) yield this.expressDriver.start(options, app, appRouter, contextInstance);
			else if (platformName === "fastify" && isFastifyApplication(app)) yield this.fastifyDriver.start(options, app, appRouter, contextInstance);
			else throw new Error(`Unsupported http adapter: ${platformName}`);
		})();
	}
};
(0, import_decorate.default)([(0, import_common.Inject)(import_core.HttpAdapterHost), (0, import_decorateMetadata.default)("design:type", typeof (_ref2 = typeof import_core.HttpAdapterHost !== "undefined" && import_core.HttpAdapterHost) === "function" ? _ref2 : Object)], TRPCDriver.prototype, "httpAdapterHost", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(TRPCFactory), (0, import_decorateMetadata.default)("design:type", typeof (_ref3 = typeof TRPCFactory !== "undefined" && TRPCFactory) === "function" ? _ref3 : Object)], TRPCDriver.prototype, "trpcFactory", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(import_common.ConsoleLogger), (0, import_decorateMetadata.default)("design:type", typeof (_ref4 = typeof import_common.ConsoleLogger !== "undefined" && import_common.ConsoleLogger) === "function" ? _ref4 : Object)], TRPCDriver.prototype, "consoleLogger", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(AppRouterHost), (0, import_decorateMetadata.default)("design:type", typeof (_ref5 = typeof AppRouterHost !== "undefined" && AppRouterHost) === "function" ? _ref5 : Object)], TRPCDriver.prototype, "appRouterHost", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(ExpressDriver), (0, import_decorateMetadata.default)("design:type", typeof (_ref6 = typeof ExpressDriver !== "undefined" && ExpressDriver) === "function" ? _ref6 : Object)], TRPCDriver.prototype, "expressDriver", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(FastifyDriver), (0, import_decorateMetadata.default)("design:type", typeof (_ref7 = typeof FastifyDriver !== "undefined" && FastifyDriver) === "function" ? _ref7 : Object)], TRPCDriver.prototype, "fastifyDriver", void 0);
TRPCDriver = (0, import_decorate.default)([(0, import_common.Injectable)(), (0, import_decorateMetadata.default)("design:paramtypes", [typeof (_ref = typeof import_core.ModuleRef !== "undefined" && import_core.ModuleRef) === "function" ? _ref : Object])], TRPCDriver);

//#endregion
export { TRPCDriver };
//# sourceMappingURL=trpc.driver-C7vGo1xo.js.map