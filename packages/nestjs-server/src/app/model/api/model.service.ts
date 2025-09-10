import { Injectable } from '@nestjs/common'
import { getModelConfig } from '@/src/data/model'
import { Model } from '@tcgogo/types'

interface User {
  name: string
  email: string
  password: string
}

function deepSetFnToString(menu?: Model.recordMainRaw[]) {
  menu?.forEach((item) => {
    if(item.component === 'Schema') {
      const properties = item.schemaConfig?.jsonSchema?.properties || {};
      Object.values(properties).forEach((property) => {
        if(property.valueFormatter) {
          property.valueFormatter = `${property.valueFormatter}` as any;
        }
      })
    } else if(item.children) {
      deepSetFnToString(item.children);
    }
  })
}

@Injectable()
export class ModelService {
  async getModelConfig(modelKey: string) {
    const modelConfig = await getModelConfig()

    const res = modelConfig[modelKey];

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
