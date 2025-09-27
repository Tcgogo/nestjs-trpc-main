<script lang="ts" setup>
import type { CreateSchema, JsonSchema } from '@tcgogo/types'
import type { FormRules } from 'element-plus'
import { watchDebounced, watchThrottled } from '@vueuse/core'
import { findProperties, parseStringToFunction } from '@/utils'
import ArrayField from './array.vue'
import BooleanField from './boolean.vue'
import NumberField from './number.vue'
import ObjectField from './object.vue'
import StringField from './string.vue'

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
watchDebounced(() => formData, (newVal, oldVal) => {
  const keys = Object.keys(controlMap) as (keyof typeof controlMap)[]

  keys.forEach((key) => {
    controlMap[key]?.forEach((item) => {
      const result = item.handle(key, newVal.value, rowSchema.value.properties)

      const controlKeys = Object.entries(item.properties)
      controlKeys.forEach(([key, value]) => {
        const properties = findProperties(rowSchema.value.properties, key)
          console.log('%c [ properties ]-58', 'font-size:13px; background:pink; color:#bf2c9f;', result)
        if (properties) {
          properties[value] = result
          console.log('%c [  ]-50', 'font-size:13px; background:pink; color:#bf2c9f;', schema)
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
  debounce: 100,
  maxWait: 300,
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

// TODO: 构建 rules
const rules = reactive<FormRules<any>>({
  description: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
})

/** 获取el-form属性 */
const formProps = computed(() => {
  const defaultProps = {
    rules,
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
</script>

<template>
  <div v-if="initFileds.form" class="vue-form-render">
    {{ formData }}
    <el-form v-bind="formProps">
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
