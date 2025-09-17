/** 组件 props 类型 */
import type { CheckboxProps, RadioGroupProps, RadioProps, SwitchProps } from 'element-plus'
import type { JsonSchema } from './JsonSchema'

interface BaseBooleanProps {
  activeText?: string
  inactiveText?: string
}

export declare namespace CreateSchema {
  interface ElSwitchCreateOption {
    field: 'el-switch'
    props: Partial<SwitchProps> & BaseBooleanProps
    groupProps?: never
  }

  interface ElCheckboxCreateOption {
    field: 'el-checkbox'
    props: Partial<CheckboxProps> & BaseBooleanProps
    groupProps?: never
  }

  interface ElRadioCreateOption {
    field: 'el-radio'
    props?: Partial<RadioProps> & BaseBooleanProps
    groupProps?: Partial<RadioGroupProps>
  }

  /** 布尔类型创建选项 */
 type BooleanCreateOption = (ElSwitchCreateOption | ElCheckboxCreateOption | ElRadioCreateOption) & Omit<JsonSchema.BooleanProperty, 'type' | 'title'>
}
