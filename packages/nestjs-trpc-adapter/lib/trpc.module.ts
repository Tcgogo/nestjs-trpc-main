import type { DynamicModule, OnModuleInit } from '@nestjs/common/interfaces'
import type { TRPCModuleOptions } from './interfaces'
import { ConsoleLogger, Inject, Module } from '@nestjs/common'

import { HttpAdapterHost } from '@nestjs/core'

import { AppRouterHost } from './app-router.host'
import { ExpressDriver, FastifyDriver } from './drivers'
import { FactoryModule } from './factories/factory.module'
import { GeneratorModule } from './generators/generator.module'
import { FileScanner } from './scanners/file.scanner'
import { ScannerModule } from './scanners/scanner.module'
import { LOGGER_CONTEXT, TRPC_MODULE_OPTIONS } from './trpc.constants'
import { TRPCDriver } from './trpc.driver'

@Module({
  imports: [FactoryModule, ScannerModule],
  providers: [
    // NestJS Providers
    ConsoleLogger,

    // Drivers
    TRPCDriver,
    FastifyDriver,
    ExpressDriver,

    // Exports
    AppRouterHost,
  ],
  exports: [AppRouterHost],
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

    return {
      module: TRPCModule,
      imports,
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
