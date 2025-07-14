import { Module } from '@nestjs/common'

import { ConfigModule } from '@nestjs/config'

import { TRPCModule } from 'nestjs-trpc-adapter'

import { HealthModule } from '@/app/health/health.module'

import { UserModule } from '@/contexts/users/user.module'

import { DatabaseModule } from '@/lib/database/database.module'

import { getConfig } from '@/lib/utils'

import { LoggerModule } from '@/shared/logger/logger.module'

@Module({
  imports: [
    TRPCModule.forRoot({
      autoSchemaFile: './src/@generated',
    }),
    // 配置
    ConfigModule.forRoot({ isGlobal: true, cache: true, load: [getConfig] }),
    // 日志
    LoggerModule,
    // 数据库
    DatabaseModule,

    HealthModule,

    UserModule,
  ],
})
export class AppModule {}
