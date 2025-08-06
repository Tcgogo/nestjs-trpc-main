import type { Component, ComputedRef, Ref, VNode } from 'vue'

// JSON Schema 相关类型
export interface JSONSchema {
  type?: 'object' | 'array' | 'string' | 'number' | 'integer' | 'boolean' | 'null'
  title?: string
  description?: string
  properties?: Record<string, JSONSchema>
  items?: JSONSchema | JSONSchema[]
  required?: string[]
  enum?: any[]
  format?: string
  minimum?: number
  maximum?: number
  minLength?: number
  maxLength?: number
  pattern?: string
  additionalProperties?: boolean | JSONSchema
  dependencies?: Record<string, string[] | JSONSchema>
  anyOf?: JSONSchema[]
  oneOf?: JSONSchema[]
  allOf?: JSONSchema[]
  const?: any
  default?: any
  defaults?: any
  examples?: any[]
  definitions?: Record<string, JSONSchema>
  additionalItems?: JSONSchema
  minItems?: number
  uniqueItems?: boolean
  id?: string
  $id?: string
  $ref?: string
  $schema?: string
  enumNames?: string[]
}

// UI Schema 类型
export interface UISchema {
  'ui:widget'?: string | Component
  'ui:field'?: string | Component
  'ui:title'?: string
  'ui:description'?: string
  'ui:placeholder'?: string
  'ui:disabled'?: boolean
  'ui:readonly'?: boolean
  'ui:hidden'?: boolean
  'ui:order'?: string[]
  'ui:options'?: Record<string, any>
  'ui:help'?: string
  'ui:submitButtonOptions'?: ButtonOptions
  'ui:showTitle'?: boolean
  'ui:showDescription'?: boolean
  'ui:enumOptions'?: EnumOption[]
  [key: string]: any
}

// 枚举选项类型
export interface EnumOption {
  label: string
  value: any
  disabled?: boolean
}

// 按钮选项类型
export interface ButtonOptions {
  props?: Record<string, any>
  submitText?: string
  norender?: boolean
}

// 错误信息类型
export interface ErrorSchema {
  [key: string]: ErrorInfo | ErrorSchema
}

export interface ErrorInfo {
  __errors?: string[]
  [key: string]: any
}

// 表单配置类型
export interface FormProps {
  labelPosition?: 'left' | 'right' | 'top'
  labelWidth?: string | number
  labelSuffix?: string
  inline?: boolean
  inlineMessage?: boolean
  statusIcon?: boolean
  showMessage?: boolean
  size?: 'large' | 'default' | 'small'
  disabled?: boolean
  validateOnRuleChange?: boolean
  hideRequiredAsterisk?: boolean
  scrollToError?: boolean
  layoutColumn?: number
  isMiniDes?: boolean
  defaultSelectFirstOption?: boolean
  popover?: PopoverOptions
  inlineFooter?: boolean
}

export interface PopoverOptions {
  placement?: string
  trigger?: 'hover' | 'click' | 'focus' | 'manual'
  width?: string | number
  disabled?: boolean
  [key: string]: any
}

// 表单底部配置类型
export interface FormFooter {
  show?: boolean
  okBtn?: string
  okBtnProps?: Record<string, any>
  cancelBtn?: string
  formItemAttrs?: Record<string, any>
}

// 全局选项类型
export interface GlobalOptions {
  WIDGET_MAP: WidgetMap
  COMPONENT_MAP: ComponentMap
  HELPERS: {
    isMiniDes: (formProps?: FormProps) => boolean
  }
}

// Widget 映射类型
export interface WidgetMap {
  types: Record<string, string | Component>
  formats: Record<string, string | Component>
  common: Record<string, string | Component>
  widgetComponents?: Record<string, Component>
}

// 组件映射类型
export interface ComponentMap {
  form: string
  formItem: string | Component
  button: string | Component
  popover: string | Component
}

// 字段属性类型
export interface FieldProps {
  formProps?: FormProps | null
  globalOptions?: GlobalOptions | null
  schema: JSONSchema
  uiSchema?: UISchema
  errorSchema?: ErrorSchema
  customRule?: ValidationRule | null
  customFormats?: Record<string, any>
  rootSchema: JSONSchema
  rootFormData: any
  curNodePath: string
  required?: boolean
  needValidFieldGroup?: boolean
}

// Widget 属性类型
export interface WidgetProps extends FieldProps {
  isFormData?: boolean
  curValue?: any
  widget?: string | Component | null
  uiRequired?: boolean
  emptyValue?: any
  label?: string
  width?: string
  labelWidth?: string
  description?: string
  widgetAttrs?: Record<string, any>
  widgetClass?: Record<string, any>
  widgetStyle?: Record<string, any>
  fieldAttrs?: Record<string, any>
  fieldClass?: Record<string, any>
  fieldStyle?: Record<string, any>
  uiProps?: Record<string, any>
  getWidget?: ((widget: any) => void) | null
  renderScopedSlots?: (() => Record<string, any>) | Record<string, any> | null
  onChange?: ((data: ChangeData) => void) | null
}

// 变更数据类型
export interface ChangeData {
  curVal: any
  preVal: any
  parentFormData: any
  rootFormData: any
}

// 校验规则类型
export type ValidationRule = (params: ValidationParams) => Promise<void> | void

export interface ValidationParams {
  field: string
  value: any
  rootFormData: any
  callback?: (error?: string) => void
}

// 表单事件类型
export interface FormEmits {
  'update:modelValue': [value: any]
  'change': [data: { newValue: any, oldValue: any }]
  'submit': [data: Ref<any>]
  'cancel': []
  'validation-failed': [errors: any]
  'form-mounted': [form: any, data: { formData: any }]
}

// 字段配置类型
export interface FieldConfig {
  field: Component
  fieldProps?: Record<string, any>
}

// 依赖关系类型
export interface DependencyInfo {
  isDependency: boolean
  curDependent: boolean
}

// Widget 配置类型
export interface WidgetConfig {
  widget: string | Component
  uiProps: Record<string, any>
  widgetAttrs?: Record<string, any>
  widgetClass?: Record<string, any>
  widgetStyle?: Record<string, any>
  fieldAttrs?: Record<string, any>
  fieldClass?: Record<string, any>
  fieldStyle?: Record<string, any>
}
