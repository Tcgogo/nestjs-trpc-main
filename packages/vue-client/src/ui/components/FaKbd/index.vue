<script setup lang="ts">
defineOptions({
  name: 'FaKbd',
})
</script>

<template>
  <kbd class="inline-flex items-center gap-1 border rounded-md text-sm text-muted-foreground h-6 select-none bg-muted px-1.5 font-medium font-sans">
    <slot />
  </kbd>
</template>
