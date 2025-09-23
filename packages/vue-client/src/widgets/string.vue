<script setup lang="ts">
import type { CreateSchema, JsonSchema } from '@tcgogo/types'
import { ElColorPicker, ElDatePicker, ElInput, ElMention, ElRadioGroup, ElSelect, ElTimePicker, ElTimeSelect } from 'element-plus'
import { merge } from 'es-toolkit'
import { h } from 'vue'

const { schema, formData, prop } = defineProps<{
  schema: JsonSchema.StringProperty
  prop: string
  formData: any
}>()

const data = reactive({
  formData,
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
}

const createOption = computed(() => {
  const defaultOption: CreateSchema.StringCreateOption = {
    field: 'input',
    props: {
      placeholder: '请输入',
    },
  }

  const createOption = schema?.createOption as CreateSchema.StringCreateOption

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

  if (createOption?.field === 'date-picker' && createOption.props?.type?.includes('range')) {
    console.warn(`${prop}: ${createOption.props?.type}`, '当前值类型为 Array，提交时会强制转换成 String')
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
