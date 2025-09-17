import type { CreateSchema } from './CreateSchema'
import type { UITable } from './VxeTable'

interface EnumItem {
  value: string
  label: string
}

interface BaseProperty {
  /** 字段类型 */
  type: 'string' | 'number' | 'boolean' | 'null' | 'array' | 'object'

  valueType?: JsonSchema.IValueType

  /** 字段名称 */
  title: string
  /** 字段描述 */
  description?: string
  /** 字段默认值 */
  default?: string

  /** 字段是否只读 */
  readonly?: boolean

  /** 字段枚举值 */
  enum?: EnumItem[]

  /** 表格列字段 */
  'ui:VxeColumn'?: UITable.VxeColumn

  /** 表格字段 */
  'ui:VxeTable'?: UITable.VxeTable

  /** 操作按钮列 */
  'ui:HandleColumn'?: UITable.VxeColumn

  valueFormatter?: (value: any, column: JsonSchema.LinkProperty) => any

  /** 组件attrs属性 */
  [key: `ui:${string}`]: {
    [key: string]: any
  }

  /** 字段名称 */
  field?: string
}

export declare namespace JsonSchema {
  type IValueType<T extends string = ''>
  = | 'code'
    | 'rate'
    | 'comma-number'
    | 'switch'
    | 'percent'
    | 'images'
    | 'tags'
    | 'long-text'
    | T

  /** 字符串属性 */
  interface StringProperty extends BaseProperty {
    type: 'string'

    /** 字段是否必填 */
    required?: boolean

    /** 字段最大长度 */
    maxLength?: number

    /** 字段最小长度 */
    minLength?: number

    /** 字段验证正则表达式 */
    pattern?: string
  }

  /** 数字属性 */
  interface NumberProperty extends BaseProperty {
    type: 'number'

    /** 字段是否必填 */
    required?: boolean

    /** 字段最大值 */
    maximum?: number

    /** 字段最小值 */
    minimum?: number

    /** 字段是否为独占最小值 */
    exclusiveMinimum?: boolean | number

    /** 字段是否为独占最大值 */
    exclusiveMaximum?: boolean | number

    /** 字段是否为整数 */
    multipleOf?: number
  }

  /** 布尔属性 */
  interface BooleanProperty extends BaseProperty {
    type: 'boolean'

    /** 字段是否必填 */
    required?: boolean

    /** 创建选项 */
    createOption?: CreateSchema.BooleanCreateOption
  }

  /** 空属性 */
  interface NullProperty extends BaseProperty {
    type: 'null'

    /** 字段是否必填 */
    required?: boolean

  }

  /** 数组属性 */
  interface ArrayProperty extends BaseProperty {
    type: 'array'

    /** 字段是否必填 */
    required?: boolean

    /** 字段项 */
    items?: {
      /** 字段项类型 */
      type?: 'string' | 'number' | 'boolean'
      /** 字段项枚举值 */
      enum?: string[]
    }

    /** 字段额外项 */
    additionalItems?: false | { type?: 'string' | 'number' | 'boolean' }

    /** 字段包含 */
    contains?: {
      /** 字段项类型 */
      type?: 'string' | 'number' | 'boolean'
      /** 字段项枚举值 */
      enum?: string[]
    }

    /** 字段最小长度 */
    minItems?: number

    /** 字段最大长度 */
    maxItems?: number

    /** 字段是否唯一 */
    uniqueItems?: boolean

    /** 字段最小包含 */
    minContains?: number

    /** 字段最大包含 */
    maxContains?: number
  }

  type LinkProperty = StringProperty | NumberProperty | BooleanProperty | ArrayProperty | ObjectProperty | NullProperty

  /** 对象属性 */
  interface ObjectProperty extends BaseProperty {
    type: 'object'

    /** 字段属性 */
    properties?: {
      [key: string]: LinkProperty
    }

    /** 字段必填属性 */
    required?: string[]

    /** 字段模式属性 */
    patternProperties?: {
      [key: string]: LinkProperty
    }

    /** 字段额外属性 */
    additionalProperties?: false | { type?: 'string' | 'number' | 'boolean' }

    /** 字段属性名称 */
    propertyNames?: {
      /** 字段属性名称正则表达式 */
      pattern?: string
    }

    /** 字段最小属性数 */
    minProperties?: number

    /** 字段最大属性数 */
    maxProperties?: number
  }
}
