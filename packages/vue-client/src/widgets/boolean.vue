<script setup lang="ts">
import type { CreateSchema, JsonSchema } from '@tcgogo/types'
import { ElCheckbox, ElRadio, ElSwitch } from 'element-plus'
import { merge } from 'es-toolkit'
import { h } from 'vue'

const { schema } = defineProps<{
  schema: JsonSchema.BooleanProperty
}>()

const booleanFileds: Record<CreateSchema.BooleanCreateOption['field'], any> = {
  'el-switch': ElSwitch,
  'el-checkbox': ElCheckbox,
  'el-radio': ElRadio,
}

const createOption = computed(() => {
  const defaultOption: CreateSchema.BooleanCreateOption = {
    field: 'el-switch',
    props: {
      inlinePrompt: true,
      activeText: '是',
      inactiveText: '否',
    },
  }

  // 合并 schema
  return merge(defaultOption, { ...schema, ...(schema.createOption || {}) })
})

const value = ref(false)
</script>

<template>
  <div v-if="schema.createOption" class="form-item flex items-center gap-2">
    <div class="form-item">
      <div v-if="createOption.field === 'el-switch'" class="form-item_content flex items-center gap-5">
        <div class="form-item-title">
          {{ schema.title }}
        </div>
        <component
          :is="booleanFileds[createOption.field]"
          v-model="value"
          v-bind="createOption.props"
        />
      </div>

      <div v-else-if="createOption.field === 'el-radio'" class="form-item_content flex items-center gap-5">
        <div class="form-item-title">
          {{ schema.title }}
        </div>
        <el-radio-group v-model="value" v-bind="createOption.groupProps || {}">
          <ElRadio :value="true" size="large" v-bind="createOption.props">
            {{ createOption.props?.activeText || '是' }}
          </ElRadio>
          <ElRadio :value="false" size="large" v-bind="createOption.props">
            {{ createOption.props?.inactiveText || '否' }}
          </ElRadio>
        </el-radio-group>
      </div>

      <div v-else class="form-item_content">
        <component
          :is="h(booleanFileds[createOption.field], {}, () => h('div', { class: 'form-item-title' }, schema.title))"
          v-model="value"
          v-bind="createOption.props"
        />
      </div>
    </div>

    <!-- <component
      :is="booleanFileds[createOption.field]"
      v-model="value"
      v-bind="createOption.props"
    />

    <div class="form-item-title">
      {{ schema.title }}
    </div> -->
  </div>
</template>

<style scoped lang="less"></style>
