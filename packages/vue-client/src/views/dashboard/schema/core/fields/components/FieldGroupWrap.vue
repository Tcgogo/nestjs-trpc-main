<script setup lang="ts">
// 定义 props 类型
interface Props {
  curNodePath?: string
  showTitle?: boolean
  showDescription?: boolean
  title?: string
  description?: string
}

// 定义 inject 的类型
interface GenFormProvide {
  fallbackLabel?: boolean | { value: boolean }
}

// 定义 props
const props = withDefaults(defineProps<Props>(), {
  curNodePath: '',
  showTitle: true,
  showDescription: true,
  title: '',
  description: '',
})

// 注入 genFormProvide
const genFormProvide = inject<GenFormProvide>('genFormProvide', {})

// 计算属性
const trueTitle = computed(() => {
  const title = props.title
  if (title) {
    return title
  }

  let fallbackLabel
  if (genFormProvide.fallbackLabel && typeof genFormProvide.fallbackLabel === 'object' && 'value' in genFormProvide.fallbackLabel) {
    fallbackLabel = genFormProvide.fallbackLabel.value
  }
  else {
    fallbackLabel = genFormProvide.fallbackLabel
  }

  const backTitle = fallbackLabel && props.curNodePath.split('.').pop()
  if (backTitle !== `${Number(backTitle)}`) {
    return backTitle
  }

  return ''
})
</script>

<template>
  <div class="fieldGroupWrap">
    <h3
      v-if="showTitle && trueTitle"
      class="fieldGroupWrap_title"
    >
      {{ trueTitle }}
    </h3>
    <p
      v-if="showDescription && description"
      class="fieldGroupWrap_des"
      v-html="description"
    />
    <div class="fieldGroupWrap_box">
      <slot />
    </div>
  </div>
</template>
