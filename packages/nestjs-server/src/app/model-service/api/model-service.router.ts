import type { ModelConfigType, ModelConfigTypeAll } from '@/app/model/send-type'
import { Inject } from '@nestjs/common'
import { Input, Query, Router } from 'nestjs-trpc-adapter'
import { ModelServiceService } from './model-service.service'
import { configSchema } from '../../model/buiness/zod-model'
import z from 'zod'


const getModelConfigInput = z.object({
  modelKey: z.string(),
})

interface GetModelConfigInput {
  modelKey: keyof ModelConfigTypeAll
}

@Router()
export class ModelServiceRouter {
  constructor(@Inject(ModelServiceService) private modelService: ModelServiceService) {}

  @Query({ input: getModelConfigInput, output: configSchema })
  async getModelConfig(@Input() input: GetModelConfigInput): Promise<ModelConfigType<keyof ModelConfigTypeAll>> {
    const config = await this.modelService.getModelConfig(input.modelKey)
    console.log('%c [ config ]-24', 'font-size:13px; background:pink; color:#bf2c9f;', config)

    return config
  }
}
