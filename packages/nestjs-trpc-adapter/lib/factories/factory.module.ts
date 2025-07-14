import { ConsoleLogger, Module } from '@nestjs/common'
import { MetadataScanner } from '@nestjs/core'
import { MiddlewareFactory } from './middleware.factory'
import { ProcedureFactory } from './procedure.factory'
import { RouterFactory } from './router.factory'
import { TRPCFactory } from './trpc.factory'

@Module({
  imports: [],
  providers: [
    // NestJS Providers
    ConsoleLogger,
    MetadataScanner,

    // Local Providers
    TRPCFactory,
    RouterFactory,
    ProcedureFactory,
    MiddlewareFactory,
  ],
  exports: [TRPCFactory, RouterFactory, ProcedureFactory, MiddlewareFactory],
})
export class FactoryModule {}
