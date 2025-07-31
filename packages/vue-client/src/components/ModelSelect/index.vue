<script setup lang="ts">
const modelStore = useModelStore()
const routeStore = useRouteStore()

const options = computed(() => {
  return modelStore.modelList.map(item => ({
    label: item.title,
    value: item.model,
  }))
})

async function handleChange(value?: string) {
  console.log('%c [ value ]-12', 'font-size:13px; background:pink; color:#bf2c9f;', value)
  if (value) {
    await modelStore.apiGetModelData(value)
    routeStore.generateRoutesAtBack()
  }
}
</script>

<template>
  <FaSelect v-model="modelStore.currentModel" :options="options" @update:model-value="handleChange" />
</template>
