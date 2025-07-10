import { Inject, Injectable } from '@nestjs/common';
import type { MergeRouters } from '@trpc/server/dist/core/internals/mergeRouters';
import type { AnyRouterDef } from '@trpc/server/dist/core/router';
import { RouterFactory } from './router.factory';
import type { TRPCRouter } from '../interfaces/factory.interface';
import type { AnyRouter, ProcedureBuilder } from '@trpc/server';

@Injectable()
export class TRPCFactory {
  @Inject(RouterFactory)
  private readonly routerFactory!: RouterFactory;

  serializeAppRoutes(
    router: TRPCRouter,
    procedure: ProcedureBuilder<any>,
  ): MergeRouters<Array<AnyRouter>, AnyRouterDef> {
    const routerSchema = this.routerFactory.serializeRoutes(router, procedure);
    return router(routerSchema);
  }
}
