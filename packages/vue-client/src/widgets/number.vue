<script setup lang="ts">
import type { CreateSchema, JsonSchema } from '@tcgogo/types'
import {  ElInput, ElInputNumber, ElRate, ElSlider } from 'element-plus'
import { merge } from 'es-toolkit'
import { h } from 'vue'

const { schema, formData, prop } = defineProps<{
  schema: JsonSchema.StringProperty
  prop: string
  formData: any
}>()

function isStringType(createOption: CreateSchema.NumberCreateOption) {
  if(createOption?.field === 'input') {
    return createOption.props?.type !== 'number'
  }

  return false
}

const data = reactive({
  formData,
})

const booleanFileds: Record<CreateSchema.NumberCreateOption['field'], any> = {
  'input': ElInput,
  'input-number': ElInputNumber,
  'slider': ElSlider,
  'rate': ElRate,
}

const createOption = computed(() => {
  const defaultOption: CreateSchema.NumberCreateOption = {
    field: 'input-number',
    props: {
      placeholder: '请输入',
    },
  }

  const createOption = schema?.createOption as CreateSchema.NumberCreateOption

  if (createOption?.field === 'input') {
    const defaultProps = {
      type: 'number',
    }

    createOption!.props = merge(defaultProps, createOption!.props || {})
  }


  if (isStringType(createOption)) {
    console.warn(`Number-${prop}: ${createOption.field}`, '当前值类型为 String，提交时会强制转换成 Number')
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
