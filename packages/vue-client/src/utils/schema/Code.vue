<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils'

const props = defineProps<{
  code: string
  class?: HTMLAttributes['class']
  codeClass?: HTMLAttributes['class']
}>()
</script>

<template>
  <div class="flex">
    <div :class="cn('relative w-full rounded-lg bg-light p-2 text-3 overflow-auto', props.class)">
      <pre class="w-full h-full overflow-auto whitespace-pre-line">
        <code :class="cn('whitespace-pre-wrap w-full h-full', props.codeClass)" tabindex="0">{{ code }}</code>
      </pre>
    </div>
  </div>
</template>
