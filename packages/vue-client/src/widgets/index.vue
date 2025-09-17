<script lang="ts" setup>
import type { JsonSchema } from '@tcgogo/types'
import BooleanField from './boolean.vue'

const { schema, formData } = defineProps({
  schema: {
    type: Object as PropType<JsonSchema.ObjectProperty>,
    required: true,
  },
  formData: {
    type: Object,
    required: true,
  },
})

const Field: Record<JsonSchema.LinkProperty['type'], any> = {
  boolean: BooleanField,
  string: null,
  number: null,
  object: null,
  array: null,
  null: null,
}

const properties = computed(() => {
  if (!schema.properties) { return [] }

  return Object.keys(schema.properties).map((key) => {
    return {
      key,
      value: schema.properties![key],
    }
  })
})
</script>

<template>
  <div class="vue-form-render">
    <component
      :is="Field[item.value.type]"
      v-for="item in properties"
      :key="item.key"
      :schema="item.value"
      :form-data="formData"
    />
  </div>
</template>
