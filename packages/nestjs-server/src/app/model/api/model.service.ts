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

        const createOption = property.createOption as any

        createOption?.control?.forEach((item: any) => {
          item.handle = `${item.handle}`
        })

        if (createOption?.on) {
          createOption.on = `${createOption.on}`
        }

        if (property?.['ui:ElFormItem']) {
          property['ui:ElFormItem'] = `${property['ui:ElFormItem']}` as any
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
