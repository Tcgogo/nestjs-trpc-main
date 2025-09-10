<script setup lang="ts">
import type { ElTooltipProps } from 'element-plus'
import type { HTMLAttributes } from 'vue'
import { ElTooltip } from 'element-plus'
import { h } from 'vue'
import { cn } from '@/utils'

interface IProps {
  /**
   * 多行省略
   * @default 1
   */
  ellipsis?: number
  /**
   * 文本
   */
  text: string
  /**
   * 类名
   */
  class?: HTMLAttributes['class']
}

const props = defineProps<Partial<ElTooltipProps> & IProps>()

const className = computed(() => {
  return `${props.ellipsis ? `line-clamp-${props.ellipsis}` : 'line-clamp-1'}`
})

const attrs = useAttrs()
</script>

<template>
  <component
    :is="h(ElTooltip, {
      ...attrs,
      ...props,
    }, {
      default: () => h('div', { innerHTML: props.text, class: cn(className, props.class) }),
    })"
  />
</template>
