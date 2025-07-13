import { ZodType } from "zod";

//#region lib/decorators/mutation.decorator.d.ts

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
declare function Mutation(args?: {
  input?: ZodType;
  output?: ZodType;
}): <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
//# sourceMappingURL=mutation.decorator.d.ts.map

//#endregion
export { Mutation };
//# sourceMappingURL=mutation.decorator-CwKT8ecU.d.ts.map