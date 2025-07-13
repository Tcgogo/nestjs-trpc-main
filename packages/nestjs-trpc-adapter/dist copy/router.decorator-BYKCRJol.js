import { __toESM } from "./chunk-BLXvPPr8.js";
import { require_common } from "./common-AJXMMmZt.js";
import { ROUTER_METADATA_KEY } from "./trpc.constants-bTuZEOOy.js";
import { FileScanner } from "./file.scanner-DjuJxM_C.js";

//#region lib/decorators/router.decorator.ts
var import_common = __toESM(require_common(), 1);
const fileScanner = new FileScanner();
/**
* Decorator that marks a class as a TRPC router that can receive inbound
* requests and produce responses.
*
* An TRPC Router responds to inbound HTTP Requests and produces HTTP Responses.
* It defines a class that provides the context for one or more related procedures that correspond to HTTP request methods and associated routes
* for example `Query /trpc/userRouter.getUsers`, `Mutation /trpc/userRouter.createUser`.
*
*
* @param {object} args configuration object specifying:
* - `alias` - string that defines a router alias. The alias is used both in the auto schema file generation, and for the actual api access.
*
* @see [Routers](https://nestjs-trpc.io/docs/routers)
*
* @publicApi
*/
function Router(args) {
	const path = fileScanner.getCallerFilePath();
	return (0, import_common.applyDecorators)(...[(0, import_common.SetMetadata)(ROUTER_METADATA_KEY, {
		alias: args === null || args === void 0 ? void 0 : args.alias,
		path
	})]);
}

//#endregion
export { Router };
//# sourceMappingURL=router.decorator-BYKCRJol.js.map