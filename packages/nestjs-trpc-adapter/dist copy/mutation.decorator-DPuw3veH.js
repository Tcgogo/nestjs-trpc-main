import { __toESM } from "./chunk-BLXvPPr8.js";
import { require_common } from "./common-AJXMMmZt.js";
import { PROCEDURE_METADATA_KEY, PROCEDURE_TYPE_KEY } from "./trpc.constants-bTuZEOOy.js";
import { ProcedureType } from "./trpc.enum-XZGct68f.js";

//#region lib/decorators/mutation.decorator.ts
var import_common = __toESM(require_common(), 1);
/**
* Decorator that marks a router class method as a TRPC mutation procedure that can receive inbound
* requests and produce responses.
*
* An TRPC query procedure is mainly responsible for actions that modify or creates server-side data.
* for example `Mutation /trpc/userRouter.createUser`.
*
* @param {object} args configuration object specifying:
* - `input` - defines a `ZodSchema` validation logic for the input.
* - `output` - defines a `ZodSchema` validation logic for the output.
*
* @see [Method Decorators](https://nestjs-trpc.io/docs/routers#procedures)
*
* @publicApi
*/
function Mutation(args) {
	return (0, import_common.applyDecorators)(...[(0, import_common.SetMetadata)(PROCEDURE_TYPE_KEY, ProcedureType.Mutation), (0, import_common.SetMetadata)(PROCEDURE_METADATA_KEY, args)]);
}

//#endregion
export { Mutation };
//# sourceMappingURL=mutation.decorator-DPuw3veH.js.map