import type { ProcedureType } from "@trpc/server";
import type { MiddlewareResult } from "@trpc/server/unstable-core-do-not-import";

export type MiddlewareResponse =
  | Promise<MiddlewareResult<any>>
  | (<$Context>(opts: { ctx: $Context }) => Promise<MiddlewareResult<any>>);

export type MiddlewareOptions<TContext extends object = object> = {
  ctx: TContext;
  type: ProcedureType;
  path: string;
  input: unknown;
  rawInput: unknown;
  meta: unknown;
  next: (opts?: {
    ctx: Record<string, unknown>;
  }) => Promise<MiddlewareResult<any>>;
};

export interface TRPCMiddleware {
  use(
    opts: MiddlewareOptions,
  ): MiddlewareResponse | Promise<MiddlewareResponse>;
}
