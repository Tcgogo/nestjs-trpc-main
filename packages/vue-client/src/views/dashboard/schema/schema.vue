<route lang="yaml">
  meta:
    title: schema
    icon: ant-design:table-outlined
  </route>

<script setup lang="ts">
import formRender from 'vue-form-render/index.vue'
import Layout from '@/layouts/index.vue'
import Boolean from '@/widgets/boolean.vue'
import SearchPanel from '../complexs/search-panel/search-panel.vue'
import TablePanel from '../complexs/table-panel/table-panel.vue'

const versionType = ref('basic')

const state = reactive({
  schema: {
    type: 'object',
    properties: {
      boolean: {
        'title': '布尔值',
        'type': 'boolean',
        'ui:widget': 'switch',
      },
      string: {
        'title': '字符串',
        'type': 'string',
        'maxLength': 4,
        'ui:options': {
          placeholder: '试着输入超过4个字符',
        },
      },
      select: {
        title: '单选',
        type: 'string',
        enum: ['a', 'b', 'c'],
        enumNames: ['选项1', '选项2', '选项3'],
      },
      object: {
        type: 'object',
        title: 'object',
        properties: {
          string2: {
            title: '字符串',
            type: 'string',
          },
        },
        required: [
          'string2',
        ],
      },
    },
    required: [
      'string',
    ],
  },
  formData: {
  },
})

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

          <SearchPanel />
          <TablePanel />
        </FaPageMain>
      </div>
    </div>
  </Layout>
</template>
