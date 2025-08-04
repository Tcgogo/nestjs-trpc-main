<route lang="yaml">
  meta:
    title: schema
    icon: ant-design:table-outlined
  </route>

<script setup lang="ts">
import Layout from '@/layouts/index.vue'

const versionType = ref('basic')
watch(versionType, (val) => {
  if (val === 'pro') {
    location.href = `${location.origin}${location.pathname}`.replace('basic-example', 'pro-example')
  }
})
</script>

<template>
  <Layout>
    <div>
      <FaPageHeader>
        <template #title>
          Schema
        </template>
        <template #description>
          Schema
        </template>
        Schema-main
      </FaPageHeader>
      <div class="flex gap-4 flex-col w-full px-4 xl-flex-row">
        <FaPageMain class="m-0 flex-1" title-class="flex flex-wrap items-center justify-between gap-4">
          <template #title>
            main-title
          </template>

          main-content
        </FaPageMain>
      </div>
    </div>
  </Layout>
</template>
