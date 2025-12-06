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

const createFormRef = ref<InstanceType<typeof Widgets>>()
const editFormRef = ref<InstanceType<typeof Widgets>>()


// 当前编辑的行数据
const rowData = ref<any>()

function widgetsComponent() {
  return h(Widgets, {
    rowData: rowData.value,
    schema: schemaConfig!.jsonSchema,
    ref: r => {
      const ref = r as InstanceType<typeof Widgets>
      createFormRef.value = ref
      editFormRef.value = ref
    }
  })
}

const createModalRef = ref<InstanceType<typeof FaModal>>()
const editModalRef = ref<InstanceType<typeof FaModal>>()

const { open: openCreateModal, update: updateCreateModal } = useFaModal().create({
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
        createModalRef.value?.onCancel()
      },
    }, '取消'),
    h(FaButton, {
      variant: 'outline',
      onClick: () => {
        createFormRef.value?.resetForm()
      },
    }, '重置'),
    h(FaButton, {
      loading: createModalRef.value?.isConfirmButtonLoading,
      onClick: async () => {
        await createFormRef.value?.validateForm()
        createModalRef.value?.onConfirm()
      },
    }, '确定'),
  ]),
  getModalRef: ref => createModalRef.value = ref,
})


const { open: openEditModal, update: updateEditModal } = useFaModal().create({
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
  title: `${schemaConfig!.jsonSchema?.title} - 编辑数据`,
  description: schemaConfig!.jsonSchema?.description,
  content: widgetsComponent,
  footerSlot: () => h('div', { class: 'flex gap-3' }, [
    h(FaButton, {
      variant: 'outline',
      onClick: () => {
        editModalRef.value?.onCancel()
      },
    }, '取消'),
    h(FaButton, {
      variant: 'outline',
      onClick: () => {
        editFormRef.value?.resetForm()
      },
    }, '重置'),
    h(FaButton, {
      loading: editModalRef.value?.isConfirmButtonLoading,
      onClick: async () => {
        await editFormRef.value?.validateForm()
        editModalRef.value?.onConfirm()
      },
    }, '确定'),
  ]),
  getModalRef: ref => editModalRef.value = ref,
})


async function createButtonClick() {
  rowData.value = undefined
  // await client.tablesShop.create.mutate({ name: 'test' })
  openCreateModal()
}

async function editButtonClick(row: any) {
  rowData.value = row
  openEditModal()
}

function onFormSubmit() {

  console.log('%c []-162', 'font-size:13px; background:#336699; color:#fff;', createFormRef.value?.formData);
  // createFormRef.value?.formData;
  // client.tablesShop.create.mutate(createFormRef.value!.formData as any)
  getFetchFn(schemaConfig!.api, 'create')(createFormRef.value?.formData)
  console.log('%c []-161', 'font-size:13px; background:#336699; color:#fff;', 123);
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
      <ElButton type="primary" size="default" @click="createButtonClick">
        <template #icon>
          <FaIcon name="i-ep:plus" />
        </template>
        新增
      </ElButton>
    </div>

    <div v-if="schemaConfig" class="w-full flex">
      <VxeTable v-bind="tableProps.VxeTable" :data="shops" class="w-full">
        <VxeColumn v-bind="tableProps.VxeColumn" type="seq" width="60" />
        <component :is="h(VxeColumn,
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
        )" v-for="column in columns" :key="column.field" />
        <VxeColumn v-bind="tableProps.VxeHandleColumn">
          <template #default="scope">
            <div class="flex justify-center px-3">
              <ElButton @click="editButtonClick(scope.row)" type="warning" size="small" plain>
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
