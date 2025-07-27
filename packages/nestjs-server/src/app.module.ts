import path from 'node:path'

import { Controller, Get, Module } from '@nestjs/common'

import { ConfigModule } from '@nestjs/config'

import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core'

import { TRPCModule } from 'nestjs-trpc-adapter'

import { ModelServiceModule } from '@/app/model-service/model-service.module'
import { UserModule } from '@/contexts/users/user.module'
import { DatabaseModule } from '@/lib/database/database.module'
import { AllExceptionsFilter } from '@/lib/filters/any-exception.filter'
import { TransformInterceptor } from '@/lib/interceptors/transform.interceptor'
import { getConfig } from '@/lib/utils'
import { LoggerModule } from '@/shared/logger/logger.module'


@Module({
  imports: [
    TRPCModule.forRoot({
      autoSchemaFile: './src/@generated',
      tsConfigFilePath: path.resolve(process.cwd(), 'tsconfig.json'),
      // errorFormatter: (opts) => {
      //   const { shape, error } = opts
      //   if (error.code === 'BAD_REQUEST' && error.cause instanceof ZodError) {
      //     const validationError = fromError(error.cause);
      //     return {
      //       ...shape,
      //       errmsg: validationError.toString(),
      //     }
      //   }

      //   return {
      //     ...shape
      //   }
      // },
    }),
    // 配置
    ConfigModule.forRoot({ isGlobal: true, cache: true, load: [getConfig] }),
    // 日志
    LoggerModule,
    // 数据库
    DatabaseModule,

    ModelServiceModule,

    UserModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    // {
    //   provide: APP_PIPE,
    //   useClass: ZodValidationPipe,
    // },
    // {
    //   provide: APP_FILTER,
    //   useClass: AllExceptionsFilter,
    // },
  ],
})
export class AppModule {}
