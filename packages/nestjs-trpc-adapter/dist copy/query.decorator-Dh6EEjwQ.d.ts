import { ZodType } from "zod";

//#region lib/decorators/query.decorator.d.ts

/**
 * Decorator that marks a router class method as a TRPC query procedure that can receive inbound
 * requests and produce responses.
 *
 * An TRPC query procedure is mainly responsible for actions that retrieve data.
 * for example `Query /trpc/userRouter.getUsers`.
 *
 * @param {object} args configuration object specifying:
 * - `input` - defines a `ZodType` validation logic for the input.
 * - `output` - defines a `ZodType` validation logic for the output.
 *
 * @see [Method Decorators](https://nestjs-trpc.io/docs/routers#procedures)
 *
 * @publicApi
 */
declare function Query(args?: {
  input?: ZodType;
  output?: ZodType;
}): <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
//# sourceMappingURL=query.decorator.d.ts.map

//#endregion
export { Query };
//# sourceMappingURL=query.decorator-Dh6EEjwQ.d.ts.map