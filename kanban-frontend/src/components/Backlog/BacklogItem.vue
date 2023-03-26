<script lang="ts" setup>
  const props = defineProps<{
    id: number,
    label: string,
    description: string,
  }>();
  const emit = defineEmits<{
    (e: 'moveTask', id: number): void
  }>();
  const handleMoveTaskButtonClick = () => {
    emit('moveTask', props.id)
  }
</script>
<template>
  <div class="backlog-item">
    <h3 class="backlog-item--label" :title="label">{{ label }}</h3>
    <div class="backlog-item--description" :title="description">
      {{ description }}
    </div>
    <button
      class="backlog-item__move-task-button"
      @click="handleMoveTaskButtonClick"
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
    transition: padding-left 0.1s ease-out;
  }
  .backlog-item:hover .backlog-item__move-task-button {
    padding-left: 10px;
  }
</style>