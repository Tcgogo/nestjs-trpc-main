<script setup lang="ts">
import imgLogo from '@/assets/images/logo.svg'

defineOptions({
  name: 'Logo',
})

withDefaults(
  defineProps<{
    showLogo?: boolean
    showTitle?: boolean
  }>(),
  {
    showLogo: true,
    showTitle: true,
  },
)

const settingsStore = useSettingsStore()

const title = ref(import.meta.env.VITE_APP_TITLE)
const logo = ref(imgLogo)

const to = computed(() => settingsStore.settings.home.enable ? settingsStore.settings.home.fullPath : '')
</script>

<template>
  <RouterLink :to class="flex-center gap-2 px-3 h-[var(--g-sidebar-logo-height)] w-inherit text-inherit no-underline" :class="{ 'cursor-default': !settingsStore.settings.home.enable }" :title="title">
    <img v-if="showLogo" :src="logo" class="logo h-[30px] w-[30px] object-contain">
    <span v-if="showTitle" class="truncate font-bold block">{{ title }}</span>
  </RouterLink>
</template>
