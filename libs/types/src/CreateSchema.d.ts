/** 组件 props 类型 */
import type { CheckboxProps, InputProps, RadioGroupProps, RadioProps, SwitchProps } from 'element-plus'
import type { JsonSchema } from './JsonSchema'

interface BaseBooleanProps {
  activeText?: string
  inactiveText?: string
}

export declare namespace CreateSchema {
  interface ElSwitchCreateOption {
    field: 'switch'
    props: Partial<SwitchProps> & BaseBooleanProps
    groupProps?: never
  }

  interface ElCheckboxCreateOption {
    field: 'checkbox'
    props: Partial<CheckboxProps> & BaseBooleanProps
    groupProps?: never
  }

  interface ElRadioCreateOption {
    field: 'radio'
    props?: Partial<RadioProps> & BaseBooleanProps
    groupProps?: Partial<RadioGroupProps>
  }

  /** 布尔类型创建选项 */
 type BooleanCreateOption = (ElSwitchCreateOption | ElCheckboxCreateOption | ElRadioCreateOption) & Omit<JsonSchema.BooleanProperty, 'type' | 'title'>

 interface ElInputCreateOption {
   field: 'input'
   props: Partial<InputProps>
 }

 type StringCreateOption = ElInputCreateOption & Omit<JsonSchema.StringProperty, 'type' | 'title'>
}
