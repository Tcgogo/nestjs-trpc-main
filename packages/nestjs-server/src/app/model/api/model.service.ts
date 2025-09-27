import type { CreateSchema, JsonSchema, Model } from '@tcgogo/types'
import { Injectable } from '@nestjs/common'
import { getModelConfig } from '@/src/data/model'

interface User {
  name: string
  email: string
  password: string
}

function deepSetFnToString(menu?: Model.recordMainRaw[]) {
  menu?.forEach((item) => {
    if (item.component === 'Schema') {
      const properties = item.schemaConfig?.jsonSchema?.properties || {}
      Object.values(properties).forEach((_property: any) => {
        const property = _property as JsonSchema.LinkPropertyAnd

        if (property.valueFormatter) {
          property.valueFormatter = `${property.valueFormatter}` as any
        }

        const createOption = property.createOption as CreateSchema.BaseCreateOption

        createOption?.control?.forEach((item) => {
          item.handle = `${item.handle}` as any
        })

        // @ts-expect-error 类型错误
        if (createOption?.on) {
        // @ts-expect-error 类型错误
          createOption.on = `${createOption.on}` as any
        }

      })
    }
    else if (item.children) {
      deepSetFnToString(item.children)
    }
  })
}

@Injectable()
export class ModelService {
  async getModelConfig(modelKey: string) {
    const modelConfig = await getModelConfig()

    const res = modelConfig[modelKey]

    deepSetFnToString(res.menu)

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
