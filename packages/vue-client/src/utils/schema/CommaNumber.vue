<script setup lang="ts">
import { isEmpty } from '../helper';

const { value } = defineProps<{
  value: number | string
}>()

const REG_COMMA_NUMBER = /(?<!\d*\.\d*)(?=(\B\d{3})+(\.\d+)?$)/g

const CommaNumber = computed(() => {
  // 排除空数据
  if (isEmpty(value)) {
    return '-'
  }

  // 保证 value 是数字
  if (isNaN(Number(value))) {
    return value
  }

  // 千分位处理
  return String(value).replace(REG_COMMA_NUMBER, ',')
})
</script>

<template>
  <span class="">
    {{ CommaNumber }}
  </span>
</template>
