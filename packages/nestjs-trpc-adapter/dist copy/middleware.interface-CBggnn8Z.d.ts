import { ProcedureType } from "@trpc/server";
import { MiddlewareResult } from "@trpc/server/unstable-core-do-not-import";

//#region lib/interfaces/middleware.interface.d.ts
type MiddlewareResponse = Promise<MiddlewareResult<any>> | (<$Context>(opts: {
  ctx: $Context;
}) => Promise<MiddlewareResult<any>>);
type MiddlewareOptions<TContext extends object = object> = {
  ctx: TContext;
  type: ProcedureType;
  path: string;
  input: unknown;
  rawInput: unknown;
  meta: unknown;
  next: (opts?: {
    ctx: Record<string, unknown>;
  }) => Promise<MiddlewareResult<any>>;
};
interface TRPCMiddleware {
  use(opts: MiddlewareOptions): MiddlewareResponse | Promise<MiddlewareResponse>;
}
//# sourceMappingURL=middleware.interface.d.ts.map

//#endregion
export { MiddlewareOptions, MiddlewareResponse, TRPCMiddleware };
//# sourceMappingURL=middleware.interface-CBggnn8Z.d.ts.map