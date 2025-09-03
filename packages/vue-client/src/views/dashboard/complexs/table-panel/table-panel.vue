<script setup lang="ts">
import { client } from '@/trpc'

const route = useRoute()

const schemaConfig = route.meta.schemaConfig

const formData = ref({})

const shops = ref<{ id: number, name: string }[]>([])
onMounted(async () => {
  shops.value = await client.tablesShop.index.query({})
  console.log('%c [ shops ]-12', 'font-size:13px; background:pink; color:#bf2c9f;', shops)
})

async function createShop() {
  await client.tablesShop.create.mutate({ name: 'test' })
}
</script>

<template>
  <div>
    <h1>Table Panel</h1>
    <button @click="createShop">
      createShop
    </button>
    <div v-if="schemaConfig">
      {{ schemaConfig }}
    </div>

    <div>
      {{ shops }}
    </div>
  </div>
</template>
