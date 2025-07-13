import { __toESM } from "./chunk-BLXvPPr8.js";
import { require_common } from "./common-AJXMMmZt.js";
import { require_decorate } from "./decorate-X8-ckSX6.js";
import { ProcedureFactory, require_core } from "./procedure.factory-BVIy_yls.js";
import { RouterFactory } from "./router.factory-BOgtMUHn.js";
import { TRPCFactory } from "./trpc.factory-BntEt_3S.js";
import { MiddlewareFactory } from "./middleware.factory-CF9uL2dJ.js";

//#region lib/factories/factory.module.ts
var import_common = __toESM(require_common(), 1);
var import_core = __toESM(require_core(), 1);
var import_decorate = __toESM(require_decorate(), 1);
let FactoryModule = class FactoryModule$1 {};
FactoryModule = (0, import_decorate.default)([(0, import_common.Module)({
	imports: [],
	providers: [
		import_common.ConsoleLogger,
		import_core.MetadataScanner,
		TRPCFactory,
		RouterFactory,
		ProcedureFactory,
		MiddlewareFactory
	],
	exports: [
		TRPCFactory,
		RouterFactory,
		ProcedureFactory,
		MiddlewareFactory
	]
})], FactoryModule);

//#endregion
export { FactoryModule };
//# sourceMappingURL=factory.module-BmTzhaV0.js.map