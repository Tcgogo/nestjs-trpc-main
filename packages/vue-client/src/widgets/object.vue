<script setup lang="ts">
import type { JsonSchema } from '@tcgogo/types'
import { isEmpty, parseStringToFunction } from '@/utils'
import Index from './index.vue'

const { schema, formData, prop, root } = defineProps<{
  root: JsonSchema.ObjectProperty
  schema: JsonSchema.ObjectProperty
  prop: string
  formData: any
}>()

const data = reactive({
  formData,
})

/** 处理默认值 */
function handleDefault() {
  if (schema.default) {
    if (!isEmpty(data.formData[prop])) {
      console.warn('注意：中途修改了默认值！')
    }

    data.formData[prop] = schema.default || {}
  }
}

watch(() => schema.default, () => {
  handleDefault()
}, {
  immediate: true,
})

function getFormItemProps() {
  const fn = parseStringToFunction(schema['ui:ElFormItem'])

  // 获取 formItem props
  const formItemProps = fn?.(prop, formData, root.properties) || {}

  // 处理 必填 rule
  if ('required' in schema) {
    formItemProps.required = schema.required
  }

  // @ts-expect-error 处理只读
  schema.$elFormItem = formItemProps
}

onBeforeMount(() => {
  getFormItemProps()
})
</script>

<template>
  <!-- ui:ElFormItem 类型有问题 -->
  <el-form-item v-if="schema.properties" v-bind="schema.$elFormItem as any" :label="schema.title" :prop="prop">
    <div class="form-item w-full">
      <Index :schema="schema" :form-data="data.formData[prop]" />
    </div>
  </el-form-item>
</template>
