<script setup lang="ts">
defineOptions({
  name: 'FaKbd',
})
</script>

<template>
  <kbd class="inline-flex items-center gap-1 text-sm text-muted-foreground font-sans border rounded-md h-6 select-none bg-muted px-1.5 font-medium">
    <slot />
  </kbd>
</template>
