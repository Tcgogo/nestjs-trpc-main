import { __toESM } from "./chunk-BLXvPPr8.js";
import { require_common, require_objectSpread2 } from "./common-AJXMMmZt.js";
import { require_defineProperty } from "./defineProperty-DOiqJb-o.js";
import { require_asyncToGenerator } from "./asyncToGenerator-CDlr4A8U.js";
import { require_decorate } from "./decorate-X8-ckSX6.js";
import { ProcedureFactory } from "./procedure.factory-BVIy_yls.js";
import { TRPC_MODULE_CALLER_FILE_PATH } from "./trpc.constants-bTuZEOOy.js";
import { require_decorateMetadata } from "./decorateMetadata-BmFM2rdr.js";
import { RouterFactory } from "./router.factory-BOgtMUHn.js";
import { saveOrOverrideFile } from "./ts-morph.util-5vn0uEp8.js";
import { ImportsScanner } from "./imports.scanner-m3j-zqOP.js";
import { StaticGenerator } from "./static.generator-FNFHztAl.js";
import { TYPESCRIPT_APP_ROUTER_SOURCE_FILE, TYPESCRIPT_PROJECT } from "./generator.constants-BHzRvyZp.js";
import { RouterGenerator } from "./router.generator-g-vnolCV.js";
import { MiddlewareGenerator } from "./middleware.generator-BEnXpCqH.js";
import { ContextGenerator } from "./context.generator-DKcrJxMc.js";
import { MiddlewareFactory } from "./middleware.factory-CF9uL2dJ.js";
import * as path from "node:path";
import { Project, SourceFile } from "ts-morph";
import * as process from "node:process";

