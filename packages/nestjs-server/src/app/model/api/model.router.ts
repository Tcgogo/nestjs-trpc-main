import { Inject } from '@nestjs/common'
import { Input, Query, Router } from 'nestjs-trpc-adapter'
import { z } from 'zod'
import { ModelInfoSchema, ModelListSchema } from '@/src/data/model/zod-model'

import { ModelService } from './model.service'

const getModelConfigInput = z.object({
  modelKey: z.string().optional(),
})

function objectToString(obj2: any, fun?: any) {
  // 返回一个将对象中的函数都转化为字符串的对象　不直接在原对象上面改
  const stringifyFunction = (obj: any) => {
    let newobj = JSON.parse(JSON.stringify(obj))
    for (let key in obj) {
      if (obj[key] instanceof Function) {
        newobj[key] = obj[key].toString().replace(/[\n\t]/g, '')
        continue
      }
      if (obj[key] instanceof Object) {
        newobj[key] = stringifyFunction(obj[key])
      }
    }
    return newobj
  }
  // 用于替代JSON.stringify函数
  let _object = stringifyFunction(obj2) // 将对象中的函数转为字符串
  return JSON.stringify(_object, null, 2) // 将对象转为字符串
}

@Router({ alias: 'model' })
export class ModelRouter {
  constructor(@Inject(ModelService) private modelService: ModelService) { }

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

  @Query({ output: ModelListSchema })
  async getModelList(): Promise<z.infer<typeof ModelListSchema>> {
    const config = await this.modelService.getModelList()

    return config
  }
}
