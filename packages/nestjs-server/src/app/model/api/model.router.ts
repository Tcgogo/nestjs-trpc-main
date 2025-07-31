import { Inject } from '@nestjs/common'
import { Input, Query, Router } from 'nestjs-trpc-adapter'
import { z } from 'zod'
import { ModelInfoSchema, ModelListSchema } from '@/src/data/model/zod-model'

import { ModelService } from './model.service'

const getModelConfigInput = z.object({
  modelKey: z.string(),
})

@Router({ alias: 'model' })
export class ModelRouter {
  constructor(@Inject(ModelService) private modelService: ModelService) {}

  @Query({ input: getModelConfigInput, output: ModelInfoSchema })
  async getModelInfo(@Input() input: z.infer<typeof getModelConfigInput>): Promise<z.infer<typeof ModelInfoSchema>> {
    const config = await this.modelService.getModelConfig(input.modelKey)

    return config
  }

  @Query({ output: ModelListSchema })
  async getModelList(): Promise<z.infer<typeof ModelListSchema>> {
    const config = await this.modelService.getModelList()

    return config
  }
}
