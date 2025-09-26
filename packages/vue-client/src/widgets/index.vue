<script lang="ts" setup>
import type { JsonSchema } from '@tcgogo/types'
import type { FormRules } from 'element-plus'
import BooleanField from './boolean.vue'
import ObjectField from './object.vue'
import StringField from './string.vue'
import ArrayField from './array.vue'
import NumberField from './number.vue'

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
  string: StringField,
  number: NumberField,
  object: ObjectField,
  array: ArrayField,
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

// TODO: 构建 rules
const rules = reactive<FormRules<any>>({
  description: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
})
</script>

<template>
  <div class="vue-form-render">
    {{ formData }}
    <el-form :rules="rules" :model="formData" label-width="auto">
      <component
        :is="Field[item.value.type]"
        v-for="item in properties"
        :key="item.key"
        :prop="item.key"
        :form-data="formData"
        :schema="item.value"
      />
    </el-form>
  </div>
</template>
