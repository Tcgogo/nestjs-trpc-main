import { TRPCRouter } from "./factory.interface-Dr3xtbWb.js";
import { AnyRouter, TRPCMergeRouters } from "@trpc/server";
import { AnyProcedureBuilder } from "@trpc/server/unstable-core-do-not-import";

//#region lib/factories/trpc.factory.d.ts
declare class TRPCFactory {
  private readonly routerFactory;
  serializeAppRoutes(router: TRPCRouter, procedure: AnyProcedureBuilder): TRPCMergeRouters<Array<AnyRouter>, any>;
}
//# sourceMappingURL=trpc.factory.d.ts.map

//#endregion
export { TRPCFactory };
//# sourceMappingURL=trpc.factory-orHlNoSO.d.ts.map