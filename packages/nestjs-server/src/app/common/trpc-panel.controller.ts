/* eslint-disable ts/consistent-type-imports */
import type { AnyRouter } from '@trpc/server'
import type { FastifyReply } from 'fastify'
import {
  All,
  Controller,
  Inject,
  OnModuleInit,
  Response,
} from '@nestjs/common'
// import { renderTrpcPanel } from '@rikkainc/trpc-panel'
import { AppRouterHost } from 'nestjs-trpc-adapter'

@Controller()
export class TrpcPanelController implements OnModuleInit {
  private appRouter!: AnyRouter

  constructor(
    @Inject(AppRouterHost) private readonly appRouterHost: AppRouterHost,
  ) {}

  onModuleInit() {
    this.appRouter = this.appRouterHost.appRouter
  }

  // @All('/panel')
  // panel(@Response() res: FastifyReply) {
  //   res.type('text/html').send(
  //     renderTrpcPanel(this.appRouter, {
  //       url: 'http://localhost:3000/trpc',
  //       transformer: 'superjson',
  //     }),
  //   )
  // }
}
