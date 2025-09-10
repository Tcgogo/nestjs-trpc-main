import type { JsonSchema } from '@tcgogo/types'
import type { VxeColumnProps, VxeColumnSlots } from 'vxe-table'
import { ElImage, ElSwitch, ElTag } from 'element-plus'
import { cloneDeep, merge } from 'es-toolkit'
import { isEmpty, isImage, parseStringToFunction } from '../helper'
import Code from './Code.vue'
import CommaNumber from './CommaNumber.vue'
import ImageEmpty from './imageEmpty.vue'
import LongText from './LongText.vue'
import { imageDefaultProps, isArrayProperty, isBooleanProperty, isNumberProperty, longTextDefaultProps, switchDefaultProps, tagDefaultProps } from './table'

type IValueTypeProps = {
  [key in JsonSchema.IValueType]: VxeColumnSlots['default']
}

const ElCompoments = {
  ElSwitch,
  ElTag,
  ElImage,
}

// export const BUILT_IN_VALUE_TYPES: IValueTypeProps = {
//   /**
//    * 代码块
//    */
//   code: {},
//   /**
//    * 百分比
//    */
//   percent: {},
//   /**
//    * 状态开关
//    */
//   switch: {},
//   /**
//    * 标签
//    */
//   tags: ({ row }) => {
//     return h(ElTag, {
//       ...props,
//     }, {
//       default: row[filed],
//     })
//   },
//   /**
//    * 评分
//    */
//   rate: {},
//   /**
//    * 数字千分位
//    */
//   'comma-number': {},
//   /**
//    * 图片显示
//    */
//   images: {},
//   /**
//    * 长文案 Tooltips 方式显示
//    */
//   'long-text': {},
//   /**
//    * 长文案点击弹窗方式显示
//    */
//   'long-text-modal': {},

//   '': {},
// }

function handleBooleanProperty(column: JsonSchema.BooleanProperty) {
  const valueType = column.valueType || column['ui:VxeColumn']?.cellRender?.name

  if (!valueType) {
    column.valueType = 'switch'
  }

  // 处理值
  if (column.valueFormatter) {
    column.valueFormatter = parseStringToFunction(column.valueFormatter)
    return column
  }

  return {
    ...column,
    valueFormatter: (value: any) => !!value,
  }
}

function handleNumberRunder(column: JsonSchema.NumberProperty) {
  const valueType = column.valueType || column['ui:VxeColumn']?.cellRender?.name

  if (!valueType) {
    column.valueType = 'comma-number'
  }

  if (column.valueFormatter) {
    column.valueFormatter = parseStringToFunction(column.valueFormatter)
    return column
  }

  return {
    ...column,
    valueFormatter: (value: any) => value,
  }
}

function handleArrayRunder(column: JsonSchema.ArrayProperty) {
  const valueType = column.valueType || column['ui:VxeColumn']?.cellRender?.name

  // Array 默认 tags 渲染
  if (!valueType) {
    column.valueType = 'tags'
  }

  // 处理值
  if (column.valueFormatter) {
    column.valueFormatter = parseStringToFunction(column.valueFormatter)
    return column
  }

  return {
    ...column,
    valueFormatter: (value: any) => {
      if (Array.isArray(value)) { return value }

      if (typeof value === 'string') { return value.split(',') }

      console.warn('无法处理 Array type value', value)
      return value
    },
  }
}

function handleDefaultRunder(column: JsonSchema.LinkProperty) {
  // 处理值
  if (column.valueFormatter) {
    column.valueFormatter = parseStringToFunction(column.valueFormatter)
    return column
  }

  return {
    ...column,
    valueFormatter: (value: any) => value,
  }
}

