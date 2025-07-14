import type {
  AnyRouter,
  TRPCMergeRouters,
} from '@trpc/server'
import type { AnyProcedureBuilder } from '@trpc/server/unstable-core-do-not-import'
import type { TRPCRouter } from '../interfaces/factory.interface'
import { Inject, Injectable } from '@nestjs/common'
import { RouterFactory } from './router.factory'

@Injectable()
export class TRPCFactory {
  @Inject(RouterFactory)
  private readonly routerFactory!: RouterFactory

  serializeAppRoutes(
    router: TRPCRouter,
    procedure: AnyProcedureBuilder,
  ): TRPCMergeRouters<Array<AnyRouter>, any> {
    const routerSchema = this.routerFactory.serializeRoutes(router, procedure)
    return router(routerSchema)
  }
}
