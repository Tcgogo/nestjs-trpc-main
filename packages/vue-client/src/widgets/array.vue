<script setup lang="ts">
import { isEmpty, parseStringToFunction } from '@/utils';
import type { CreateSchema, JsonSchema } from '@tcgogo/types'
import { ElCascader, ElCheckboxGroup, ElColorPicker, ElDatePicker, ElInput, ElMention, ElRadioGroup, ElSelect, ElTimePicker, ElTimeSelect } from 'element-plus'
import { merge } from 'es-toolkit'
import { h } from 'vue'

const { schema, formData, prop, root } = defineProps<{
  root: JsonSchema.ObjectProperty
  schema: JsonSchema.StringProperty
  prop: string
  formData: any
}>()

function isStringType(createOption: CreateSchema.ArrayCreateOption) {
  const arrayType = ['years', 'months', 'dates', 'datetimerange', 'daterange', 'monthrange', 'yearrange']
  const flag1 = createOption?.field === 'date-picker' && !arrayType.includes(createOption.props?.type || '')
  return flag1
}

const data = reactive({
  formData,
})

/** 处理默认值 */
function handleDefault() {
  if (schema.default) {
    if(!isEmpty(data.formData[prop])) {
      console.warn('注意：中途修改了默认值！')
    }

    data.formData[prop] = schema.default || []
  }
}

watch(() => schema.default, () => {
  handleDefault()
}, {
  immediate: true,
})

const booleanFileds: Record<CreateSchema.ArrayCreateOption['field'], any> = {
  'select': ElSelect,
  'cascader': ElCascader,
  'checkbox-group': ElCheckboxGroup,
  'date-picker': ElDatePicker,
  'time-picker': ElTimePicker,
  'time-select': ElTimeSelect,
}

const schemaCreateOption = ref<CreateSchema.ArrayCreateOption>()

function handleCreateOption() {
  const createOption = schema?.createOption as CreateSchema.ArrayCreateOption

  const fn = parseStringToFunction(schema['ui:ElFormItem'])

  // 获取 formItem props
  const formItemProps = fn?.(prop, formData, root.properties) || {}

  // 处理 必填 rule
  if ('required' in schema) {
    formItemProps.required = schema.required
  }

  // @ts-expect-error 处理只读
  schema['$elFormItem'] = formItemProps

  // 处理 on 事件
  if (createOption?.on) {
    createOption.on = parseStringToFunction(createOption.on)
  }

  const defaultOption: CreateSchema.ArrayCreateOption = {
    field: 'select',
    props: {
      placeholder: '请输入',
    },
  }


  if (createOption?.field === 'select') {
    const defaultProps = {
      props: {
        value: 'value',
        label: 'label',
        options: 'options',
        disabled: 'disabled',
      },
    }

    createOption!.props = merge(defaultProps, createOption!.props || {})
  }

  if (createOption?.field === 'time-picker') {
    const defaultProps = {
      props: {
        type: 'datetimerange',
      },
    }

    createOption!.props = merge(defaultProps, createOption!.props || {})
  }

  if (createOption?.field === 'date-picker') {
    const defaultProps = {
      props: {
        type: 'daterange',
      },
    }

    createOption!.props = merge(defaultProps, createOption!.props || {})
  }

  if (isStringType(createOption)) {
    console.warn(`Array-${prop}: ${createOption.field}`, '当前值类型为 String，提交时会强制转换成 Array')
  }

  // 合并 schema
  schemaCreateOption.value = merge(defaultOption, { ...schema, ...(createOption || {}) })
}

onBeforeMount(() => {
  handleCreateOption()
})
</script>

<template>
  <!-- ui:ElFormItem 类型有问题 -->
  <el-form-item v-if="schemaCreateOption" v-bind="schema['$elFormItem'] as any" :label="schema.title" :prop="prop">
    <div class="form-item w-full">
      <component :is="h(booleanFileds[schemaCreateOption.field], {})" v-model="data.formData[prop]"
        v-bind="schemaCreateOption.props" v-on="schemaCreateOption.on?.(prop, formData, root.properties) || {}" />
    </div>
  </el-form-item>
</template>

<style scoped lang="less"></style>
