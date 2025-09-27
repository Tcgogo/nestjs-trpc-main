/** 组件 props 类型 */
import type { CascaderEmits, CascaderProps, CheckboxEmits, CheckboxGroupEmits, CheckboxGroupProps, CheckboxProps, ColorPickerEmits, ColorPickerProps, DatePickerProps, InputEmits, InputNumberEmits, InputNumberProps, InputProps, MentionEmits, MentionProps, RadioEmits, RadioGroupEmits, RadioGroupProps, RadioProps, RateEmits, RateProps, selectEmits, SelectProps, SliderEmits, SliderProps, SwitchEmits, SwitchProps, TimeSelectProps } from 'element-plus'
import type { ComponentInstance } from 'vue'
import type { JsonSchema } from './JsonSchema'

interface BaseBooleanProps {
  activeText?: string
  inactiveText?: string
}

type Listener<T> = (prop: string, formData: any, properties: JsonSchema.ObjectProperty['properties']) => T

interface ControlProps {
  key: string
}

export declare namespace CreateSchema {

  interface BaseCreateOption {
    control?: {
      handle: (prop: string, formData: any, properties: JsonSchema.ObjectProperty['properties']) => any
      // 控制字段
      properties: {
        [key: string]: keyof JsonSchema.LinkPropertyAnd
      }
    }[]
  }

  interface ElSwitchCreateOption {
    field: 'switch'
    props: Partial<SwitchProps> & BaseBooleanProps
    groupProps?: never
    on?: Listener<SwitchEmits>
  }

  interface ElCheckboxCreateOption {
    field: 'checkbox'
    props: Partial<CheckboxProps> & BaseBooleanProps
    groupProps?: never
    on?: Listener<CheckboxEmits>
  }

  interface ElCheckboxGroupCreateOption {
    field: 'checkbox-group'
    props: Partial<CheckboxGroupProps>
    on?: Listener<CheckboxGroupEmits>
  }

  interface ElRadioCreateOption {
    field: 'radio'
    props?: Partial<RadioProps> & BaseBooleanProps
    groupProps?: Partial<RadioGroupProps>
    on?: Listener<RadioEmits>
  }

  /** 布尔类型创建选项 */
 type BooleanCreateOption = (ElSwitchCreateOption | ElCheckboxCreateOption | ElRadioCreateOption) & Omit<JsonSchema.BooleanProperty, 'type' | 'title'>

 interface ElInputCreateOption {
   field: 'input'
   props: Partial<InputProps>
   on?: Listener<InputEmits>
 }

 interface ElSelectCreateOption {
   field: 'select'
   props: Partial<SelectProps>
   on?: Listener<typeof selectEmits>
 }

 interface ElColorPickerCreateOption {
   field: 'color-picker'
   props: Partial<ColorPickerProps>
   on?: Listener<ColorPickerEmits>
 }

 interface ElDatePickerCreateOption {
   field: 'date-picker'
   props: Partial<CommonPickerEmits>
   on?: Listener<{}>
 }

 interface ElTimePickerCreateOption {
   field: 'time-picker'
   props: Partial<CommonPickerEmits>
   on?: Listener<{}>
 }

 interface ElTimeSelectCreateOption {
   field: 'time-select'
   props: Partial<TimeSelectProps>
   on?: Listener<{}>
 }

 interface ElMentionCreateOption {
   field: 'mention'
   props: Partial<MentionProps>
   on?: Listener<MentionEmits>
 }

 interface ElRadioGroupCreateOption {
   field: 'radio-group'
   props: Partial<RadioGroupProps>
   on?: Listener<RadioGroupEmits>
 }

 interface ElCascaderCreateOption {
   field: 'cascader'
   props: Partial<CascaderProps>
   on?: Listener<CascaderEmits>
 }

 interface ElRateCreateOption {
   field: 'rate'
   props: Partial<RateProps>
   on?: Listener<RateEmits>
 }

 interface ElSliderCreateOption {
   field: 'slider'
   props: Partial<SliderProps>
   on?: Listener<SliderEmits>
 }

 interface ElInputNumberCreateOption {
   field: 'input-number'
   props: Partial<InputNumberProps>
   on?: Listener<InputNumberEmits>
 }

 type StringCreateOption = BaseCreateOption & (ElCheckboxGroupCreateOption | ElCascaderCreateOption | ElTimeSelectCreateOption | ElTimePickerCreateOption | ElRadioGroupCreateOption | ElMentionCreateOption | ElInputCreateOption | ElSelectCreateOption | ElColorPickerCreateOption | ElDatePickerCreateOption) & Omit<JsonSchema.StringProperty, 'type' | 'title'>

 type ArrayCreateOption = BaseCreateOption & (ElCheckboxGroupCreateOption | ElCascaderCreateOption | ElTimeSelectCreateOption | ElTimePickerCreateOption | ElSelectCreateOption | ElDatePickerCreateOption) & Omit<JsonSchema.ArrayProperty, 'type' | 'title'>

 type NumberCreateOption = BaseCreateOption & (ElSliderCreateOption | ElRateCreateOption | ElInputCreateOption | ElInputNumberCreateOption) & Omit<JsonSchema.NumberProperty, 'type' | 'title'>
}
