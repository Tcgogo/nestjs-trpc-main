/**
 * Created by Liu.Jun on 2020/4/24 11:56.
 */

import { h } from 'vue'

import { computedCurPath, getUiOptions, replaceArrayIndex } from '../../../utils/schema'

// @ts-expect-error 类型错误
import FieldGroupWrap from '../../components/FieldGroupWrap.vue'
import vueProps from '../../props'
import SchemaField from '../../SchemaField'

import ArrayOrderList from '../components/ArrayOrderList.vue'

export default {
  name: 'ArrayFieldNormal',
  props: {
    ...vueProps,
    itemsFormData: {
      type: Array,
    },
  },
  setup(props: any, { attrs }: any) {
    return () => {
      const {
        schema,
        uiSchema,
        curNodePath,
        rootFormData,
        itemsFormData,
        errorSchema,
        globalOptions,
      } = props

      const {
        title,
        description,
        addable,
        showIndexNumber,
        sortable,
        removable,
        showTitle,
        showDescription,
        fieldClass,
        fieldAttrs,
        fieldStyle,
      } = getUiOptions({
        schema,
        uiSchema,
        curNodePath,
        rootFormData,
      })

      const arrayItemsVNodeList = itemsFormData.map((item: any, index: number) => {
        const tempUiSchema = replaceArrayIndex({
          schema: schema.items,
          uiSchema: uiSchema.items,
        }, index)

        return {
          key: item.key,
          vNode: h(
            SchemaField,
            {
              key: item.key,
              ...props,
              schema: schema.items,
              required: !([...schema.items.type].includes('null')),
              uiSchema: {
                ...uiSchema.items,
                ...tempUiSchema, // 处理过 $index 的标识
              },
              errorSchema: errorSchema.items,
              curNodePath: computedCurPath(curNodePath, `${index}`),
            },
          ),
        }
      })

      return h(
        FieldGroupWrap,
        {
          title,
          description,
          showTitle,
          showDescription,
          curNodePath,
          class: fieldClass,
          attrs: fieldAttrs,
          style: fieldStyle,
        },
        {
          default() {
            return h(
              ArrayOrderList,
              {
                ...attrs,
                vNodeList: arrayItemsVNodeList,
                showIndexNumber,
                addable,
                sortable,
                removable,
                maxItems: schema.maxItems,
                minItems: schema.minItems,
                globalOptions,
              },
            )
          },
        },
      )
    }
  },
}
