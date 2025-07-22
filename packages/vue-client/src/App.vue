<script setup lang="ts">
import { useMutation, useQuery, useQueryCache } from '@pinia/colada'
import { ua } from '@/utils/ua'
import { client } from './trpc'
import Provider from './ui/provider/index.vue'

const route = useRoute()

const settingsStore = useSettingsStore()
const { auth } = useAuth()

document.body.setAttribute('data-os', ua.getOS().name || '')

const isAuth = computed(() => {
  return route.matched.every((item) => {
    return auth(item.meta.auth ?? '')
  })
})

// 设置网页 title
watch([
  () => settingsStore.settings.app.enableDynamicTitle,
  () => settingsStore.title,
], () => {
  if (settingsStore.settings.app.enableDynamicTitle && settingsStore.title) {
    const title = typeof settingsStore.title === 'function' ? settingsStore.title() : settingsStore.title
    document.title = `${title} - ${import.meta.env.VITE_APP_TITLE}`
  }
  else {
    document.title = import.meta.env.VITE_APP_TITLE
  }
}, {
  immediate: true,
  deep: true,
})

onMounted(async () => {
  const data = await client.healthRouter.getUser.query({
    name: 'John',
    age2: 20,
    breed: 'Labrador',
  })

  // const query = await useQuery({
  //   key: ['menu'],
  //   query: () => client.modelServiceRouter.getModelConfig.query({
  //     modelKey: 'buiness',
  //   }),
  // })

  const mutation = await useMutation({
    key: ['men2u2'],
    mutation: (key: string) => client.modelServiceRouter.getModelConfig.query({
      modelKey: key,
    }),
  })
  mutation.mutate('course')

  // console.log('%c [ query.isPendi1ng ]-51', 'font-size:13px; background:pink; color:#bf2c9f;', query.isPending.value)

  // console.log('%c [ query.data.value ]-57', 'font-size:13px; background:pink; color:#bf2c9f;', query.data.value)

  console.log('%c [ mutation.isPending ]-63', 'font-size:13px; background:pink; color:#bf2c9f;', mutation.data.value)
  console.log(data)

  settingsStore.setMode(document.documentElement.clientWidth)
  window.addEventListener('resize', () => {
    settingsStore.setMode(document.documentElement.clientWidth)
  })
})
</script>

<template>
  <Provider>
    <RouterView v-slot="{ Component }">
      <component :is="Component" v-if="isAuth" />
      <FaNotAllowed v-else />
    </RouterView>
    <FaBackToTop />
    <FaToast />
    <FaNotification />
    <FaSystemInfo />
  </Provider>
</template>
