<script setup lang="ts">
import type { CreateSchema, JsonSchema } from '@tcgogo/types'
import { ElInput, ElInputNumber, ElRate, ElSlider } from 'element-plus'
import { merge } from 'es-toolkit'
import { h } from 'vue'
import { isEmpty, parseStringToFunction } from '@/utils'

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
  if ('default' in schema) {
    if (!isEmpty(data.formData[prop])) {
      console.warn('注意：中途修改了默认值！')
    }

    data.formData[prop] = schema.default
  }
}

watch(() => schema.default, () => {
  handleDefault()
}, {
  immediate: true,
})

const booleanFileds: Record<CreateSchema.NumberCreateOption['field'], any> = {
  'input': ElInput,
  'input-number': ElInputNumber,
  'slider': ElSlider,
  'rate': ElRate,
}

const schemaCreateOption = ref<CreateSchema.NumberCreateOption>()

function handleCreateOption() {
  const createOption = schema?.createOption as CreateSchema.NumberCreateOption

  const fn = parseStringToFunction(schema['ui:ElFormItem'])

  // 获取 formItem props
  const formItemProps = fn?.(prop, formData, root.properties) || {}

  // 处理 必填 rule
  if ('required' in schema) {
    formItemProps.required = schema.required
  }

  // @ts-expect-error 处理只读
  schema.$elFormItem = formItemProps

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
  schemaCreateOption.value = merge(defaultOption, { ...schema, ...(createOption || {}) })
}

onBeforeMount(() => {
  handleCreateOption()
})
</script>

<template>
  <!-- ui:ElFormItem 类型有问题 -->
  <el-form-item v-if="schemaCreateOption" v-bind="schema.$elFormItem as any" :label="schema.title" :prop="prop">
    <div class="form-item w-full">
      <component
        :is="h(booleanFileds[schemaCreateOption.field], {})"
        v-model="data.formData[prop]"
        v-bind="schemaCreateOption.props"
        v-on="schemaCreateOption.on?.(prop, formData, root.properties) || {}"
      />
    </div>
  </el-form-item>
</template>

<style scoped lang="less"></style>
