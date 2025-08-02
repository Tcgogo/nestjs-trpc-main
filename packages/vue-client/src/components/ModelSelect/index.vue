<script setup lang="ts">
const modelStore = useModelStore()
const routeStore = useRouteStore()

const options = computed(() => {
  return modelStore.modelList.map(item => ({
    label: item.title,
    value: item.model,
  }))
})

watch(() => modelStore.currentModel, () => {
  routeStore.generateRoutesAtBack()
}, {
  deep: true,
})

async function handleChange(value?: string) {
  if (value) {
    // modelStore.apiGetModelData()
  }
}
</script>

<template>
  <FaSelect v-model="modelStore.currentModel" :options="options" @update:model-value="handleChange" />
</template>
