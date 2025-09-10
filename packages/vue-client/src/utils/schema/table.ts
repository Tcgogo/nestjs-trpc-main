import type { JsonSchema } from '@tcgogo/types'
import { ElImage, ElSwitch, ElTag } from 'element-plus'
import type { ImageProps, SwitchProps, TagProps } from 'element-plus'
import ImageEmpty from './imageEmpty.vue'
import type { VxeColumnProps, VxeColumnSlots } from 'vxe-table'
import type { ExtractPropTypes, HTMLAttributes } from 'vue'


function isBooleanProperty(property: any): property is JsonSchema.BooleanProperty {
  return property.type === 'boolean'
}

function isStringProperty(property: any): property is JsonSchema.StringProperty {
  return property.type === 'string'
}

function isNumberProperty(property: any): property is JsonSchema.NumberProperty {
  return property.type === 'number'
}

function isArrayProperty(property: any): property is JsonSchema.ArrayProperty {
  return property.type === 'array'
}

function isObjectProperty(property: any): property is JsonSchema.ObjectProperty {
  return property.type === 'object'
}

function isNullProperty(property: any): property is JsonSchema.NullProperty {
  return property.type === 'null'
}

const tagDefaultProps: Partial<TagProps> = {
  type: 'primary'
}

const switchDefaultProps: Partial<SwitchProps> = {
  disabled: true
}

const imageDefaultProps: Partial<ImageProps> = {
  fit: 'cover',
  previewTeleported: true,
  showProgress: true,
}

const codeDefaultProps: { calss?: HTMLAttributes['class'] } = {

}


const booleanDefaultVxeColumn: VxeColumnProps = {
  cellRender: {
    props: {
      'active-value': 1,
      'inactive-value': 0,
      disabled: true,
    },
  },
}

const ElCompoments = {
  ElSwitch,
  ElTag,
  ElImage,
}

// function formRenderDefaultVxeColumn(column: JsonSchema.LinkProperty): VxeColumnSlots['default'] {
//   const valueType = column.valueType;
//   const component = valueType ? BUILT_IN_VALUE_TYPES[valueType] : null;
//   if (!component) {
//     console.warn(`Compoments tpye ${valueType} not found`)
//     return;
//   }

// }

export {
  tagDefaultProps,
  switchDefaultProps,
  imageDefaultProps,
  isArrayProperty,
  isBooleanProperty,
  isNullProperty,
  isNumberProperty,
  isObjectProperty,
  isStringProperty,
}
