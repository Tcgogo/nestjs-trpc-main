import { TRPCContext } from "./context.interface-DCgO0cXK.js";
import { TRPCModuleOptions } from "./module-options.interface-DeOL6Qt8.js";
import { AnyRouter } from "@trpc/server";
import { FastifyInstance } from "fastify";

//#region lib/drivers/fastify.driver.d.ts
declare class FastifyDriver<TOptions extends Record<string, any> = TRPCModuleOptions> {
  start(options: TRPCModuleOptions, app: FastifyApplication, appRouter: AnyRouter, contextInstance: TRPCContext | null): Promise<void>;
}
//# sourceMappingURL=fastify.driver.d.ts.map

//#endregion
export { FastifyDriver };
//# sourceMappingURL=fastify.driver-DKWGbFw2.d.ts.map