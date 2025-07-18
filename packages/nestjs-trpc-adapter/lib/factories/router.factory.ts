import type { InstanceWrapper } from '@nestjs/core/injector/instance-wrapper'
import type { Class, Constructor } from 'type-fest'
import type { TRPCMiddleware } from '../interfaces'
import type {
  RouterInstance,
  TRPCPublicProcedure,
  TRPCRouter,
} from '../interfaces/factory.interface'
import { ConsoleLogger, Inject, Injectable } from '@nestjs/common'
import { ModulesContainer } from '@nestjs/core'
import { camelCase } from 'lodash-es'
import { MIDDLEWARES_KEY, ROUTER_METADATA_KEY } from '../trpc.constants'
import { ProcedureFactory } from './procedure.factory'

@Injectable()
export class RouterFactory {
  @Inject(ConsoleLogger)
  private readonly consoleLogger!: ConsoleLogger

  @Inject(ModulesContainer)
  private readonly modulesContainer!: ModulesContainer

  @Inject(ProcedureFactory)
  private readonly procedureFactory!: ProcedureFactory

  getRouters(): Array<RouterInstance> {
    const routers: Array<RouterInstance> = []

    this.modulesContainer.forEach((moduleRef) => {
      moduleRef.providers.forEach((wrapper: InstanceWrapper) => {
        const router = this.extractRouterFromWrapper(wrapper)
        if (router != null) {
          routers.push(router)
        }
      })
    })

    return routers
  }

  private extractRouterFromWrapper(
    wrapper: InstanceWrapper,
  ): RouterInstance | null {
    const { instance, name } = wrapper

    if (instance == null) {
      return null
    }

    const router = Reflect.getMetadata(
      ROUTER_METADATA_KEY,
      instance.constructor,
    )

    if (router == null) {
      return null
    }

    const middlewares: Array<
      Class<TRPCMiddleware> | Constructor<TRPCMiddleware>
    > = Reflect.getMetadata(MIDDLEWARES_KEY, instance.constructor) || []

    return {
      name,
      instance,
      path: router.path,
      alias: router.alias,
      middlewares,
    }
  }

  serializeRoutes(
    router: TRPCRouter,
    procedure: TRPCPublicProcedure,
  ): Record<string, any> {
    const routers = this.getRouters()
    const routerSchema = Object.create({})

    routers.forEach((route) => {
      const { instance, name, middlewares, alias } = route
      const camelCasedRouterName = camelCase(alias ?? name)
      const prototype = Object.getPrototypeOf(instance)

      const procedures = this.procedureFactory.getProcedures(
        instance,
        prototype,
      )

      this.consoleLogger.log(
        `Router ${name} as ${camelCasedRouterName}.`,
        'Router Factory',
      )

      const routerProcedures = this.procedureFactory.serializeProcedures(
        procedures,
        instance,
        camelCasedRouterName,
        procedure,
        middlewares,
      )

      // TODO: To get this working with `trpc` v11, we need to remove the `router()` method from here.
      routerSchema[camelCasedRouterName] = router(routerProcedures)
    })

    return routerSchema
  }
}
