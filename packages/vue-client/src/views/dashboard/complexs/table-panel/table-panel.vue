<script setup lang="ts">
import type { JsonSchema } from '@tcgogo/types'
import { ElSwitch } from 'element-plus'
import { h } from 'vue'
import { VxeColumn, VxeTable } from 'vxe-table'
import { client } from '@/trpc'
import { isArrayProperty, isBooleanProperty } from '@/utils'
import { merge } from '@/utils/object'
import { getVxeTableColumnDefault } from '@/utils/schema/valueType'

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

  console.warn('api 命名规范不正确，请检查', api, type, operates[type])
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
      ...properties[key],
      field: key,
    } as JsonSchema.LinkProperty
  })
})

const tableProps = computed(() => {
  const vxeTable = schemaConfig?.jsonSchema?.['ui:VxeTable'] || {}
  const vxeColumns = schemaConfig?.jsonSchema?.['ui:VxeColumn'] || {}
  const vxeHandleColumn = schemaConfig?.jsonSchema?.['ui:HandleColumn'] || {}

  return {
    VxeTable: {
      // 默认props
      border: true,

      ...vxeTable,
    },
    VxeColumn: {
      ...vxeColumns,
    },
    VxeHandleColumn: {
      title: '操作',
      minWidth: 140,
      align: 'center' as const,
      fixed: 'right' as const,
      ...vxeHandleColumn,
    },
  }
})
</script>

<template>
  <div class="w-full">
    <!-- <h1>Table Panel</h1>
    <button @click="createShop">
      createShop
    </button> -->
    <div v-if="schemaConfig">
      {{ route.meta }}
    </div>
    <!--
    <div>{{ columns }}</div> -->

    <div v-if="schemaConfig" class="w-full flex">
      <VxeTable v-bind="tableProps.VxeTable" :data="shops" class="w-full">
        <VxeColumn v-bind="tableProps.VxeColumn" type="seq" width="60" />
        <component
          :is="h(VxeColumn,
                 {
                   key: column.field,
                   field: column.field,
                   title: column.title,
                   width: 140,
                   ...column['ui:VxeColumn'],
                 },
                 {
                   default: getVxeTableColumnDefault(column),
                 },
          )" v-for="column in columns" :key="column.field"
        />
        <VxeColumn v-bind="tableProps.VxeHandleColumn">
          <template #default="scope">
            <div class="flex justify-center px-3">
              <ElButton type="warning" size="small" plain>
                编辑
              </ElButton>
              <ElButton type="danger" size="small" plain>
                删除
              </ElButton>
            </div>
          </template>
        </VxeColumn>
        <!-- <VxeColumn  v-bind="column['ui:VxeColumn'] :field="column.field" :title="column.title" /> -->
      </VxeTable>
    </div>
  </div>
</template>
