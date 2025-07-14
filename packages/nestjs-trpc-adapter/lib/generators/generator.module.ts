import type { OnModuleInit } from '@nestjs/common'
import type { DynamicModule } from '@nestjs/common/interfaces'
import type { CompilerOptions } from 'ts-morph'
import type { GeneratorModuleOptions } from './generator.interface'
import * as path from 'node:path'

import { ConsoleLogger, Inject, Module } from '@nestjs/common'
import { MetadataScanner } from '@nestjs/core'
import { ModuleKind, Project, ScriptTarget } from 'ts-morph'
import { FactoryModule } from '../factories/factory.module'
import { ScannerModule } from '../scanners/scanner.module'
import {
  TRPC_GENERATOR_OPTIONS,
  TRPC_MODULE_CALLER_FILE_PATH,
} from '../trpc.constants'
import { ContextGenerator } from './context.generator'
import { DecoratorGenerator } from './decorator.generator'
import {
  TYPESCRIPT_APP_ROUTER_SOURCE_FILE,
  TYPESCRIPT_PROJECT,
} from './generator.constants'
import { MiddlewareGenerator } from './middleware.generator'
import { ProcedureGenerator } from './procedure.generator'
import { RouterGenerator } from './router.generator'
import { StaticGenerator } from './static.generator'
import { TRPCGenerator } from './trpc.generator'

@Module({
  imports: [FactoryModule, ScannerModule],
  providers: [
    // NestJS Providers
    ConsoleLogger,
    MetadataScanner,

    // Local Providers
    TRPCGenerator,
    RouterGenerator,
    ProcedureGenerator,
    DecoratorGenerator,
    MiddlewareGenerator,
    ContextGenerator,
    StaticGenerator,
  ],
  exports: [TRPCGenerator],
})
export class GeneratorModule implements OnModuleInit {
  @Inject(TRPCGenerator)
  private readonly trpcGenerator!: TRPCGenerator

  @Inject(TRPC_GENERATOR_OPTIONS)
  private readonly options!: GeneratorModuleOptions

  static forRoot(options: GeneratorModuleOptions): DynamicModule {
    const defaultCompilerOptions: CompilerOptions = {
      target: ScriptTarget.ES2019,
      module: ModuleKind.CommonJS,
      emitDecoratorMetadata: true,
      experimentalDecorators: true,
      allowJs: true,
      checkJs: true,
      esModuleInterop: true,
    }
    const project = new Project({ compilerOptions: defaultCompilerOptions })

    const appRouterSourceFile = project.createSourceFile(
      path.resolve(options.outputDirPath ?? './', 'server.ts'),
      () => {},
      { overwrite: true },
    )

    return {
      module: GeneratorModule,
      providers: [
        {
          provide: TRPC_MODULE_CALLER_FILE_PATH,
          useValue: options.rootModuleFilePath,
        },
        { provide: TYPESCRIPT_PROJECT, useValue: project },
        {
          provide: TYPESCRIPT_APP_ROUTER_SOURCE_FILE,
          useValue: appRouterSourceFile,
        },
        { provide: TRPC_GENERATOR_OPTIONS, useValue: options },
      ],
    }
  }

  async onModuleInit() {
    await this.trpcGenerator.generateSchemaFile(this.options.schemaFileImports)
    await this.trpcGenerator.generateHelpersFile(this.options.context)
  }
}
