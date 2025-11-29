<script setup lang="ts">
import type { JsonSchema } from '@tcgogo/types'
import type FaModal from '@/ui/components/FaModal/index.vue'
import { h } from 'vue'
import { VxeColumn, VxeTable } from 'vxe-table'
import { client } from '@/trpc'
import FaButton from '@/ui/components/FaButton/index.vue'
import { useFaModal } from '@/ui/components/FaModal'
import { getVxeTableColumnDefault } from '@/utils/schema/valueType'
import Widgets from '@/widgets/index.vue'

const operates = {
  index: 'query',
  show: 'query',
  create: 'mutate',
  update: 'mutate',
  delete: 'mutate',
} as const

const route = useRoute()

const schemaConfig = route.meta.schemaConfig

const shops = ref<{ id: number, name: string }[]>([])

/** 获取接口函数 */
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

const formRef = ref<InstanceType<typeof Widgets>>()

function widgetsComponent() {
  return h(Widgets, {
    schema: schemaConfig!.jsonSchema,
    ref: ref => formRef.value = ref as InstanceType<typeof Widgets>,
  })
}

const modalRef = ref<InstanceType<typeof FaModal>>()

const { open: openModal, update: updateModal } = useFaModal().create({
  destroyOnClose: true,
  closeOnClickOverlay: false,
  closeOnPressEscape: false,
  beforeClose: (action, done) => {
    if (action === 'confirm') {
      onFormSubmit()
    }
    done()
  },
  class: 'max-w-[60vw]',
  showCancelButton: true,
  title: `${schemaConfig!.jsonSchema?.title} - 新增数据`,
  description: schemaConfig!.jsonSchema?.description,
  content: widgetsComponent,
  footerSlot: () => h('div', { class: 'flex gap-3' }, [
    h(FaButton, {
      variant: 'outline',
      onClick: () => {
        modalRef.value?.onCancel()
      },
    }, '取消'),
    h(FaButton, {
      variant: 'outline',
      onClick: () => {
        formRef.value?.resetForm()
      },
    }, '重置'),
    h(FaButton, {
      loading: modalRef.value?.isConfirmButtonLoading,
      onClick: async () => {
        await formRef.value?.validateForm()
        modalRef.value?.onConfirm()
      },
    }, '确定'),
  ]),
  getModalRef: ref => modalRef.value = ref,
})
async function createShop() {
  // await client.tablesShop.create.mutate({ name: 'test' })
  openModal()
}

function onFormSubmit() {
  console.log('%c [formRef.value?.formData]-99', 'font-size:13px; background:#336699; color:#fff;', formRef.value?.formData)
}

/** 表格列 */
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

/** 默认配置 */
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
      width: 'auto',
      ...vxeHandleColumn,
    },
  }
})
</script>

<template>
  <div class="w-full">
    <div v-if="schemaConfig">
      {{ schemaConfig }}
    </div>

    <div class="flex justify-end pb-3">
      <ElButton type="primary" size="default" @click="createShop">
        <template #icon>
          <FaIcon name="i-ep:plus" />
        </template>
        新增
      </ElButton>
    </div>

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
                编辑{{ scope.row.id }}
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
