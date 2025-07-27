import type { ModelConfigTypeAll } from '@/src/data/model/send-type'
import { Injectable } from '@nestjs/common'
import { getModelConfig } from '@/src/data/model'

interface User {
  name: string
  email: string
  password: string
}

@Injectable()
export class ModelServiceService {
  async getAllModelConfig(): Promise<ModelConfigTypeAll> {
    const modelConfig = await getModelConfig()
    return modelConfig
  }

  async getModelConfig(modelKey: keyof ModelConfigTypeAll) {
    const modelConfig = await getModelConfig()
    return modelConfig[modelKey]
  }
}
