<route lang="yaml">
  meta:
    title: schema
    icon: ant-design:table-outlined
  </route>

<script setup lang="ts">
import Layout from '@/layouts/index.vue'
import { createForm } from './core'

const globalOptions = {
    WIDGET_MAP,
    COMPONENT_MAP: {
        form: defineComponent({
            inheritAttrs: false,
            setup(props, { attrs, slots }) {
                const formRef = ref(null);
                if (attrs.setFormRef) {
                    onMounted(() => {
                        attrs.setFormRef(formRef.value);
                    });
                }

                return () => {
                    // eslint-disable-next-line no-unused-vars
                    const { setFormRef, ...otherAttrs } = attrs;

                    return h(vueUtils.resolveComponent('el-form'), {
                        ref: formRef,
                        ...otherAttrs
                    }, slots);
                };
            }
        }),
        formItem: 'el-form-item',
        button: 'el-button',
        popover: 'el-popover'
    },
    HELPERS: {
        // 是否mini显示 description
        isMiniDes(formProps) {
            return formProps && ['left', 'right'].includes(formProps.labelPosition);
        }
    }
};


createForm({})

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
