import type { TRPCErrorFormatter, TRPCRootConfig } from '@trpc/server'
import type { Class } from 'type-fest'
import type { ZodType } from 'zod'
import type { TRPCContext } from './context.interface'

export type SchemaImports
  = | ((...args: Array<unknown>) => unknown)
    | object
    | ZodType

/**
 * "TRPCModule" options object.
 */
export interface TRPCModuleOptions {
  /**
   * The platform to use for the TRPC server.
   * @default 'express'
   */
  platform?: 'express' | 'fastify'

  /**
   * Path to trpc app router and helpers types output.
   */
  autoSchemaFile?: string

  /**
   * Specifies additional imports for the schema file. This array can include functions, objects, or Zod schemas.
   * While `nestjs-trpc` typically handles imports automatically, this option allows manual inclusion of imports for exceptional cases.
   * Use this property only when automatic import resolution is insufficient.
   *
   * Please consider opening an issue on Github so we can update the adapter to better handle your case.
   */
  schemaFileImports?: Array<SchemaImports>

  /**
   * The base path for all trpc requests.
   * @default "/trpc"
   */
  basePath?: string

  /**
   * The exposed trpc options when creating a route with either `createExpressMiddleware` or `createFastifyMiddleware`.
   * If not provided, the adapter will use a default createContext.
   * @link https://nestjs-trpc.io/docs/context
   */
  context?: Class<TRPCContext>

  /**
   * Use custom error formatting
   * @link https://trpc.io/docs/error-formatting
   */
  errorFormatter?: TRPCErrorFormatter<any, any>

  /**
   * Use a data transformer
   * @link https://trpc.io/docs/data-transformers
   */
  transformer?: TRPCRootConfig<any>['transformer']

  /**
   * The path to the tsconfig.json file.
   */
  tsConfigFilePath?: string
}
