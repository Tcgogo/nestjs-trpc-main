import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { HealthModule } from "@/app/health/health.module";

import { LoggerModule } from "@/shared/logger/logger.module";

import { UserModule } from "@/contexts/users/user.module";

import { DatabaseModule } from "@/lib/database/database.module";

import { getConfig } from "@/lib/utils";

@Module({
  imports: [
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
