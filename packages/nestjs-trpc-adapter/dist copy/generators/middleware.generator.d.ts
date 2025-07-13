import "../context.interface-DCgO0cXK.js";
import "../module-options.interface-DeOL6Qt8.js";
import { TRPCMiddleware } from "../middleware.interface-CBggnn8Z.js";
import "../procedure-options.interface-CTHAOZxx.js";
import "../index-ij9f8GAA.js";
import { OptionalKind, Project, PropertySignatureStructure } from "ts-morph";
import { Class } from "type-fest";

//#region lib/generators/middleware.generator.d.ts
declare class MiddlewareGenerator {
  getMiddlewareInterface(routerFilePath: string, middleware: Class<TRPCMiddleware>, project: Project): Promise<{
    name: string;
    properties: Array<OptionalKind<PropertySignatureStructure>>;
  } | null>;
  private extractCtxTypeFromUseMethod;
  private getClassDeclaration;
  private typeToProperties;
}
//# sourceMappingURL=middleware.generator.d.ts.map

//#endregion
export { MiddlewareGenerator };
//# sourceMappingURL=middleware.generator.d.ts.map