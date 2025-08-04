import { z, ZodError } from 'zod';
import type { ZodFlattenedError } from "zod";
import type { TRPCDefaultErrorShape, TRPCError } from '@trpc/server';

// Utility type to replace the return type of a function
export type ReplaceReturnType<T extends (...a: any) => any, TNewReturn> = (...a: Parameters<T>) => TNewReturn;

// Flattened zod error
export type FlattenedZodError = string[]

// This type extends the default error shape with "inputValidationError"
export type CustomErrorShape = TRPCDefaultErrorShape & {
  data: TRPCDefaultErrorShape['data'] & {
    inputValidationError: FlattenedZodError | null
  }
}

// Error formatter parameters type
export interface ErrorFormatterParams {
  shape: TRPCDefaultErrorShape;
  error: TRPCError;
  type: 'query' | 'mutation' | 'subscription' | 'unknown';
  path: string | undefined;
  input: unknown;
  ctx: undefined;
}

// This type defines the custom error formatter
export type CustomErrorFormatter = (opts: ErrorFormatterParams) => CustomErrorShape;

export const errorFormatter = (opts: ErrorFormatterParams) => {
  const { shape, error } = opts;
  console.log('%c [error]-33', 'font-size:13px; background:#336699; color:#fff;', error);

  const isInputValidationError = error.code === "BAD_REQUEST" && error.cause instanceof ZodError

  if (isInputValidationError) {
    console.log(z.treeifyError(error.cause));
  }

  return {
    ...shape,
    data: {
      ...shape.data,
    }
  }
}
