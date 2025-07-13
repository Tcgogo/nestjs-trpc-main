import "../context.interface-DCgO0cXK.js";
import "../module-options.interface-DeOL6Qt8.js";
import { TRPCMiddleware } from "../middleware.interface-CBggnn8Z.js";
import "../procedure-options.interface-CTHAOZxx.js";
import "../index-ij9f8GAA.js";
import { Class, Constructor } from "type-fest";

//#region lib/factories/middleware.factory.d.ts
interface MiddlewareMetadata {
  path: string;
  instance: Class<TRPCMiddleware> | Constructor<TRPCMiddleware>;
}
declare class MiddlewareFactory {
  private readonly routerFactory;
  private readonly procedureFactory;
  getMiddlewares(): Array<MiddlewareMetadata>;
}
//#endregion
export { MiddlewareFactory };
//# sourceMappingURL=middleware.factory.d.ts.map