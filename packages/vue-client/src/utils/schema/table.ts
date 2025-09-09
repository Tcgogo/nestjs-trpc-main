import type { JsonSchema } from '@tcgogo/types'
import { ElImage, ElSwitch, ElTag } from 'element-plus'
import ImageEmpty from './imageEmpty.vue'
import type { VxeColumnSlots } from 'vxe-table'


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

const booleanDefaultVxeColumn = {
  cellRender: {
    name: 'ElSwitch',
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

function formRenderDefaultVxeColumn(name: keyof typeof ElCompoments, filed: string, props: any): VxeColumnSlots['default'] {
  const component: any = ElCompoments[name]

  if (!component) {
    console.warn(`Compoments ${name} not found`)
    return;
  }

  if (name === 'ElTag') {
    return ({ row }: { row: any }) => {
      return h(component, {
        ...props,
      }, {
        default: row[filed],
      })
    }
  }

  if (name === 'ElImage') {
    return ({ row }: { row: any }) => {
      return h(component, {
        src: row[filed],
        'preview-src-list': [row[filed]],
        ...props,
      }, {
        error: () => {
          return h(ImageEmpty)
        },
      })
    }
  }

  return (slotData) => {
    return h(component, {
      modelValue: slotData.row[filed],
      ...props,
    })
  }
}

export {
  booleanDefaultVxeColumn,
  formRenderDefaultVxeColumn,
  isArrayProperty,
  isBooleanProperty,
  isNullProperty,
  isNumberProperty,
  isObjectProperty,
  isStringProperty,
}
