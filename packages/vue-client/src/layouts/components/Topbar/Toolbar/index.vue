<script setup lang="ts">
import LeftSide from './leftSide.vue'
import RightSide from './rightSide.vue'

defineOptions({
  name: 'Toolbar',
})
</script>

<template>
  <div class="flex items-center justify-between toolbar-container">
    <div class="h-full flex items-center of-hidden ps-2 left-side pe-16">
      <LeftSide />
    </div>
    <div class="h-full flex flex-shrink-0 items-center px-2 justify-end">
      <RightSide />
    </div>
  </div>
</template>

<style scoped>
.toolbar-container {
  height: var(--g-toolbar-height);
  background-color: var(--g-toolbar-bg);
  transition: background-color 0.3s;

  .left-side {
    mask-image: linear-gradient(to right, #000 0%, #000 calc(100% - 50px), transparent);
  }
}
</style>
