<script setup lang="ts">
import type { CreateSchema, JsonSchema } from '@tcgogo/types'
import { ElInput } from 'element-plus'
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
}

const createOption = computed(() => {
  const defaultOption: CreateSchema.StringCreateOption = {
    field: 'input',
    props: {
      placeholder: '请输入',
    },
  }

  // 合并 schema
  return merge(defaultOption, { ...schema, ...(schema.createOption || {}) })
})
</script>

<template>
  <el-form-item v-if="schema.createOption" :label="schema.title" :prop="prop">
    <div class="form-item">
      <component
        :is="h(booleanFileds[createOption.field], {})"
        v-model="data.formData[prop]"
        v-bind="createOption.props"
      />
    </div>
  </el-form-item>
</template>

<style scoped lang="less"></style>
