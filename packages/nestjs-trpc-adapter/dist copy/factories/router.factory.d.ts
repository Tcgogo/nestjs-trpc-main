import "../middleware.interface-CBggnn8Z.js";
import { RouterInstance, TRPCPublicProcedure, TRPCRouter } from "../factory.interface-Dr3xtbWb.js";

//#region lib/factories/router.factory.d.ts
declare class RouterFactory {
  private readonly consoleLogger;
  private readonly modulesContainer;
  private readonly procedureFactory;
  getRouters(): Array<RouterInstance>;
  private extractRouterFromWrapper;
  serializeRoutes(router: TRPCRouter, procedure: TRPCPublicProcedure): Record<string, any>;
}
//# sourceMappingURL=router.factory.d.ts.map

//#endregion
export { RouterFactory };
//# sourceMappingURL=router.factory.d.ts.map