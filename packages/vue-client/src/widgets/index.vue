<script lang="ts" setup>
import type { CreateSchema, JsonSchema } from '@tcgogo/types'
import { findProperties, parseStringToFunction } from '@/utils'
import ArrayField from './array.vue'
import BooleanField from './boolean.vue'
import NumberField from './number.vue'
import ObjectField from './object.vue'
import StringField from './string.vue'
import type { FormInstance } from 'element-plus'

const { schema } = defineProps({
  schema: {
    type: Object as PropType<JsonSchema.ObjectProperty>,
    required: true,
  },
})

const formData = ref({})

/** 初始化情况 */
const initFileds = ref({
  form: false,
  control: false,
})

const controlMap: Record<string, CreateSchema.BaseCreateOption['control']> = {}

// 创建一个ref
const rowSchema = ref(schema)

onBeforeMount(() => {
  // 搜集所有 control
  Object.keys(rowSchema.value.properties || {}).forEach((key) => {
    // @ts-expect-error 类型错误
    const item = rowSchema.value.properties![key].createOption as CreateSchema.BaseCreateOption
    if (item?.control) {
      controlMap[key] = item.control.map(i => ({
        ...i,
        handle: parseStringToFunction(i.handle),
      }))
    }
  })

  initFileds.value.control = true
})

/**
 * 监听formData变化
 * 处理 control
 */
watch(() => formData, (newVal, oldVal) => {
  const keys = Object.keys(controlMap) as (keyof typeof controlMap)[]

  keys.forEach((key) => {
    controlMap[key]?.forEach((item) => {
      const result = item.handle(key, newVal.value, rowSchema.value.properties)

      const controlKeys = Object.entries(item.properties)
      controlKeys.forEach(([key, value]) => {
        const properties = findProperties(rowSchema.value.properties, key)
        if (properties) {
          properties[value] = result
        }
      })
    })
  })

  if (initFileds.value.control && Object.keys(controlMap).length) {
    initFileds.value.form = true
  }
}, {
  deep: true,
  immediate: true,
  flush: 'post'
})

/** 组件 */
const Field: Record<JsonSchema.LinkProperty['type'], any> = {
  boolean: BooleanField,
  string: StringField,
  number: NumberField,
  object: ObjectField,
  array: ArrayField,
  null: null,
}

/** 获取字段属性 */
const properties = computed(() => {
  if (!rowSchema.value.properties) { return [] }

  return Object.keys(rowSchema.value.properties).map((key) => {
    return {
      key,
      value: rowSchema.value.properties![key],
    }
  })
})

/** 获取el-form属性 */
const formProps = computed(() => {
  const defaultProps = {
    model: formData,
    labelWidth: 'auto',
    inline: true,
  }

  return {
    ...(schema['ui:ElForm'] || {}),
    ...defaultProps,
  }
})

/** 获取el-row属性 */
const rowProps = computed(() => {
  const defaultProps = {
    gutter: 24,
  }

  return {
    ...defaultProps,
    ...(schema['ui:ElRow'] || {}),
  }
})

/** 获取el-col属性 */
function getColProps(item: JsonSchema.LinkProperty) {
  const defaultProps = {
    span: 12,
    ...(schema['ui:ElCol'] || {}),
  }

  return {
    ...defaultProps,
    ...(item['ui:ElCol'] || {}),
  }
}

const formElRef = useTemplateRef<FormInstance>('formElRef')

const resetForm = () => {
  if (!formElRef.value) return

  formElRef.value.resetFields()
}

const validateForm = () => {
  if (!formElRef.value) return
  return formElRef.value.validate()
}

defineExpose({
  resetForm,
  validateForm,
  formData
})
</script>

<template>
  <div class="vue-form-render">
    {{ formData }}
    <el-form v-bind="formProps" ref="formElRef">
      <el-row v-bind="rowProps">
        <template v-for="item in properties" :key="item.key">
          <el-col v-show="!item.value.hidden" v-bind="getColProps(item.value)">
            <component @change="() => null" :root="rowSchema" :is="Field[item.value.type]" :prop="item.key" :form-data="formData" :schema="item.value" />
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>
