<script setup lang="ts">
import type { JsonSchema } from '@tcgogo/types'
import Index from './index.vue'

const { schema, formData, prop } = defineProps<{
  schema: JsonSchema.ObjectProperty
  prop: string
  formData: any
}>()

const data = reactive({
  formData,
})

/** 初始化 */
data.formData[prop] = {}
</script>

<template>
  <el-form-item v-if="schema.properties" :label="schema.title" :prop="prop">
    <div class="form-item w-full">
      <Index :schema="schema" :form-data="data.formData[prop]" />
    </div>
  </el-form-item>
</template>
