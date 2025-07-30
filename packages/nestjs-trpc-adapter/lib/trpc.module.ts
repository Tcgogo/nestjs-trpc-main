import type { DynamicModule, OnModuleInit } from '@nestjs/common/interfaces'
import type { TRPCModuleOptions } from './interfaces'
import { ConsoleLogger, Inject, Module } from '@nestjs/common'

import { HttpAdapterHost } from '@nestjs/core'

import { AppRouterHost } from './app-router.host'
import { ExpressDriver, FastifyDriver } from './drivers'

import { ExpressTRPCController } from './drivers/express/trpc.controller'
import { ExpressTRPCService } from './drivers/express/trpc.service'
import { FastifyTRPCController } from './drivers/fastify/trpc.controller'
import { FastifyTRPCService } from './drivers/fastify/trpc.service'

import { FactoryModule } from './factories/factory.module'
import { GeneratorModule } from './generators/generator.module'
import { ImportSet } from './import-set'
import { FileScanner } from './scanners/file.scanner'
import { ScannerModule } from './scanners/scanner.module'
import { LOGGER_CONTEXT, TRPC_MODULE_OPTIONS } from './trpc.constants'
import { TRPCDriver } from './trpc.driver'

@Module({
  imports: [FactoryModule, ScannerModule],
  // 控制器将在 forRoot 中动态决定
  controllers: [],
  providers: [
    FastifyTRPCService,
    ExpressTRPCService,

    // NestJS Providers
    ConsoleLogger,

    // Drivers
    TRPCDriver,
    FastifyDriver,
    ExpressDriver,

    // Exports
    AppRouterHost,
    ImportSet,
  ],
  exports: [AppRouterHost, ImportSet],
})
export class TRPCModule implements OnModuleInit {
  @Inject(TRPC_MODULE_OPTIONS)
  private readonly options!: TRPCModuleOptions

  @Inject(ConsoleLogger)
  private readonly consoleLogger!: ConsoleLogger

  @Inject(HttpAdapterHost)
  private readonly httpAdapterHost!: HttpAdapterHost

  @Inject(TRPCDriver)
  private readonly trpcDriver!: TRPCDriver

  @Inject(AppRouterHost)
  private readonly appRouterHost!: AppRouterHost

  static forRoot(options: TRPCModuleOptions = {}): DynamicModule {
    const imports: Array<DynamicModule> = []

    if (!options.platform) {
      options.platform = 'express'
    }

    if (options.autoSchemaFile != null) {
      const fileScanner = new FileScanner()
      const callerFilePath = fileScanner.getCallerFilePath()
      imports.push(
        GeneratorModule.forRoot({
          outputDirPath: options.autoSchemaFile,
          rootModuleFilePath: callerFilePath,
          schemaFileImports: options.schemaFileImports,
          context: options.context,
          tsConfigFilePath: options.tsConfigFilePath,
        }),
      )
    }

    // 根据平台类型决定注册哪个控制器
    const platformName = options.platform
    const controllers: Array<typeof ExpressTRPCController | typeof FastifyTRPCController> = []

    if (platformName === 'express') {
      controllers.push(ExpressTRPCController)
    }
    else if (platformName === 'fastify') {
      controllers.push(FastifyTRPCController)
    }

    return {
      module: TRPCModule,
      imports,
      controllers,
      providers: [{ provide: TRPC_MODULE_OPTIONS, useValue: options }],
    }
  }

  async onModuleInit() {
    const httpAdapter = this.httpAdapterHost?.httpAdapter
    if (!httpAdapter) {
      return
    }

    this.consoleLogger.setContext(LOGGER_CONTEXT)

    await this.trpcDriver.start(this.options)

    const platformName = httpAdapter.getType()
    if (this.appRouterHost.appRouter != null) {
      this.consoleLogger.log(
        `Server has been initialized successfully using the ${platformName} driver.`,
        'TRPC Server',
      )
    }
  }
}
