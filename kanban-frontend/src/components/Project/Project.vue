<script setup lang="ts">
  defineProps<{
    id: number,
    name: string,
    description: string
  }>();

  defineEmits<{
    (e: 'projectClicked', id: number): void
  }>()
</script>
<template>
  <button class="project-card" @click="$emit('projectClicked', id)">
    <header class="project-name">{{ name }}</header>
    <div class="project-description">{{ description }}</div>
  </button>
</template>
<style scoped>
.project-card{
  width: 300px;
  display: inline-flex;
  flex-flow: column nowrap;
  align-items: stretch;
  margin: 16px;
  padding: 0;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  background: var(--app-background);
  color: black;
  text-align: start;
  box-shadow: -0.5px 3px 5px 0px rgba(0,0,0,0.15);
  font-size: 1rem;
  cursor: pointer;
}
.project-name {
  padding: 4px 8px;
  border-bottom: 1px solid #A1A1A1;
  background: var(--app-background-dark);

  font-size: 1.5rem;
}
.project-description {
  padding: 4px 8px;
}
</style>
