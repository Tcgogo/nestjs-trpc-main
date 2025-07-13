import { TRPCContext } from "../context.interface-DCgO0cXK.js";
import { SchemaImports } from "../module-options.interface-DeOL6Qt8.js";
import "../middleware.interface-CBggnn8Z.js";
import "../procedure-options.interface-CTHAOZxx.js";
import "../index-ij9f8GAA.js";
import { Class } from "type-fest";
import { OnModuleInit } from "@nestjs/common";

//#region lib/generators/trpc.generator.d.ts
declare class TRPCGenerator implements OnModuleInit {
  private rootModuleImportsMap;
  private readonly HELPER_TYPES_OUTPUT_FILE;
  private readonly HELPER_TYPES_OUTPUT_PATH;
  private readonly moduleCallerFilePath;
  private readonly project;
  private readonly appRouterSourceFile;
  private readonly consoleLogger;
  private readonly staticGenerator;
  private readonly middlewareHandler;
  private readonly contextHandler;
  private readonly serializerHandler;
  private readonly routerFactory;
  private readonly procedureFactory;
  private readonly middlewareFactory;
  private readonly importsScanner;
  onModuleInit(): void;
  generateSchemaFile(schemaImports?: Array<SchemaImports> | undefined): Promise<void>;
  generateHelpersFile(context?: Class<TRPCContext>): Promise<void>;
  private buildRootImportsMap;
}
//# sourceMappingURL=trpc.generator.d.ts.map

//#endregion
export { TRPCGenerator };
//# sourceMappingURL=trpc.generator.d.ts.map