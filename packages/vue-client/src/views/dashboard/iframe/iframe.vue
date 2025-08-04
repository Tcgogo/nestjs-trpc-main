<route lang="yaml">
  meta:
    title: iframe
    icon: ant-design:shop-outlined
  </route>

<script setup lang="ts">
import Layout from '@/layouts/index.vue'

const versionType = ref('basic')
watch(versionType, (val) => {
  if (val === 'pro') {
    location.href = `${location.origin}${location.pathname}`.replace('basic-example', 'pro-example')
  }
})

// 获取当前路由信息
const route = useRoute()

const iframeConfig = computed(() => {
  return route.meta.iframeConfig
})
</script>

<template>
  <Layout>
    <iframe :src="iframeConfig?.path" frameborder="0" class="w-full h-full"></iframe>
  </Layout>
</template>
