<script setup lang="ts">
import { parseStringToFunction } from '@/utils';
import type { CreateSchema, JsonSchema } from '@tcgogo/types'
import { ElCheckbox, ElRadio, ElSwitch } from 'element-plus'
import { merge } from 'es-toolkit'
import { h } from 'vue'

const { schema, formData, prop } = defineProps<{
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
    data.formData[prop] = schema.default
  }
}

onBeforeMount(() => {
  handleDefault()
})

const booleanFileds: Record<CreateSchema.BooleanCreateOption['field'], any> = {
  'switch': ElSwitch,
  'checkbox': ElCheckbox,
  'radio': ElRadio,
}

const createOption = computed(() => {
  const createOption = schema?.createOption as CreateSchema.BooleanCreateOption

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
  return merge(defaultOption, { ...schema, ...(createOption || {}) })
})
</script>

<template>
  <el-form-item v-if="schema.createOption" :label="schema.title" :prop="prop">
    <div class="form-item">
      <!-- el-switch -->
      <template v-if="createOption.field === 'switch'">
        <component
          :is="booleanFileds[createOption.field]"
          v-model="data.formData[prop]"
          v-bind="createOption.props"
        />
      </template>

      <!-- el-checkbox -->
      <template v-else-if="createOption.field === 'checkbox'">
        <component
          :is="h(booleanFileds[createOption.field], {}, () => h('div', { class: 'form-item-title' }, schema.title))"
          v-model="data.formData[prop]"
          v-bind="createOption.props"
        />
      </template>

      <!-- el-radio -->
      <template v-else-if="createOption.field === 'radio'">
        <el-radio-group v-model="data.formData[prop]" v-bind="createOption.groupProps || {}">
          <ElRadio :value="true" size="large" v-bind="createOption.props">
            {{ createOption.props?.activeText || '是' }}
          </ElRadio>
          <ElRadio :value="false" size="large" v-bind="createOption.props">
            {{ createOption.props?.inactiveText || '否' }}
          </ElRadio>
        </el-radio-group>
      </template>
    </div>
  </el-form-item>

</template>

<style scoped lang="less"></style>
