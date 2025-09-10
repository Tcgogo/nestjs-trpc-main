<script setup lang="ts">
import { h, type HTMLAttributes } from 'vue';
import { ElTooltip, type ElTooltipProps } from 'element-plus';
import { cn } from '@/utils';

const props = defineProps<ElTooltipProps & { text: string, class?: HTMLAttributes['class'] }>()

const attrs = useAttrs()

</script>

<template>
  <component :is="h(ElTooltip, {
    ...attrs,
    ...props,
  }, {
    default: () => h('div', { innerHTML: props.text, class: cn('', props.class) }),
  })"></component>
</template>

<style lang="scss" scoped></style>