//#region lib/generators/trpc.generator.ts
var import_common = __toESM(require_common(), 1);
var import_defineProperty = __toESM(require_defineProperty(), 1);
var import_decorateMetadata = __toESM(require_decorateMetadata(), 1);
var import_objectSpread2 = __toESM(require_objectSpread2(), 1);
var import_asyncToGenerator = __toESM(require_asyncToGenerator(), 1);
var import_decorate = __toESM(require_decorate(), 1);
var _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11;
let TRPCGenerator = class TRPCGenerator$1 {
	constructor() {
		(0, import_defineProperty.default)(this, "rootModuleImportsMap", void 0);
		(0, import_defineProperty.default)(this, "HELPER_TYPES_OUTPUT_FILE", "index.ts");
		(0, import_defineProperty.default)(this, "HELPER_TYPES_OUTPUT_PATH", path.join(path.resolve(), "types"));
		(0, import_defineProperty.default)(this, "moduleCallerFilePath", void 0);
		(0, import_defineProperty.default)(this, "project", void 0);
		(0, import_defineProperty.default)(this, "appRouterSourceFile", void 0);
		(0, import_defineProperty.default)(this, "consoleLogger", void 0);
		(0, import_defineProperty.default)(this, "staticGenerator", void 0);
		(0, import_defineProperty.default)(this, "middlewareHandler", void 0);
		(0, import_defineProperty.default)(this, "contextHandler", void 0);
		(0, import_defineProperty.default)(this, "serializerHandler", void 0);
		(0, import_defineProperty.default)(this, "routerFactory", void 0);
		(0, import_defineProperty.default)(this, "procedureFactory", void 0);
		(0, import_defineProperty.default)(this, "middlewareFactory", void 0);
		(0, import_defineProperty.default)(this, "importsScanner", void 0);
	}
	onModuleInit() {
		this.rootModuleImportsMap = this.buildRootImportsMap();
	}
	generateSchemaFile(schemaImports) {
		var _this = this;
		return (0, import_asyncToGenerator.default)(function* () {
			try {
				const routers = this.routerFactory.getRouters();
				const mappedRoutesAndProcedures = routers.map(function(route) {
					const { instance, name, alias, path: path$1 } = route;
					const prototype = Object.getPrototypeOf(instance);
					const procedures = _this.procedureFactory.getProcedures(instance, prototype);
					return {
						name,
						path: path$1,
						alias,
						instance: (0, import_objectSpread2.default)({}, route),
						procedures
					};
				});
				this.staticGenerator.generateStaticDeclaration(this.appRouterSourceFile);
				if (schemaImports != null && schemaImports.length > 0) {
					const schemaImportNames = schemaImports.map(function(schemaImport) {
						return schemaImport.name;
					});
					this.staticGenerator.addSchemaImports(this.appRouterSourceFile, schemaImportNames, this.rootModuleImportsMap);
				}
				const routersMetadata = this.serializerHandler.serializeRouters(mappedRoutesAndProcedures, this.project);
				const routersStringDeclarations = this.serializerHandler.generateRoutersStringFromMetadata(routersMetadata);
				this.appRouterSourceFile.addStatements(`
        const appRouter = t.router({${routersStringDeclarations}});
        export type AppRouter = typeof appRouter;
      `);
				yield saveOrOverrideFile(this.appRouterSourceFile);
				this.consoleLogger.log(`AppRouter has been updated successfully at "./${path.relative(process.cwd(), this.appRouterSourceFile.getFilePath())}".`, "TRPC Generator");
			} catch (error) {
				this.consoleLogger.warn("TRPC Generator encountered an error.", error);
			}
		})();
	}
	generateHelpersFile(context) {
		return (0, import_asyncToGenerator.default)(function* () {
			try {
				const middlewares = this.middlewareFactory.getMiddlewares();
				const helperTypesSourceFile = this.project.createSourceFile(path.resolve(this.HELPER_TYPES_OUTPUT_PATH, this.HELPER_TYPES_OUTPUT_FILE), void 0, { overwrite: true });
				if (context != null) {
					const contextImport = this.rootModuleImportsMap.get(context.name);
					if (contextImport == null) throw new Error("Could not find context import declaration.");
					const contextType = yield this.contextHandler.getContextInterface(contextImport.sourceFile, context);
					helperTypesSourceFile.addTypeAlias({
						isExported: true,
						name: "Context",
						type: contextType !== null && contextType !== void 0 ? contextType : "{}"
					});
				}
				for (const middleware of middlewares) {
					const middlewareInterface = yield this.middlewareHandler.getMiddlewareInterface(middleware.path, middleware.instance, this.project);
					if (middlewareInterface != null) helperTypesSourceFile.addInterface({
						isExported: true,
						name: `${middlewareInterface.name}Context`,
						extends: ["Context"],
						properties: middlewareInterface.properties
					});
				}
				yield saveOrOverrideFile(helperTypesSourceFile);
				this.consoleLogger.log(`Helper types has been updated successfully at "nestjs-trpc/types".`, "TRPC Generator");
			} catch (e) {
				this.consoleLogger.warn("TRPC Generator encountered an error.", e);
			}
		})();
	}
	buildRootImportsMap() {
		const rootModuleSourceFile = this.project.addSourceFileAtPathIfExists(this.moduleCallerFilePath);
		if (rootModuleSourceFile == null) throw new Error("Could not access root module file.");
		return this.importsScanner.buildSourceFileImportsMap(rootModuleSourceFile, this.project);
	}
};
(0, import_decorate.default)([(0, import_common.Inject)(TRPC_MODULE_CALLER_FILE_PATH), (0, import_decorateMetadata.default)("design:type", String)], TRPCGenerator.prototype, "moduleCallerFilePath", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(TYPESCRIPT_PROJECT), (0, import_decorateMetadata.default)("design:type", typeof (_ref = typeof Project !== "undefined" && Project) === "function" ? _ref : Object)], TRPCGenerator.prototype, "project", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(TYPESCRIPT_APP_ROUTER_SOURCE_FILE), (0, import_decorateMetadata.default)("design:type", typeof (_ref2 = typeof SourceFile !== "undefined" && SourceFile) === "function" ? _ref2 : Object)], TRPCGenerator.prototype, "appRouterSourceFile", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(import_common.ConsoleLogger), (0, import_decorateMetadata.default)("design:type", typeof (_ref3 = typeof import_common.ConsoleLogger !== "undefined" && import_common.ConsoleLogger) === "function" ? _ref3 : Object)], TRPCGenerator.prototype, "consoleLogger", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(StaticGenerator), (0, import_decorateMetadata.default)("design:type", typeof (_ref4 = typeof StaticGenerator !== "undefined" && StaticGenerator) === "function" ? _ref4 : Object)], TRPCGenerator.prototype, "staticGenerator", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(MiddlewareGenerator), (0, import_decorateMetadata.default)("design:type", typeof (_ref5 = typeof MiddlewareGenerator !== "undefined" && MiddlewareGenerator) === "function" ? _ref5 : Object)], TRPCGenerator.prototype, "middlewareHandler", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(ContextGenerator), (0, import_decorateMetadata.default)("design:type", typeof (_ref6 = typeof ContextGenerator !== "undefined" && ContextGenerator) === "function" ? _ref6 : Object)], TRPCGenerator.prototype, "contextHandler", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(RouterGenerator), (0, import_decorateMetadata.default)("design:type", typeof (_ref7 = typeof RouterGenerator !== "undefined" && RouterGenerator) === "function" ? _ref7 : Object)], TRPCGenerator.prototype, "serializerHandler", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(RouterFactory), (0, import_decorateMetadata.default)("design:type", typeof (_ref8 = typeof RouterFactory !== "undefined" && RouterFactory) === "function" ? _ref8 : Object)], TRPCGenerator.prototype, "routerFactory", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(ProcedureFactory), (0, import_decorateMetadata.default)("design:type", typeof (_ref9 = typeof ProcedureFactory !== "undefined" && ProcedureFactory) === "function" ? _ref9 : Object)], TRPCGenerator.prototype, "procedureFactory", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(MiddlewareFactory), (0, import_decorateMetadata.default)("design:type", typeof (_ref10 = typeof MiddlewareFactory !== "undefined" && MiddlewareFactory) === "function" ? _ref10 : Object)], TRPCGenerator.prototype, "middlewareFactory", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(ImportsScanner), (0, import_decorateMetadata.default)("design:type", typeof (_ref11 = typeof ImportsScanner !== "undefined" && ImportsScanner) === "function" ? _ref11 : Object)], TRPCGenerator.prototype, "importsScanner", void 0);
TRPCGenerator = (0, import_decorate.default)([(0, import_common.Injectable)()], TRPCGenerator);

//#endregion
export { TRPCGenerator };
//# sourceMappingURL=trpc.generator-BZIXkgz1.js.map