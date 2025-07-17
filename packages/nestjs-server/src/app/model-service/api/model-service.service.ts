import type { ModelConfigTypeAll } from '@/app/model/send-type'
import { Injectable } from '@nestjs/common'
import { getModelConfig } from '@/app/model'

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
    console.log('%c [ modelConfig ]-20', 'font-size:13px; background:pink; color:#bf2c9f;', modelConfig)
    return modelConfig[modelKey]
  }
}
