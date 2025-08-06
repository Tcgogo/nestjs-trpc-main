import { h } from 'vue'
import Widget from '../../../components/Widget'

import { getWidgetConfig, optionsList, retrieveSchema } from '../../../utils/schema'
import vueProps from '../../props'

export default {
  name: 'ArrayFieldMultiSelect',
  props: {
    ...vueProps,
  },
  setup(props: any, { attrs }: any) {
    return () => {
      const {
        schema,
        rootSchema,
        uiSchema,
        curNodePath,
        rootFormData,
        globalOptions,
      } = props

      // 这里需要索引当前节点，通过到schemaField组件的会统一处理
      const itemsSchema = retrieveSchema(schema.items, rootSchema)

      const enumOptions = optionsList(itemsSchema, uiSchema, curNodePath, rootFormData)

      const widgetConfig = getWidgetConfig({
        schema,
        uiSchema,
        curNodePath,
        rootFormData,
      }, () => ({
        widget: globalOptions.WIDGET_MAP.common.checkboxGroup,
      }))

      // 存在枚举数据列表 传入 enumOptions
      widgetConfig.uiProps.multiple = true

      if (enumOptions && !widgetConfig.uiProps.enumOptions) {
        widgetConfig.uiProps.enumOptions = enumOptions
      }

      return h(
        Widget,
        {
          ...attrs,
          ...props,
          ...widgetConfig,
        },
      )
    }
  },
}
