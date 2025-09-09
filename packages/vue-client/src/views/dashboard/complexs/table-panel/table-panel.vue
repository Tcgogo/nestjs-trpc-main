<script setup lang="ts">
import type { JsonSchema } from '@tcgogo/types'
import { VxeColumn, VxeTable } from 'vxe-table'
import { client } from '@/trpc'
import { booleanDefaultVxeColumn, formRenderDefaultVxeColumn, isArrayProperty, isBooleanProperty } from '@/utils'
import { merge } from '@/utils/object'
import { h } from 'vue'
import { ElSwitch } from 'element-plus'

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
    const property = properties[key]

    if (isBooleanProperty(property)) {
      property['ui:VxeColumn'] = property['ui:VxeColumn'] || {};
      property['ui:VxeColumn'] = merge(booleanDefaultVxeColumn, property['ui:VxeColumn'])
    }

    // if (isArrayProperty(property)) {
    //   property['ui:VxeColumn'] = property['ui:VxeColumn'] || {};
    //   property['ui:VxeColumn'] = merge(arrayDefaultVxeColumn, property['ui:VxeColumn'])
    // }


    return {
      field: key,
      ...properties[key],
    } as JsonSchema.ObjectProperty & { field: string }
  })
})

function getComponentSlotAttrs(column: JsonSchema.ObjectProperty & { field: string }): [any, any, any] {
  const attr = column['ui:VxeColumn'];
  if (!attr?.cellRender?.name) return [] as any;

  return [
    attr.cellRender.name,
    column.field,
    attr.cellRender.props,
  ] as const
}

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
    <!-- <h1>Table Panel</h1>
    <button @click="createShop">
      createShop
    </button> -->
    <div v-if="schemaConfig">
      {{ route.meta }}
    </div>
<!--
    <div>{{ columns }}</div> -->

    <div v-if="schemaConfig">
      <VxeTable v-bind="tableProps.VxeTable" :data="shops">
        <VxeColumn v-bind="tableProps.VxeColumn" type="seq" width="60" />
        <VxeColumn>
          <template #default></template>
        </VxeColumn>
        <component v-for="column in columns" :is="h(VxeColumn,
          {
            key: column.field,
            field: column.field,
            title: column.title,
            ...column['ui:VxeColumn'],
          },
          {
            default: getComponentSlotAttrs(column)?.length ? formRenderDefaultVxeColumn(...getComponentSlotAttrs(column)) : null
          }
        )"></component>
        <!-- <VxeColumn  v-bind="column['ui:VxeColumn'] :field="column.field" :title="column.title" /> -->

      </VxeTable>
    </div>
  </div>
</template>
