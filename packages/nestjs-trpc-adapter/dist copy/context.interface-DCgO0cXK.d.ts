import { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";

//#region lib/interfaces/context.interface.d.ts
type ContextOptions = CreateExpressContextOptions | CreateFastifyContextOptions;
interface TRPCContext {
  create(opts: ContextOptions): Record<string, unknown> | Promise<Record<string, unknown>>;
}
//# sourceMappingURL=context.interface.d.ts.map

//#endregion
export { ContextOptions, TRPCContext };
//# sourceMappingURL=context.interface-DCgO0cXK.d.ts.map