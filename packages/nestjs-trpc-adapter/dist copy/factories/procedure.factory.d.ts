import "../context.interface-DCgO0cXK.js";
import "../module-options.interface-DeOL6Qt8.js";
import { TRPCMiddleware } from "../middleware.interface-CBggnn8Z.js";
import "../procedure-options.interface-CTHAOZxx.js";
import "../index-ij9f8GAA.js";
import { ProcedureFactoryMetadata, TRPCPublicProcedure } from "../factory.interface-Dr3xtbWb.js";
import { Class, Constructor } from "type-fest";
import { ModuleRef } from "@nestjs/core";

//#region lib/factories/procedure.factory.d.ts
declare class ProcedureFactory {
  private moduleRef;
  private readonly consoleLogger;
  private readonly metadataScanner;
  constructor(moduleRef: ModuleRef);
  getProcedures(instance: any, prototype: Record<string, (...args: Array<unknown>) => unknown>): Array<ProcedureFactoryMetadata>;
  private extractProcedureParams;
  private extractProcedureMetadata;
  serializeProcedures(procedures: Array<ProcedureFactoryMetadata>, instance: any, camelCasedRouterName: string, procedureBuilder: TRPCPublicProcedure, routerMiddlewares: Array<Constructor<TRPCMiddleware> | Class<TRPCMiddleware>>): Record<string, any>;
  private createProcedureInstance;
  private serializeProcedureParams;
  private createSerializedProcedure;
}
//# sourceMappingURL=procedure.factory.d.ts.map

//#endregion
export { ProcedureFactory };
//# sourceMappingURL=procedure.factory.d.ts.map