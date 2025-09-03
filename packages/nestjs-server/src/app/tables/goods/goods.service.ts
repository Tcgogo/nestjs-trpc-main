import { Injectable } from '@nestjs/common'
import { getModelConfig } from '@/src/data/model'

interface User {
  name: string
  email: string
  password: string
}

@Injectable()
export class GoodsService {
  async getModelConfig(modelKey: string) {
    const modelConfig = await getModelConfig()
    return modelConfig[modelKey]
  }

  async getModelList() {
    const modelConfig = await getModelConfig()
    const modelList = Object.values(modelConfig).map(item => ({
      title: item.title,
      model: item.model,
    }))
    return modelList
  }
}
