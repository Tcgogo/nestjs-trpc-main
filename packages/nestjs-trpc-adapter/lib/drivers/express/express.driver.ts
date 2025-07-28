import type { AnyRouter } from '@trpc/server'
import type { Application as ExpressApplication } from 'express'
import type { TRPCContext, TRPCModuleOptions } from '../../interfaces'
import { Inject, Injectable } from '@nestjs/common'
import { ExpressTRPCService } from './trpc.service'

@Injectable()
export class ExpressDriver {
  constructor(@Inject(ExpressTRPCService) private readonly trpcService: ExpressTRPCService) {} // 注入TRPC服务

  public async start(
    options: TRPCModuleOptions,
    app: ExpressApplication,
    appRouter: AnyRouter,
    contextInstance: TRPCContext | null,
  ) {
    // 存储配置到服务，供控制器使用
    this.trpcService.setConfig(
      appRouter,
      contextInstance?.create?.bind(contextInstance),
    )
  }
}
