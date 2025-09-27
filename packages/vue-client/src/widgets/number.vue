<script setup lang="ts">
import { parseStringToFunction } from '@/utils';
import type { CreateSchema, JsonSchema } from '@tcgogo/types'
import { ElInput, ElInputNumber, ElRate, ElSlider } from 'element-plus'
import { merge } from 'es-toolkit'
import { h } from 'vue'

const { schema, formData, prop, root } = defineProps<{
  root: JsonSchema.ObjectProperty
  schema: JsonSchema.StringProperty
  prop: string
  formData: any
}>()

function isStringType(createOption: CreateSchema.NumberCreateOption) {
  if (createOption?.field === 'input') {
    return createOption.props?.type !== 'number'
  }

  return false
}

const data = reactive({
  formData,
})

/** 处理默认值 */
function handleDefault() {
  if (schema.default) {
    data.formData[prop] = schema.default
  }
}

onBeforeMount(() => {
  handleDefault()
})

const booleanFileds: Record<CreateSchema.NumberCreateOption['field'], any> = {
  'input': ElInput,
  'input-number': ElInputNumber,
  'slider': ElSlider,
  'rate': ElRate,
}

const createOption = computed(() => {
  const createOption = schema?.createOption as CreateSchema.NumberCreateOption

  // 处理 on 事件
  if (createOption?.on) {
    createOption.on = parseStringToFunction(createOption.on)
  }

  const defaultOption: CreateSchema.NumberCreateOption = {
    field: 'input-number',
    props: {
      placeholder: '请输入',
    },
  }


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
  return merge(defaultOption, { ...schema, ...(createOption || {}) })
})
</script>

<template>
  <el-form-item v-if="schema.createOption" :label="schema.title" :prop="prop">
    <div class="form-item w-full">
      <component
        :is="h(booleanFileds[createOption.field], {})"
        v-model="data.formData[prop]"
        v-bind="createOption.props"
        v-on="createOption.on?.(prop, formData, root.properties) || {}"
      />
    </div>
  </el-form-item>
</template>

<style scoped lang="less"></style>
