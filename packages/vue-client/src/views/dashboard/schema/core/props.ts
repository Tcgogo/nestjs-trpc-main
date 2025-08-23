/**
 * Created by Liu.Jun on 2020/4/16 10:47 下午.
 */

import type { PropType } from 'vue'
import type { FormFooter, FormProps, JSONSchema, UISchema, ErrorSchema, ValidationRule } from './types'

/**
 * Vue3表单组件的Props定义
 */
export default {
  /**
   * 表单底部配置
   */
  formFooter: {
    type: Object as PropType<FormFooter>,
    default: (): FormFooter => ({
      show: true,
      okBtn: '保存',
      cancelBtn: '取消',
    }),
  },

  /**
   * 表单数据模型，支持v-model双向绑定
   */
  modelValue: {
    type: null,
    default: () => ({}),
    required: true,
  },

  /**
   * 是否启用标签回退机制
   */
  fallbackLabel: {
    type: Boolean,
    default: false,
  },

  /**
   * 严格模式，严格按照schema校验数据
   */
  strictMode: {
    type: Boolean,
    default: false,
  },

  /**
   * 表单UI属性配置
   */
  formProps: {
    type: Object as PropType<FormProps>,
    default: (): FormProps => ({}),
  },

  /**
   * JSON Schema配置
   */
  schema: {
    type: Object as PropType<JSONSchema>,
    default: (): JSONSchema => ({}),
    required: true,
  },

  /**
   * UI Schema配置，用于自定义表单元素的UI表现
   */
  uiSchema: {
    type: Object as PropType<UISchema>,
    default: (): UISchema => ({}),
  },

  /**
   * 自定义格式化校验规则
   */
  customFormats: {
    type: Object as PropType<Record<string, any>>,
    default: (): Record<string, any> => ({}),
  },

  /**
   * 自定义校验规则函数
   */
  customRule: {
    type: [Function, null] as PropType<ValidationRule | null>,
    default: null,
  },

  /**
   * 错误信息Schema，用于自定义错误显示
   */
  errorSchema: {
    type: Object as PropType<ErrorSchema>,
    default: (): ErrorSchema => ({}),
  },
} as const
