<script setup lang="ts">
defineOptions({
  name: 'FaSearchBar',
})

withDefaults(
  defineProps<{
    showToggle?: boolean
    background?: boolean
  }>(),
  {
    showToggle: true,
    background: false,
  },
)

const emits = defineEmits<{
  toggle: [value: boolean]
}>()

const fold = defineModel<boolean>('fold', {
  default: true,
})

function toggle() {
  fold.value = !fold.value
  emits('toggle', fold.value)
}
</script>

<template>
  <div
    class="relative" :class="{
      'py-4': showToggle,
      'px-4 bg-secondary transition': background,
    }"
  >
    <slot :fold="fold" :toggle="toggle" />
    <div v-if="showToggle" class="absolute bottom-0 left-0 w-full text-center translate-y-1/2">
      <button class="inline-flex cursor-pointer select-none items-center px-2 text-xs font-medium rounded outline-none h-5 border-size-0 bg-secondary" @click="toggle">
        <FaIcon :name="fold ? 'i-ep:caret-bottom' : 'i-ep:caret-top' " />
      </button>
    </div>
  </div>
</template>
