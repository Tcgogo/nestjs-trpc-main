import { Module } from '@nestjs/common'

import { ModelRouter } from './api/model.router'
import { ModelService } from './api/model.service'

@Module({
  controllers: [],
  providers: [ModelService, ModelRouter],
})
export class ModelServiceModule {}
