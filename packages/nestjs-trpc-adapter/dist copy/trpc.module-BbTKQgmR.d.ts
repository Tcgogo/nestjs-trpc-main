import { TRPCModuleOptions } from "./module-options.interface-DeOL6Qt8.js";
import { DynamicModule, OnModuleInit } from "@nestjs/common/interfaces";

//#region lib/trpc.module.d.ts
declare class TRPCModule implements OnModuleInit {
  private readonly options;
  private readonly consoleLogger;
  private readonly httpAdapterHost;
  private readonly trpcDriver;
  private readonly appRouterHost;
  static forRoot(options?: TRPCModuleOptions): DynamicModule;
  onModuleInit(): Promise<void>;
}
//# sourceMappingURL=trpc.module.d.ts.map

//#endregion
export { TRPCModule };
//# sourceMappingURL=trpc.module-BbTKQgmR.d.ts.map