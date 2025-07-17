import { Module } from '@nestjs/common'

import { ModelServiceRouter } from './api/model-service.router'
import { ModelServiceService } from './api/model-service.service'

@Module({
  controllers: [],
  providers: [ModelServiceService, ModelServiceRouter],
})
export class ModelServiceModule {}
