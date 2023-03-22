<script lang="ts" setup>
  defineProps<{
    id: number,
    label: string,
    description: string,
  }>();
  defineEmits<{
    (e: 'moveTask', id: number): void
  }>();
</script>
<template>
  <div class="backlog-item">
    <h3 class="backlog-item--label">{{ label }}</h3>
    <div class="backlog-item--description">
      {{ description }}
    </div>
    <button
      class="backlog-item__move-task-button"
      @click="$emit('moveTask', id)"
    >></button>
  </div>
</template>
<style scoped>
  .backlog-item {
    position: relative;
    border-bottom: 2px solid var(--app-background-dark);
    text-align: left;
    padding-right: 20px;
  }
  .backlog-item--label {
    padding: 0;
    margin: 0;
  }
  .backlog-item--description {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .backlog-item__move-task-button {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    border: none;
    background: var(--secondary-color);
    cursor: pointer;
  }
</style>