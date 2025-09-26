<script setup lang="ts">
import type { CreateSchema, JsonSchema } from '@tcgogo/types'
import { ElCascader, ElCheckboxGroup, ElColorPicker, ElDatePicker, ElInput, ElMention, ElRadioGroup, ElSelect, ElTimePicker, ElTimeSelect } from 'element-plus'
import { merge } from 'es-toolkit'
import { h } from 'vue'

const { schema, formData, prop } = defineProps<{
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

const booleanFileds: Record<CreateSchema.ArrayCreateOption['field'], any> = {
  'select': ElSelect,
  'cascader': ElCascader,
  'checkbox-group': ElCheckboxGroup,
  'date-picker': ElDatePicker,
  'time-picker': ElTimePicker,
  'time-select': ElTimeSelect,
}

const createOption = computed(() => {
  const defaultOption: CreateSchema.ArrayCreateOption = {
    field: 'select',
    props: {
      placeholder: '请输入',
    },
  }

  const createOption = schema?.createOption as CreateSchema.ArrayCreateOption

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
