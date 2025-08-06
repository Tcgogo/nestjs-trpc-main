/**
 * Created by Liu.Jun on 2020/4/20 9:55 下午.
 */

import { defineComponent, h } from 'vue'

import FIELDS_MAP from '../../FIELDS_MAP'
import { getUiField, isHiddenWidget, isSelect, lowerCase, nodePath2ClassName, retrieveSchema } from '../../utils/schema'
import vueProps from '../props'

/**
 * Schema字段渲染组件
 * 根据JSON Schema配置动态渲染对应的字段组件
 */
export default defineComponent({
  name: 'SchemaField',
  props: vueProps,

  setup(props) {
    return () => {
      // 目前不支持schema依赖和additionalProperties 展示不需要传递formData
      // const schema = retrieveSchema(props.schema, props.rootSchema, formData);
      const schema = retrieveSchema(props.schema, props.rootSchema)

      // 当前参数
      const curProps = { ...props, schema }

      // 空数据处理
      if (Object.keys(schema).length === 0) {
        return null
      }

      // 获取节点UI配置渲染field组件
      const { field: fieldComponent, fieldProps } = getUiField(FIELDS_MAP, curProps)

      // 检查是否为隐藏组件
      const hiddenWidget = isHiddenWidget({
        schema,
        uiSchema: props.uiSchema,
        curNodePath: props.curNodePath,
        rootFormData: props.rootFormData,
      })

      const pathClassName = nodePath2ClassName(props.curNodePath)

      // 处理anyOf情况
      if (schema.anyOf && schema.anyOf.length > 0 && !isSelect(schema)) {
        return h(
          resolveComponent(FIELDS_MAP.anyOf),
          {
            class: {
              [`${pathClassName}-anyOf`]: true,
              fieldItem: true,
              anyOfField: true,
            },
            ...curProps,
          },
        )
      }

      // 处理oneOf情况
      if (schema.oneOf && schema.oneOf.length > 0 && !isSelect(schema)) {
        return h(
          resolveComponent(FIELDS_MAP.oneOf),
          {
            class: {
              [`${pathClassName}-oneOf`]: true,
              fieldItem: true,
              oneOfField: true,
            },
            ...curProps,
          },
        )
      }

      // 渲染普通字段组件
      return (fieldComponent && !hiddenWidget)
        ? h(
            resolveComponent(fieldComponent),
            {
              ...curProps,
              fieldProps,
              class: {
                [lowerCase((fieldComponent as any).name) || fieldComponent as string]: true,
                hiddenWidget,
                fieldItem: true,
                [pathClassName]: true,
              },
            },
          )
        : null
    }
  },
})
