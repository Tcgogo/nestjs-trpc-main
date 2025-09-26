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

const formProps = computed(() => {
  const defaultProps = {
    rules,
    model: formData,
    labelWidth: 'auto',
    inline: true
  }

  return {
    ...(schema['ui:ElForm'] || {}),
    ...defaultProps,
  }
})

const rowProps = computed(() => {
  const defaultProps = {
    gutter: 24
  }

  return {
    ...defaultProps,
    ...(schema['ui:ElRow'] || {}),
  }
})

const getColProps = (item: JsonSchema.LinkProperty) => {
  const defaultProps = {
    span: 12,
    ...(schema['ui:ElCol'] || {}),
  }

  return {
    ...defaultProps,
    ...(item['ui:ElCol'] || {}),
  }
}
</script>

<template>
  <div class="vue-form-render">
    <!-- {{ formData }} -->
    <el-form v-bind="formProps">
      <el-row v-bind="rowProps">
        <el-col v-for="item in properties" :key="item.key" v-bind="getColProps(item.value)">
          <component :is="Field[item.value.type]" :prop="item.key" :form-data="formData" :schema="item.value" />
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
