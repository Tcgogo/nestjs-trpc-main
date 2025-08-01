import type { AnyRouter } from '@trpc/server'
import type { FastifyInstance as FastifyApplication } from 'fastify'
import type { TRPCContext, TRPCModuleOptions } from '../../interfaces'
import { Inject, Injectable } from '@nestjs/common'
import { FastifyTRPCService } from './trpc.service'

// 注意：不再使用 fastifyTRPCPlugin 注册路由
// 路由将由 TRPCController 处理
@Injectable()
export class FastifyDriver {
  constructor(@Inject(FastifyTRPCService) private readonly trpcService: FastifyTRPCService) {} // 注入TRPC服务

  public async start(
    options: TRPCModuleOptions,
    app: FastifyApplication,
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
