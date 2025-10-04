<route lang="yaml">
  meta:
    title: schema
    icon: ant-design:table-outlined
  </route>

<script setup lang="ts">
import Layout from '@/layouts/index.vue'
import Boolean from '@/widgets/boolean.vue'
import SearchPanel from '../complexs/search-panel/search-panel.vue'
import TablePanel from '../complexs/table-panel/table-panel.vue'

const route = useRoute()

const schemaConfig = route.meta.schemaConfig

onBeforeMount(() => {
  if (!route.name || !route.path) {
    console.warn('name or path is not set')
  }
})
</script>

<template>
  <Layout>
    <div>
      <FaPageHeader>
        <template #title>
          {{ schemaConfig!.jsonSchema?.title }}
        </template>
        <template #description>
          {{ schemaConfig!.jsonSchema?.description }}
        </template>
      </FaPageHeader>
      <div class="flex gap-4 flex-col w-full px-4 xl-flex-row">
        <FaPageMain class="m-0 flex-1" title-class="flex flex-wrap items-center justify-between gap-4 w-full">
          <!-- <template #title>
            main-title
          </template> -->

          <SearchPanel />

          <TablePanel :key="route.name || route.path" />
        </FaPageMain>
      </div>
    </div>
  </Layout>
</template>
