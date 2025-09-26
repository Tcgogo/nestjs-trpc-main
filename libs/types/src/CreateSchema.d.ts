/** 组件 props 类型 */
import type { CascaderProps, CheckboxGroupProps, CheckboxProps, ColorPickerProps, DatePickerProps, InputProps, MentionProps, RadioGroupProps, RadioProps, SelectProps, SwitchProps, TimeSelectProps } from 'element-plus'
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

  interface ElCheckboxGroupCreateOption {
    field: 'checkbox-group'
    props: Partial<CheckboxGroupProps>
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

 interface ElSelectCreateOption {
   field: 'select'
   props: Partial<SelectProps>
 }

 interface ElColorPickerCreateOption {
   field: 'color-picker'
   props: Partial<ColorPickerProps>
 }

 interface ElDatePickerCreateOption {
   field: 'date-picker'
   props: Partial<DatePickerProps>
 }

 interface ElTimePickerCreateOption {
   field: 'time-picker'
   props: Partial<DatePickerProps>
 }

 interface ElTimeSelectCreateOption {
   field: 'time-select'
   props: Partial<TimeSelectProps>
 }

 interface ElMentionCreateOption {
   field: 'mention'
   props: Partial<MentionProps>
 }

 interface ElRadioGroupCreateOption {
   field: 'radio-group'
   props: Partial<RadioGroupProps>
 }

 interface ElCascaderCreateOption {
   field: 'cascader'
   props: Partial<CascaderProps>
 }

 type StringCreateOption = (ElCheckboxGroupCreateOption | ElCascaderCreateOption | ElTimeSelectCreateOption | ElTimePickerCreateOption | ElRadioGroupCreateOption | ElMentionCreateOption | ElInputCreateOption | ElSelectCreateOption | ElColorPickerCreateOption | ElDatePickerCreateOption) & Omit<JsonSchema.StringProperty, 'type' | 'title'>

 type ArrayCreateOption = (ElCheckboxGroupCreateOption | ElCascaderCreateOption | ElTimeSelectCreateOption | ElTimePickerCreateOption | ElSelectCreateOption | ElDatePickerCreateOption) & Omit<JsonSchema.ArrayProperty, 'type' | 'title'>
}
