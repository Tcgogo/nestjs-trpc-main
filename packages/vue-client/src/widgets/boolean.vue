<script setup lang="ts">
interface IProps {
  schema: any
}

const { schema = {} } = defineProps<IProps>()

const value = ref(false)
</script>

<template>
  <div class="form-item">
    <div v-if="schema['ui:widget'] === 'switch'" class="form-item_content flex items-center gap-2">
      <div class="form-item-title">
        {{ schema.title }}
      </div>
      <FaSwitch v-model="value" />
    </div>

    <div v-else class="form-item_content">
      <FaCheckbox v-model="value">
        <div class="form-item-title">
          {{ schema.title }}
        </div>
      </FaCheckbox>
    </div>
  </div>
</template>

<style scoped lang="less"></style>
