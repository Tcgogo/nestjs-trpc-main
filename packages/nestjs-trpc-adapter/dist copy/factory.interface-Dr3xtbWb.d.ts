import { TRPCMiddleware } from "./middleware.interface-CBggnn8Z.js";
import { AnyRouter, ProcedureType, TRPCRouterRecord } from "@trpc/server";
import { Class, Constructor } from "type-fest";
import { ZodType } from "zod";
import { AnyProcedureBuilder } from "@trpc/server/unstable-core-do-not-import";

//#region lib/interfaces/factory.interface.d.ts
declare enum ProcedureParamDecoratorType {
  Options = "options",
  Ctx = "ctx",
  Input = "input",
  RawInput = "rawInput",
  Type = "type",
  Path = "path",
}
type ProcedureImplementation = ({
  input,
  output
}: {
  input?: ZodType;
  output?: ZodType;
}) => any;
interface ProcedureParamDecoratorBase {
  type: ProcedureParamDecoratorType;
  index: number;
}
type ProcedureInputParamDecorator = ProcedureParamDecoratorBase & {
  type: ProcedureParamDecoratorType.Input;
  key?: string;
};
type ProcedureParamDecorator = ProcedureParamDecoratorBase | ProcedureInputParamDecorator;
interface ProcedureFactoryMetadata {
  type: ProcedureType;
  input: ZodType | undefined;
  output: ZodType | undefined;
  middlewares: Array<Constructor<TRPCMiddleware> | Class<TRPCMiddleware>>;
  name: string;
  implementation: ProcedureImplementation;
  params: Array<ProcedureParamDecorator> | undefined;
}
interface CustomProcedureFactoryMetadata {
  name: string;
  instance: unknown;
}
interface RouterInstance {
  name: string;
  path: string;
  instance: unknown;
  middlewares: Array<Class<TRPCMiddleware> | Constructor<TRPCMiddleware>>;
  alias?: string;
}
interface RoutersFactoryMetadata {
  name: string;
  path: string;
  alias?: string;
  instance: RouterInstance;
  procedures: Array<ProcedureFactoryMetadata>;
}
type TRPCRouter = <TProcRouterRecord extends TRPCRouterRecord>(procedures: TProcRouterRecord) => AnyRouter;
type TRPCPublicProcedure = AnyProcedureBuilder;
//#endregion
export { CustomProcedureFactoryMetadata, ProcedureFactoryMetadata, ProcedureImplementation, ProcedureInputParamDecorator, ProcedureParamDecorator, ProcedureParamDecoratorType, RouterInstance, RoutersFactoryMetadata, TRPCPublicProcedure, TRPCRouter };
//# sourceMappingURL=factory.interface-Dr3xtbWb.d.ts.map