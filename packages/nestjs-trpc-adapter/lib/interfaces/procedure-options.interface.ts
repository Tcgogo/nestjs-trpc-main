import type { ProcedureParams } from '@trpc/server';
import type { ResolveOptions } from '@trpc/server/dist/core/internals/utils';

export type ProcedureOptions = ResolveOptions<ProcedureParams> & {
  type: string;
  path: string;
  rawInput: string;
};
