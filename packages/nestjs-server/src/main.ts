import type {
  NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
} from '@nestjs/platform-fastify'

import { AppModule } from '@/src/app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      cors: true,
    },
  )

  const configService = app.get(ConfigService)
  const port = configService.get<string>('PORT', '3000')

  await app.listen(port, '0.0.0.0')

  const logger = app.get(Logger)
  logger.log(`App is ready and listening on port ${port} 🚀`)
}

bootstrap().catch(handleError)

function handleError(error: unknown) {
  console.error(error)

  process.exit(1)
}

process.on('uncaughtException', handleError)
