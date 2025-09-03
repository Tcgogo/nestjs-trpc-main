<script lang="ts" setup>
import { reactive, toRefs, watch } from 'vue'
import { clone, getValidateList, resolve } from './utils'
import { mapping, widgets } from './widgets'

const props = defineProps({
  schema: {
    type: Object,
    required: true,
  },
  formData: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['onChange', 'onValidate', 'onCalidate'])

const { schema } = toRefs(props)

let data = resolve(props.schema, props.formData)
emit('onChange', data)

watch(props.formData, () => {
  data = resolve(props.schema, props.formData)
  emit('onCalidate', getValidateList(data, props.schema))
})

watch(schema, () => {
  data = resolve(props.schema, props.formData)
  emit('onChange', data)
})

function handleChange(key: any, val: any) {
  emit('onChange', clone(val))
}

// @ts-expect-error 忽略类型错误
const Field = widgets[mapping[`${props.schema.type}${props.schema.format ? `:${props.schema.format}` : ''}`]]
</script>

<template>
  <div class="vue-form-render">
    <component
      :is="Field"
      :schema="schema"
      :form-data="props.formData"
      :value="data"
      name="$form"
      @on-change="handleChange"
    />
  </div>
</template>
