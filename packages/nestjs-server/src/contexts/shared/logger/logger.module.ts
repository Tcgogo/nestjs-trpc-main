import type { Provider } from '@nestjs/common'
import type { LogLevel } from '@nestjs/common/services/logger.service'
import { Global, Logger, Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

const loggerProvider: Provider = {
  provide: Logger,
  useFactory: (configService: ConfigService) => {
    const level = configService.get<LogLevel>('LOGGER_LEVEL', 'log')
    const logger = new Logger()
    logger.localInstance.setLogLevels?.([level])
    return logger
  },
  inject: [ConfigService],
}

@Global()
@Module({
  providers: [loggerProvider],
  exports: [loggerProvider],
})
export class LoggerModule {}