function handleSwitchRunder(column: JsonSchema.LinkProperty): VxeColumnSlots['default'] {
  const cellRender: NonNullable<VxeColumnProps['cellRender']> = column['ui:VxeColumn']?.cellRender || {}
  // 合并默认配置
  cellRender.props = merge(cloneDeep(switchDefaultProps), cellRender.props || {})

  return ({ row }) => {
    const value = column.valueFormatter ? column.valueFormatter(row[column.field!], column) : row[column.field!]

    // 处理数组
    if (Array.isArray(value)) {
      return h('div', {
        class: 'flex items-center justify-center gap-1',
      }, value.map(item => h(ElSwitch, {
        modelValue: item,
        ...cellRender.props,
      })))
    }

    // 处理单个值
    return h(ElSwitch, {
      modelValue: value,
      ...cellRender.props,
    })
  }
}

function handleTagRunder(column: JsonSchema.LinkProperty): VxeColumnSlots['default'] {
  const cellRender: NonNullable<VxeColumnProps['cellRender']> = column['ui:VxeColumn']?.cellRender || {}
  // 合并默认配置
  cellRender.props = merge(cloneDeep(tagDefaultProps), cellRender.props || {})

  return ({ row }) => {
    const value = column.valueFormatter ? column.valueFormatter(row[column.field!], column) : row[column.field!]

    // 处理数组
    if (Array.isArray(value)) {
      const target = value.map(item => column.enum?.find(enumItem => enumItem.value === item)?.label || item)

      return h('div', {
        class: 'flex items-center justify-center gap-1',
      }, target.map(item => h(ElTag, {
        ...cellRender.props,
      }, {
        default: () => h('span', { innerHTML: item }),
      })))
    }

    const target = column.enum?.find(enumItem => enumItem.value === value)?.label || value

    // 处理单个值
    return h(ElTag, {
      ...cellRender.props,
    }, {
      default: () => h('span', { innerHTML: target }),
    })
  }
}

function handleImageRunder(column: JsonSchema.LinkProperty): VxeColumnSlots['default'] {
  const cellRender: NonNullable<VxeColumnProps['cellRender']> = column['ui:VxeColumn']?.cellRender || {}
  // 合并默认配置
  cellRender.props = merge(cloneDeep(imageDefaultProps), cellRender.props || {})

  return ({ row }) => {
    const value = column.valueFormatter ? column.valueFormatter(row[column.field!], column) : row[column.field!]

    // 处理数组
    if (Array.isArray(value)) {
      const target = value.map(item => column.enum?.find(enumItem => enumItem.value === item)?.label || item)

      // target = target.map(item => isImage(item) ? item : 'error.png');

      return h('div', {
        class: 'flex items-center justify-center gap-1',
      }, target.map(item => h(ElImage, {
        ...cellRender.props,
        src: item,
        previewSrcList: target,
      }, {
        error: () => h(ImageEmpty),
      })))
    }

    const target = column.enum?.find(enumItem => enumItem.value === value)?.label || value

    // 处理单个值
    return h(ElImage, {
      ...cellRender.props,
      src: target,
      previewSrcList: [target],
    }, {
      error: () => h(ImageEmpty),
    })
  }
}

function handleCommaNumberRunder(column: JsonSchema.LinkProperty): VxeColumnSlots['default'] {
  const cellRender: NonNullable<VxeColumnProps['cellRender']> = column['ui:VxeColumn']?.cellRender || {}

  return ({ row }) => {
    const value = column.valueFormatter ? column.valueFormatter(row[column.field!], column) : row[column.field!]

    // 处理数组
    if (Array.isArray(value)) {
      const target = value.map(item => column.enum?.find(enumItem => enumItem.value === item)?.label || item)

      return h('div', {
        class: 'flex items-center justify-center gap-1',
      }, target.map(item => h(CommaNumber, {
        ...(cellRender.props || {}),
        value: item,
      })))
    }

    const target = column.enum?.find(enumItem => enumItem.value === value)?.label || value

    // 处理单个值
    return h(CommaNumber, {
      ...(cellRender.props || {}),
      value: target,
    })
  }
}

