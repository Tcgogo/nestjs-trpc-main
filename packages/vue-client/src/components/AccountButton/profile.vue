<script setup lang="ts">
import EditPasswordForm from '@/components/AccountForm/EditPasswordForm.vue'

const active = ref(0)
const tabs = ref([
  {
    title: '基本设置',
    description: '账号的基本信息，头像、昵称等',
  },
  {
    title: '安全设置',
    description: '定期修改密码可以提高帐号安全性',
  },
])
</script>

<template>
  <div class="min-h-full w-full">
    <div class="fixed right-0 top-0 z-1 flex flex-row overflow-auto border-b border-e bg-background md:inset-s-0 md:bottom-0 md:h-full md:w-40 md:flex-col">
      <div v-for="(tab, index) in tabs" :key="index" class="space-y-2 flex-shrink-0 cursor-pointer px-4 py-3 transition-background-color hover-bg-accent/50" :class="{ 'bg-accent hover-bg-accent!': active === index }" @click="active = index">
        <div class="text-base text-accent-foreground leading-tight">
          {{ tab.title }}
        </div>
        <div class="text-xs text-accent-foreground/50">
          {{ tab.description }}
        </div>
      </div>
    </div>
    <div class="min-h-full flex-col-center p-10 pt-20 md:ms-40 md:pt-10">
      <div v-if="active === 0">
        请开发者自行扩展
      </div>
      <EditPasswordForm v-if="active === 1" />
    </div>
  </div>
</template>
