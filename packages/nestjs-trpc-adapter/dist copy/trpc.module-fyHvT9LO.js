import { __toESM } from "./chunk-BLXvPPr8.js";
import { require_common } from "./common-AJXMMmZt.js";
import { require_defineProperty } from "./defineProperty-DOiqJb-o.js";
import { require_asyncToGenerator } from "./asyncToGenerator-CDlr4A8U.js";
import { require_decorate } from "./decorate-X8-ckSX6.js";
import { AppRouterHost } from "./app-router.host-CRteAOv-.js";
import { require_core } from "./procedure.factory-BVIy_yls.js";
import { LOGGER_CONTEXT, TRPC_MODULE_OPTIONS } from "./trpc.constants-bTuZEOOy.js";
import { require_decorateMetadata } from "./decorateMetadata-BmFM2rdr.js";
import { FastifyDriver } from "./fastify.driver-D__pY79n.js";
import { ExpressDriver } from "./express.driver-Crc-0hjX.js";
import { TRPCDriver } from "./trpc.driver-C7vGo1xo.js";
import { FileScanner } from "./file.scanner-DjuJxM_C.js";
import { FactoryModule } from "./factory.module-BmTzhaV0.js";
import { ScannerModule } from "./scanner.module-BvKWasal.js";
import { GeneratorModule } from "./generator.module-ul8O5jzm.js";

//#region lib/trpc.module.ts
var import_common = __toESM(require_common(), 1);
var import_core = __toESM(require_core(), 1);
var import_defineProperty = __toESM(require_defineProperty(), 1);
var import_decorateMetadata = __toESM(require_decorateMetadata(), 1);
var import_asyncToGenerator = __toESM(require_asyncToGenerator(), 1);
var import_decorate = __toESM(require_decorate(), 1);
var _ref, _ref2, _ref3, _ref4, _TRPCModule;
let TRPCModule = _TRPCModule = class TRPCModule$1 {
	constructor() {
		(0, import_defineProperty.default)(this, "options", void 0);
		(0, import_defineProperty.default)(this, "consoleLogger", void 0);
		(0, import_defineProperty.default)(this, "httpAdapterHost", void 0);
		(0, import_defineProperty.default)(this, "trpcDriver", void 0);
		(0, import_defineProperty.default)(this, "appRouterHost", void 0);
	}
	static forRoot(options = {}) {
		const imports = [];
		if (options.autoSchemaFile != null) {
			const fileScanner = new FileScanner();
			const callerFilePath = fileScanner.getCallerFilePath();
			imports.push(GeneratorModule.forRoot({
				outputDirPath: options.autoSchemaFile,
				rootModuleFilePath: callerFilePath,
				schemaFileImports: options.schemaFileImports,
				context: options.context
			}));
		}
		return {
			module: _TRPCModule,
			imports,
			providers: [{
				provide: TRPC_MODULE_OPTIONS,
				useValue: options
			}]
		};
	}
	onModuleInit() {
		return (0, import_asyncToGenerator.default)(function* () {
			var _this$httpAdapterHost;
			const httpAdapter = (_this$httpAdapterHost = this.httpAdapterHost) === null || _this$httpAdapterHost === void 0 ? void 0 : _this$httpAdapterHost.httpAdapter;
			if (!httpAdapter) return;
			this.consoleLogger.setContext(LOGGER_CONTEXT);
			yield this.trpcDriver.start(this.options);
			const platformName = httpAdapter.getType();
			if (this.appRouterHost.appRouter != null) this.consoleLogger.log(`Server has been initialized successfully using the ${platformName} driver.`, "TRPC Server");
		})();
	}
};
(0, import_decorate.default)([(0, import_common.Inject)(TRPC_MODULE_OPTIONS), (0, import_decorateMetadata.default)("design:type", Object)], TRPCModule.prototype, "options", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(import_common.ConsoleLogger), (0, import_decorateMetadata.default)("design:type", typeof (_ref = typeof import_common.ConsoleLogger !== "undefined" && import_common.ConsoleLogger) === "function" ? _ref : Object)], TRPCModule.prototype, "consoleLogger", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(import_core.HttpAdapterHost), (0, import_decorateMetadata.default)("design:type", typeof (_ref2 = typeof import_core.HttpAdapterHost !== "undefined" && import_core.HttpAdapterHost) === "function" ? _ref2 : Object)], TRPCModule.prototype, "httpAdapterHost", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(TRPCDriver), (0, import_decorateMetadata.default)("design:type", typeof (_ref3 = typeof TRPCDriver !== "undefined" && TRPCDriver) === "function" ? _ref3 : Object)], TRPCModule.prototype, "trpcDriver", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(AppRouterHost), (0, import_decorateMetadata.default)("design:type", typeof (_ref4 = typeof AppRouterHost !== "undefined" && AppRouterHost) === "function" ? _ref4 : Object)], TRPCModule.prototype, "appRouterHost", void 0);
TRPCModule = _TRPCModule = (0, import_decorate.default)([(0, import_common.Module)({
	imports: [FactoryModule, ScannerModule],
	providers: [
		import_common.ConsoleLogger,
		TRPCDriver,
		FastifyDriver,
		ExpressDriver,
		AppRouterHost
	],
	exports: [AppRouterHost]
})], TRPCModule);

//#endregion
export { TRPCModule };
//# sourceMappingURL=trpc.module-fyHvT9LO.js.map