function handlePercentRunder(column: JsonSchema.LinkProperty): VxeColumnSlots['default'] {
  const cellRender: NonNullable<VxeColumnProps['cellRender']> = column['ui:VxeColumn']?.cellRender || {}
  return ({ row }) => {
    const value = column.valueFormatter ? column.valueFormatter(row[column.field!], column) : row[column.field!]

    // 处理数组
    if (Array.isArray(value)) {
      const target = value.map(item => column.enum?.find(enumItem => enumItem.value === item)?.label || item)

      return h('div', {
        class: 'flex items-center justify-center gap-1',
      }, target.map(item => h('span', {
        ...(cellRender.props || {}),
        innerHTML: isEmpty(item) ? '-' : `${item}%`,
      })))
    }

    const target = column.enum?.find(enumItem => enumItem.value === value)?.label || value

    // 处理单个值
    return h('span', {
      ...(cellRender.props || {}),
      innerHTML: isEmpty(target) ? '-' : `${target}%`,
    })
  }
}

function handleCodeRunder(column: JsonSchema.LinkProperty): VxeColumnSlots['default'] {
  const cellRender: NonNullable<VxeColumnProps['cellRender']> = column['ui:VxeColumn']?.cellRender || {}

  return ({ row }) => {
    const value = column.valueFormatter ? column.valueFormatter(row[column.field!], column) : row[column.field!]

    // 处理数组
    if (Array.isArray(value)) {
      const target = value.map(item => column.enum?.find(enumItem => enumItem.value === item)?.label || item)

      return h('div', {
        class: 'flex items-center justify-center gap-1',
      }, target.map(item => h(Code, {
        ...(cellRender.props || {}),
        code: item,
      })))
    }

    const target = column.enum?.find(enumItem => enumItem.value === value)?.label || value

    // 处理单个值
    return h(Code, {
      ...(cellRender.props || {}),
      code: target,
    })
  }
}

function handleLongTextRunder(column: JsonSchema.LinkProperty): VxeColumnSlots['default'] {
  const cellRender: NonNullable<VxeColumnProps['cellRender']> = column['ui:VxeColumn']?.cellRender || {}
  // 合并默认配置
  cellRender.props = merge(cloneDeep(longTextDefaultProps), cellRender.props || {})

  return ({ row }) => {
    const value = column.valueFormatter ? column.valueFormatter(row[column.field!], column) : row[column.field!]

    // 处理数组
    if (Array.isArray(value)) {
      const target = value.map(item => column.enum?.find(enumItem => enumItem.value === item)?.label || item)

      return h('div', {
        class: 'flex items-center justify-center gap-1',
      }, target.map(item => h(LongText, {
        text: item,
        content: item,
        ...(cellRender.props || {}),
        appendTo: 'body',
        teleported: true,
      })))
    }

    const target = column.enum?.find(enumItem => enumItem.value === value)?.label || value

    // 处理单个值
    return h(LongText, {
      ...(cellRender.props || {}),
      text: target,
      content: target,
      appendTo: 'body',
      teleported: true,
    })
  }
}

export function getVxeTableColumnDefault(column: JsonSchema.LinkProperty) {
  const type = column.type
  const valueType = column.valueType || column['ui:VxeColumn']?.cellRender?.name

  if (isBooleanProperty(column)) {
    column = handleBooleanProperty(column)
  }
  else if (isNumberProperty(column)) {
    column = handleNumberRunder(column)
  }
  else if (isArrayProperty(column)) {
    column = handleArrayRunder(column)
  }
  else {
    column = handleDefaultRunder(column)
  }

  if (valueType === 'switch') { return handleSwitchRunder(column) }

  if (valueType === 'tags') { return handleTagRunder(column) }

  if (valueType === 'images') { return handleImageRunder(column) }

  if (valueType === 'comma-number') { return handleCommaNumberRunder(column) }

  if (valueType === 'percent') { return handlePercentRunder(column) }

  if (valueType === 'code') { return handleCodeRunder(column) }

  if (valueType === 'long-text') { return handleLongTextRunder(column) }

  return null
}
