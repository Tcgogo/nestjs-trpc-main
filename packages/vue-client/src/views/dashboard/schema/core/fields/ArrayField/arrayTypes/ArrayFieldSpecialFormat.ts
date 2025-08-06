import { computed, h } from 'vue'
import Widget from '../../../components/Widget'
import { getWidgetConfig } from '../../../utils/schema'
import vueProps from '../../props'

export default {
  name: 'ArrayFieldSpecialFormat',
  props: vueProps,
  setup(props: any, { attrs }: any) {
    const widgetConfig = computed(() => getWidgetConfig({
      schema: {
        'ui:widget': props.globalOptions.WIDGET_MAP.formats[props.schema.format],
        ...props.schema,
      },
      uiSchema: props.uiSchema,
      curNodePath: props.curNodePath,
      rootFormData: props.rootFormData,
    }))

    return () => h(
      Widget,
      {
        ...attrs,
        ...props,
        ...widgetConfig.value,
      },
    )
  },
}
