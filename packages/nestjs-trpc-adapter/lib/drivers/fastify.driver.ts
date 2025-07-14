import type { AnyRouter } from '@trpc/server'
import type { FastifyInstance as FastifyApplication } from 'fastify'
import type {
  ContextOptions,
  TRPCContext,
  TRPCModuleOptions,
} from '../interfaces'
import { Injectable } from '@nestjs/common'
import * as trpcFastify from '@trpc/server/adapters/fastify'

@Injectable()
export class FastifyDriver<
  TOptions extends Record<string, any> = TRPCModuleOptions,
> {
  public async start(
    options: TRPCModuleOptions,
    app: FastifyApplication,
    appRouter: AnyRouter,
    contextInstance: TRPCContext | null,
  ) {
    app.register(trpcFastify.fastifyTRPCPlugin as any, {
      prefix: options.basePath ?? '/trpc',
      trpcOptions: {
        router: appRouter,
        ...(options.context != null && contextInstance != null
          ? {
              createContext: (opts: ContextOptions) =>
                contextInstance.create(opts),
            }
          : {}),
      },
    })
  }
}
