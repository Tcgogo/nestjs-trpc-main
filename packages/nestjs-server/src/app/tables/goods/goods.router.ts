import { Inject } from '@nestjs/common'
import { Input, Query, Router } from 'nestjs-trpc-adapter'
import { z } from 'zod'
import { ModelInfoSchema, ModelListSchema } from '@/src/data/model/zod-model'

import { GoodsService } from './goods.service'

const getModelConfigInput = z.object({
  modelKey: z.string().optional(),
})

@Router({ alias: 'tablesGoods' })
export class GoodsRouter {
  constructor(@Inject(GoodsService) private modelService: GoodsService) { }

  @Query({ input: getModelConfigInput, output: ModelInfoSchema })
  async getModelInfo(@Input() input: z.infer<typeof getModelConfigInput>): Promise<z.infer<typeof ModelInfoSchema>> {
    let key = input.modelKey
    if (!key) {
      const list = await this.modelService.getModelList()
      key = list[0].model
    }

    const config = await this.modelService.getModelConfig(key)

    return config
  }
}
