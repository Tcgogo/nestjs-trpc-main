import type { Class, Constructor } from 'type-fest'
import type { TRPCMiddleware } from '../interfaces'
import { Inject, Injectable } from '@nestjs/common'
import { isEqual, uniqWith } from 'lodash-es'
import { ProcedureFactory } from './procedure.factory'
import { RouterFactory } from './router.factory'

interface MiddlewareMetadata {
  path: string
  instance: Class<TRPCMiddleware> | Constructor<TRPCMiddleware>
}

@Injectable()
export class MiddlewareFactory {
  @Inject(RouterFactory)
  private readonly routerFactory!: RouterFactory

  @Inject(ProcedureFactory)
  private readonly procedureFactory!: ProcedureFactory

  getMiddlewares(): Array<MiddlewareMetadata> {
    const routers = this.routerFactory.getRouters()

    const middlewaresMetadata = routers.flatMap((router) => {
      const { instance, middlewares, path } = router
      const prototype = Object.getPrototypeOf(instance)
      const procedures = this.procedureFactory.getProcedures(
        instance,
        prototype,
      )

      const procedureMiddleware = procedures.flatMap((procedure) => {
        return procedure.middlewares ?? []
      })

      return [...middlewares, ...procedureMiddleware].map(middleware => ({
        path,
        instance: middleware,
      }))
    })

    // Return a unique array of middlewares based on both path and instances
    return uniqWith(middlewaresMetadata, isEqual)
  }
}
