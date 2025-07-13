import "../middleware.interface-CBggnn8Z.js";
import { RoutersFactoryMetadata } from "../factory.interface-Dr3xtbWb.js";
import { RouterGeneratorMetadata } from "../generator.interface-B67TxlW0.js";
import { Project } from "ts-morph";

//#region lib/generators/router.generator.d.ts
declare class RouterGenerator {
  private readonly decoratorHandler;
  private readonly procedureGenerator;
  serializeRouters(routers: Array<RoutersFactoryMetadata>, project: Project): Array<RouterGeneratorMetadata>;
  private serializeRouterProcedures;
  generateRoutersStringFromMetadata(routers: Array<RouterGeneratorMetadata>): string;
}
//# sourceMappingURL=router.generator.d.ts.map

//#endregion
export { RouterGenerator };
//# sourceMappingURL=router.generator.d.ts.map