<script setup lang="ts">
import type { CreateSchema, JsonSchema } from '@tcgogo/types'
import { ElCascader, ElCheckboxGroup, ElColorPicker, ElDatePicker, ElInput, ElMention, ElRadioGroup, ElSelect, ElTimePicker, ElTimeSelect } from 'element-plus'
import { merge } from 'es-toolkit'
import { h } from 'vue'
import { parseStringToFunction } from '@/utils';

const { schema, formData, prop } = defineProps<{
  root: JsonSchema.ObjectProperty
  schema: JsonSchema.StringProperty
  prop: string
  formData: any
}>()

function isArrayType(createOption: CreateSchema.StringCreateOption) {
  const arrayType = ['years', 'months', 'dates', 'datetimerange', 'daterange', 'monthrange', 'yearrange']
  const flag1 = createOption?.field === 'date-picker' && arrayType.includes(createOption.props?.type || '')
  const flag2 = createOption?.field === 'cascader'
  const flag3 = createOption?.field === 'checkbox-group'
  return flag1 || flag2 || flag3
}

const data = reactive({
  formData,
})

/** 处理默认值 */
function handleDefault() {
  if (schema.default) {
    data.formData[prop] = schema.default || ''
  }
}

onBeforeMount(() => {
  handleDefault()
})

const booleanFileds: Record<CreateSchema.StringCreateOption['field'], any> = {
  'input': ElInput,
  'select': ElSelect,
  'color-picker': ElColorPicker,
  'date-picker': ElDatePicker,
  'mention': ElMention,
  'radio-group': ElRadioGroup,
  'time-picker': ElTimePicker,
  'time-select': ElTimeSelect,
  'cascader': ElCascader,
  'checkbox-group': ElCheckboxGroup,
}

const createOption = computed(() => {
  const createOption = schema?.createOption as CreateSchema.StringCreateOption

  // 处理 on 事件
  if (createOption?.on) {
    createOption.on = parseStringToFunction(createOption.on)
  }

  const defaultOption: CreateSchema.StringCreateOption = {
    field: 'input',
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
        type: 'datetime',
      },
    }

    createOption!.props = merge(defaultProps, createOption!.props || {})
  }

  if (isArrayType(createOption)) {
    console.warn(`String-${prop}: ${createOption.field}`, '当前值类型为 Array，提交时会强制转换成 String')
  }

  // 合并 schema
  return merge(defaultOption, { ...schema, ...(schema.createOption || {}) })
})
</script>

<template>
  <el-form-item v-if="schema.createOption" :label="schema.title" :prop="prop">
    <div class="form-item w-full">
      <component
        :is="h(booleanFileds[createOption.field], {})"
        v-model="data.formData[prop]"
        v-bind="createOption.props"
      />
    </div>
  </el-form-item>
</template>

<style scoped lang="less"></style>
