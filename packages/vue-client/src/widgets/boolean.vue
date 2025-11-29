<script setup lang="ts">
import type { CreateSchema, JsonSchema } from '@tcgogo/types'
import { ElCheckbox, ElRadio, ElSwitch } from 'element-plus'
import { merge } from 'es-toolkit'
import { h } from 'vue'
import { isEmpty, parseStringToFunction } from '@/utils'

const { schema, formData, prop, root } = defineProps<{
  root: JsonSchema.ObjectProperty
  schema: JsonSchema.BooleanProperty
  formData: any
  prop: string
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

    data.formData[prop] = schema.default
  }
}

watch(() => schema.default, () => {
  handleDefault()
}, {
  immediate: true,
})

const booleanFileds: Record<CreateSchema.BooleanCreateOption['field'], any> = {
  'switch': ElSwitch,
  'checkbox': ElCheckbox,
  'radio': ElRadio,
}

const schemaCreateOption = ref<CreateSchema.BooleanCreateOption>()

function handleCreateOption() {
  const createOption = schema?.createOption as CreateSchema.BooleanCreateOption

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

  const defaultOption: CreateSchema.BooleanCreateOption = {
    field: 'switch',
    props: {
      inlinePrompt: true,
      activeText: '是',
      inactiveText: '否',
    },
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
    <div class="form-item">
      <!-- el-switch -->
      <template v-if="schemaCreateOption.field === 'switch'">
        <component
          :is="booleanFileds[schemaCreateOption.field]" v-model="data.formData[prop]"
          v-bind="schemaCreateOption.props" v-on="schemaCreateOption.on?.(prop, formData, root.properties) || {}"
        />
      </template>

      <!-- el-checkbox -->
      <template v-else-if="schemaCreateOption.field === 'checkbox'">
        <component
          :is="h(booleanFileds[schemaCreateOption.field], {}, () => h('div', { class: 'form-item-title' }, schema.title))"
          v-model="data.formData[prop]" v-bind="schemaCreateOption.props"
          v-on="schemaCreateOption.on?.(prop, formData, root.properties) || {}"
        />
      </template>

      <!-- el-radio -->
      <template v-else-if="schemaCreateOption.field === 'radio'">
        <el-radio-group
          v-model="data.formData[prop]" v-bind="schemaCreateOption.groupProps || {}"
          v-on="schemaCreateOption.on?.(prop, formData, root.properties) || {}"
        >
          <ElRadio :value="true" size="large" v-bind="schemaCreateOption.props">
            {{ schemaCreateOption.props?.activeText || '是' }}
          </ElRadio>
          <ElRadio :value="false" size="large" v-bind="schemaCreateOption.props">
            {{ schemaCreateOption.props?.inactiveText || '否' }}
          </ElRadio>
        </el-radio-group>
      </template>
    </div>
  </el-form-item>
</template>

<style scoped lang="less"></style>
