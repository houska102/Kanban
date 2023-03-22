<script lang="ts" setup>
  import Backlog from '../Backlog/Backlog.vue'
  import { Task } from '@/models/backlog'
import { ref } from 'vue';
  defineProps<{
    id: string
  }>()
  const inProgressTasks = ref<Task[]>([])
  const addItemToInProgress = (item: Task) => {
    inProgressTasks.value.push(item)
  }
</script>
<template>
  <div class="project-board">
    <div class="project-header">Kanban header</div>
    <main class="project-content">
      <Backlog 
        @moveItemToBoard="addItemToInProgress"
      />
      <div class="board">
        {{ inProgressTasks }}
      </div>
    </main>
  </div>
</template>
<style>
  .project-board {
    display: grid;
    height: 100%;
    grid-template-columns: auto;
    grid-template-rows: 50px auto;
  }
  .project-header {
    position: relative;
    z-index: 2;
    -webkit-box-shadow: 0px 2px 1px 0px rgba(105,105,105,0.18);
    -moz-box-shadow: 0px 2px 1px 0px rgba(105,105,105,0.18);
    box-shadow: 0px 2px 1px 0px rgba(105,105,105,0.18);

  }
  .project-content {
    display: grid;
    height: auto;
    grid-template-columns: 250px auto;
    grid-template-rows: auto;
  }
</style>