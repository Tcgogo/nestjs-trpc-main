<route lang="yaml">
name: notFound
meta:
  title: 找不到页面
  constant: true
  layout: false
</route>

<script setup lang="ts">
const router = useRouter()

const settingsStore = useSettingsStore()

const data = ref({
  inter: Number.NaN,
  countdown: 5,
})

onBeforeRouteLeave(() => {
  data.value.inter && window.clearInterval(data.value.inter)
})

onMounted(() => {
  data.value.inter = window.setInterval(() => {
    data.value.countdown--
    if (data.value.countdown === 0) {
      data.value.inter && window.clearInterval(data.value.inter)
      goBack()
    }
  }, 1000)
})

function goBack() {
  router.push(settingsStore.settings.home.fullPath)
}
</script>

<template>
  <div class="absolute flex flex-col items-center left-[50%] top-[50%] justify-between lg-flex-row -translate-x-50% -translate-y-50% lg-gap-12">
    <FaIcon name="404" class="text-[300px] lg-text-[400px]" />
    <div class="flex flex-col gap-4">
      <h1 class="m-0 text-6xl font-sans">
        404
      </h1>
      <div class="mx-0 text-xl text-secondary-foreground/50">
        抱歉，你访问的页面不存在
      </div>
      <div>
        <FaButton @click="goBack">
          {{ data.countdown }} 秒后，返回首页
        </FaButton>
      </div>
    </div>
  </div>
</template>
