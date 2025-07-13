import { AppRouterHost } from "./app-router.host-CMu6JsU2.js";
import "./context.interface-DCgO0cXK.js";
import { TRPCModuleOptions } from "./module-options.interface-DeOL6Qt8.js";
import "./middleware.interface-CBggnn8Z.js";
import "./procedure-options.interface-CTHAOZxx.js";
import "./index-ij9f8GAA.js";
import { ExpressDriver } from "./express.driver-CR5zJ2F2.js";
import { FastifyDriver } from "./fastify.driver-DKWGbFw2.js";
import "./index-Ct_O6efF.js";
import "./factory.interface-Dr3xtbWb.js";
import { TRPCFactory } from "./trpc.factory-orHlNoSO.js";
import { HttpAdapterHost, ModuleRef } from "@nestjs/core";
import { ConsoleLogger } from "@nestjs/common";

//#region lib/trpc.driver.d.ts
declare class TRPCDriver<TOptions extends Record<string, any> = TRPCModuleOptions> {
  private moduleRef;
  protected readonly httpAdapterHost: HttpAdapterHost;
  protected readonly trpcFactory: TRPCFactory;
  protected readonly consoleLogger: ConsoleLogger;
  protected readonly appRouterHost: AppRouterHost;
  protected readonly expressDriver: ExpressDriver;
  protected readonly fastifyDriver: FastifyDriver;
  constructor(moduleRef: ModuleRef);
  start(options: TRPCModuleOptions): Promise<void>;
}
//# sourceMappingURL=trpc.driver.d.ts.map

//#endregion
export { TRPCDriver };
//# sourceMappingURL=trpc.driver.d.ts.map