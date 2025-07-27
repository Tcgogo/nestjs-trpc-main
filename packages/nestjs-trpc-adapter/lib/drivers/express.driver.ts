import type { AnyRouter } from '@trpc/server'
import type { Application as ExpressApplication } from 'express'
import type { TRPCContext, TRPCModuleOptions } from '../interfaces'
import { Inject, Injectable } from '@nestjs/common'
import { HttpAdapterHost } from '@nestjs/core'
import * as trpcExpress from '@trpc/server/adapters/express'

@Injectable()
export class ExpressDriver<
  TOptions extends Record<string, any> = TRPCModuleOptions,
> {
  constructor(@Inject(HttpAdapterHost) private readonly httpAdapterHost: HttpAdapterHost) {}

  public async start(
    options: TRPCModuleOptions,
    app: ExpressApplication,
    appRouter: AnyRouter,
    contextInstance: TRPCContext | null,
  ) { // 创建 tRPC 中间件
    const trpcMiddleware = trpcExpress.createExpressMiddleware({
      router: appRouter,
      ...(options.context != null && contextInstance != null
        ? {
            createContext: opts => contextInstance.create(opts),
          }
        : {}),
    })

    // 注册到指定路径，这样 NestJS 的全局中间件仍然会执行
    app.use(
      options.basePath ?? '/trpc',
      trpcMiddleware,
    )
  }
}
