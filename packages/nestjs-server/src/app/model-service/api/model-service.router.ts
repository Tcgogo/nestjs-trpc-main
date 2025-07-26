import type { ModelConfigType, ModelConfigTypeAll } from '@/app/model/send-type'
import { Inject } from '@nestjs/common'
import { Input, Query, Router } from 'nestjs-trpc-adapter'
import z from 'zod'
import buinessConfigSchema, { configSchema3 } from '../../model/buiness/zod-model'
import { obj } from '../../model/course/zod-model'
import { ModelServiceService } from './model-service.service'

const getModelConfigInput = z.object({
  modelKey: z.string(),
})

interface GetModelConfigInput {
  modelKey: keyof ModelConfigTypeAll
}

@Router()
export class ModelServiceRouter {
  constructor(@Inject(ModelServiceService) private modelService: ModelServiceService) {}

  @Query({ input: getModelConfigInput, output: obj.configSchema })
  async getModelConfig(@Input() input: GetModelConfigInput): Promise<ModelConfigType<keyof ModelConfigTypeAll>> {
    const config = await this.modelService.getModelConfig(input.modelKey)
    console.log('%c [ config ]-24', 'font-size:13px; background:pink; color:#bf2c9f;', config)

    return config
  }

  @Query({ input: getModelConfigInput, output: buinessConfigSchema })
  async getModelConfig2(@Input() input: GetModelConfigInput): Promise<ModelConfigType<keyof ModelConfigTypeAll>> {
    const config = await this.modelService.getModelConfig(input.modelKey)
    console.log('%c [ config ]-24', 'font-size:13px; background:pink; color:#bf2c9f;', config)

    return config
  }

  @Query({ input: configSchema3, output: configSchema3 })
  async getModelConfig3(@Input() input: GetModelConfigInput): Promise<ModelConfigType<keyof ModelConfigTypeAll>> {
    const config = await this.modelService.getModelConfig(input.modelKey)
    console.log('%c [ config ]-24', 'font-size:13px; background:pink; color:#bf2c9f;', config)

    return config
  }
}
