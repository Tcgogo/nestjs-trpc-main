<script setup lang="ts">
import type { JsonSchema } from '@tcgogo/types'
import { VxeColumn, VxeTable } from 'vxe-table'
import { client } from '@/trpc'

const operates = {
  index: 'query',
  show: 'query',
  create: 'mutate',
  update: 'mutate',
  delete: 'mutate',
} as const

const route = useRoute()

const schemaConfig = route.meta.schemaConfig

const formData = ref({})

const shops = ref<{ id: number, name: string }[]>([])

function getFetchFn(api: any, type: keyof typeof operates) {
  // @ts-expect-error 类型提示
  if (client?.[api]?.[type]?.[operates[type]]) {
    // @ts-expect-error 类型提示
    return client[api][type][operates[type]]
  }
}

onMounted(async () => {
  if (schemaConfig?.api) {
    if (getFetchFn(schemaConfig.api, 'index')) {
      shops.value = await getFetchFn(schemaConfig.api, 'index')({})
    }
  }
})

async function createShop() {
  // await client.tablesShop.create.mutate({ name: 'test' })
}

const columns = computed(() => {
  if (!schemaConfig?.jsonSchema.properties) {
    return []
  }

  const properties = schemaConfig.jsonSchema.properties

  return Object.keys(properties).map((key) => {
    return {
      field: key,
      ...properties[key],
    } as JsonSchema.ObjectProperty & { field: string }
  })
})

const tableProps = computed(() => {
  const vxeTable = schemaConfig?.jsonSchema?.['ui:VxeTable'] || {}
  const vxeColumns = schemaConfig?.jsonSchema?.['ui:VxeColumn'] || {}

  return {
    VxeTable: {
      // 默认props
      border: true,

      ...vxeTable,
    },
    VxeColumn: {
      ...vxeColumns,
    },
  }
})
</script>

<template>
  <div>
    <h1>Table Panel</h1>
    <button @click="createShop">
      createShop
    </button>
    <div v-if="schemaConfig">
      {{ route.meta }}
    </div>

    <div>{{ columns }}</div>

    <div v-if="schemaConfig">
      <VxeTable v-bind="tableProps.VxeTable" :data="shops">
        <VxeColumn v-bind="tableProps.VxeColumn" type="seq" width="60" />
        <VxeColumn
          v-for="column in columns"
          v-bind="column['ui:VxeColumn'] || tableProps.VxeColumn"
          :key="column.field"
          :field="column.field"
          :title="column.title"
        />
      </VxeTable>
    </div>
  </div>
</template>
