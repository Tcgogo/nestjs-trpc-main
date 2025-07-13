import "../context.interface-DCgO0cXK.js";
import "../module-options.interface-DeOL6Qt8.js";
import "../middleware.interface-CBggnn8Z.js";
import "../procedure-options.interface-CTHAOZxx.js";
import "../index-ij9f8GAA.js";
import { GeneratorModuleOptions } from "../generator.interface-C2180_4E.js";
import { OnModuleInit } from "@nestjs/common";
import { DynamicModule } from "@nestjs/common/interfaces";

//#region lib/generators/generator.module.d.ts
declare class GeneratorModule implements OnModuleInit {
  private readonly trpcGenerator;
  private readonly options;
  static forRoot(options: GeneratorModuleOptions): DynamicModule;
  onModuleInit(): Promise<void>;
}
//# sourceMappingURL=generator.module.d.ts.map

//#endregion
export { GeneratorModule };
//# sourceMappingURL=generator.module.d.ts.map