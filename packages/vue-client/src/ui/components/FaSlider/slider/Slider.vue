<script setup lang="ts">
import type { SliderRootEmits, SliderRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '@/utils'

const props = defineProps<SliderRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<SliderRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SliderRoot
    :class="cn(
      'relative flex w-full touch-none select-none items-center data-[orientation=vertical]:flex-col data-[orientation=vertical]:w-2 data-[orientation=vertical]:h-full',
      props.class,
    )"
    v-bind="forwarded"
  >
    <SliderTrack class="relative h-2 w-full overflow-hidden rounded-full bg-secondary grow data-[orientation=vertical]:w-2">
      <SliderRange class="absolute h-full bg-primary data-[orientation=vertical]:w-full" />
    </SliderTrack>
    <FaTooltip v-for="(val, key) in modelValue" :key="key" :text="val.toString()" disable-closing-trigger>
      <SliderThumb
        class="block h-5 rounded-full bg-background ring-offset-background transition-colors disabled:pointer-events-none w-5 border-2 border-primary disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring"
      />
    </FaTooltip>
  </SliderRoot>
</template>
