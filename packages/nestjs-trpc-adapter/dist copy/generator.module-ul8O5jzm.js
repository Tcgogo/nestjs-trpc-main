import { __toESM } from "./chunk-BLXvPPr8.js";
import { require_common } from "./common-AJXMMmZt.js";
import { require_defineProperty } from "./defineProperty-DOiqJb-o.js";
import { require_asyncToGenerator } from "./asyncToGenerator-CDlr4A8U.js";
import { require_decorate } from "./decorate-X8-ckSX6.js";
import { require_core } from "./procedure.factory-BVIy_yls.js";
import { TRPC_GENERATOR_OPTIONS, TRPC_MODULE_CALLER_FILE_PATH } from "./trpc.constants-bTuZEOOy.js";
import { require_decorateMetadata } from "./decorateMetadata-BmFM2rdr.js";
import { StaticGenerator } from "./static.generator-FNFHztAl.js";
import { TYPESCRIPT_APP_ROUTER_SOURCE_FILE, TYPESCRIPT_PROJECT } from "./generator.constants-BHzRvyZp.js";
import { ProcedureGenerator } from "./procedure.generator-BS8c8w2r.js";
import { DecoratorGenerator } from "./decorator.generator-D0om8ofS.js";
import { RouterGenerator } from "./router.generator-g-vnolCV.js";
import { MiddlewareGenerator } from "./middleware.generator-BEnXpCqH.js";
import { ContextGenerator } from "./context.generator-DKcrJxMc.js";
import { TRPCGenerator } from "./trpc.generator-BZIXkgz1.js";
import { FactoryModule } from "./factory.module-BmTzhaV0.js";
import { ScannerModule } from "./scanner.module-BvKWasal.js";
import * as path from "node:path";
import { ModuleKind, Project, ScriptTarget } from "ts-morph";

//#region lib/generators/generator.module.ts
var import_common = __toESM(require_common(), 1);
var import_core = __toESM(require_core(), 1);
var import_defineProperty = __toESM(require_defineProperty(), 1);
var import_decorateMetadata = __toESM(require_decorateMetadata(), 1);
var import_asyncToGenerator = __toESM(require_asyncToGenerator(), 1);
var import_decorate = __toESM(require_decorate(), 1);
var _ref, _GeneratorModule;
let GeneratorModule = _GeneratorModule = class GeneratorModule$1 {
	constructor() {
		(0, import_defineProperty.default)(this, "trpcGenerator", void 0);
		(0, import_defineProperty.default)(this, "options", void 0);
	}
	static forRoot(options) {
		var _options$outputDirPat;
		const defaultCompilerOptions = {
			target: ScriptTarget.ES2019,
			module: ModuleKind.CommonJS,
			emitDecoratorMetadata: true,
			experimentalDecorators: true,
			allowJs: true,
			checkJs: true,
			esModuleInterop: true
		};
		const project = new Project({ compilerOptions: defaultCompilerOptions });
		const appRouterSourceFile = project.createSourceFile(path.resolve((_options$outputDirPat = options.outputDirPath) !== null && _options$outputDirPat !== void 0 ? _options$outputDirPat : "./", "server.ts"), function() {}, { overwrite: true });
		return {
			module: _GeneratorModule,
			providers: [
				{
					provide: TRPC_MODULE_CALLER_FILE_PATH,
					useValue: options.rootModuleFilePath
				},
				{
					provide: TYPESCRIPT_PROJECT,
					useValue: project
				},
				{
					provide: TYPESCRIPT_APP_ROUTER_SOURCE_FILE,
					useValue: appRouterSourceFile
				},
				{
					provide: TRPC_GENERATOR_OPTIONS,
					useValue: options
				}
			]
		};
	}
	onModuleInit() {
		return (0, import_asyncToGenerator.default)(function* () {
			yield this.trpcGenerator.generateSchemaFile(this.options.schemaFileImports);
			yield this.trpcGenerator.generateHelpersFile(this.options.context);
		})();
	}
};
(0, import_decorate.default)([(0, import_common.Inject)(TRPCGenerator), (0, import_decorateMetadata.default)("design:type", typeof (_ref = typeof TRPCGenerator !== "undefined" && TRPCGenerator) === "function" ? _ref : Object)], GeneratorModule.prototype, "trpcGenerator", void 0);
(0, import_decorate.default)([(0, import_common.Inject)(TRPC_GENERATOR_OPTIONS), (0, import_decorateMetadata.default)("design:type", Object)], GeneratorModule.prototype, "options", void 0);
GeneratorModule = _GeneratorModule = (0, import_decorate.default)([(0, import_common.Module)({
	imports: [FactoryModule, ScannerModule],
	providers: [
		import_common.ConsoleLogger,
		import_core.MetadataScanner,
		TRPCGenerator,
		RouterGenerator,
		ProcedureGenerator,
		DecoratorGenerator,
		MiddlewareGenerator,
		ContextGenerator,
		StaticGenerator
	],
	exports: [TRPCGenerator]
})], GeneratorModule);

//#endregion
export { GeneratorModule };
//# sourceMappingURL=generator.module-ul8O5jzm.js.map