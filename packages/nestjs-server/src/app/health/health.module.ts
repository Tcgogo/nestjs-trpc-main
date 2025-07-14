import { Module } from '@nestjs/common'

import { HealthController } from './api/health.controller'
import { HealthRouter } from './health.router'
import { HealthService } from './health.service'

@Module({
  controllers: [HealthController],
  providers: [HealthService, HealthRouter],
})
export class HealthModule {}
