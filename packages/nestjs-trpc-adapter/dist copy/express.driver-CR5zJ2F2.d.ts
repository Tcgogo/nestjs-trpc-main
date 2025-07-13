import { TRPCContext } from "./context.interface-DCgO0cXK.js";
import { TRPCModuleOptions } from "./module-options.interface-DeOL6Qt8.js";
import { AnyRouter } from "@trpc/server";
import { Application } from "express";

//#region lib/drivers/express.driver.d.ts
declare class ExpressDriver<TOptions extends Record<string, any> = TRPCModuleOptions> {
  start(options: TRPCModuleOptions, app: ExpressApplication, appRouter: AnyRouter, contextInstance: TRPCContext | null): Promise<void>;
}
//# sourceMappingURL=express.driver.d.ts.map

//#endregion
export { ExpressDriver };
//# sourceMappingURL=express.driver-CR5zJ2F2.d.ts.map