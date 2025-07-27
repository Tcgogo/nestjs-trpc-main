import type { ModelConfigType, ModelConfigTypeAll } from '@/src/data/model/send-type'
import { Inject } from '@nestjs/common'
import { Input, Query, Router } from 'nestjs-trpc-adapter'
import buinessConfigSchema, { configSchema3 } from '@/src/data/model/buiness/zod-model'
import { obj } from '@/src/data/model/course/zod-model'
import { z } from 'zod'
import { ModelServiceService } from './model-service.service'

const getModelConfigInput = z.object({
  modelKey: z.string(),
})

interface GetModelConfigInput {
  modelKey: keyof ModelConfigTypeAll
}

@Router({ alias: 'model' })
export class ModelServiceRouter {
  constructor(@Inject(ModelServiceService) private modelService: ModelServiceService) {}

  @Query({ input: getModelConfigInput, output: buinessConfigSchema })
  async getModelConfig(@Input() input: GetModelConfigInput): Promise<ModelConfigType<keyof ModelConfigTypeAll>> {
    const config = await this.modelService.getModelConfig(input.modelKey)

    return config
  }
}
