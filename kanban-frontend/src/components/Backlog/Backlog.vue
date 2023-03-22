<script setup lang="ts">
  import { ref } from 'vue';
  import { BacklogItem as BacklogItemType} from '@/models/backlog'
  import BacklogItem from '../Backlog/BacklogItem.vue';

  const emit = defineEmits<{
    (e: 'moveItemToBoard', item: BacklogItemType): void
  }>()

  const projectBacklog = ref<BacklogItemType[]>([
    { id: 1, label: "task 1", description: "description of the first task that is suprisingly long" },
    { id: 2, label: "task 2", description: "description of the second task" },
    { id: 3, label: "task 3", description: "third lol" }
  ]);

  const moveTaskToBoard = (id:number) => {
    const backlogItem = projectBacklog.value.find((item) => item.id === id)
    if(backlogItem) {
      emit('moveItemToBoard', backlogItem)
      projectBacklog.value = projectBacklog.value.filter((item) => item.id !== id)
    }
  }
</script>
<template>
  <div class="backlog">
    <BacklogItem
      v-for="backlogItem in projectBacklog"
      :key="backlogItem.id"
      :id="backlogItem.id"
      :label="backlogItem.label"
      :description="backlogItem.description"
      @moveTask="moveTaskToBoard"
    />
  </div>
</template>
<style>
  .backlog {
    -webkit-box-shadow: 2px 0px 1px 0px rgba(105,105,105,0.18);
    -moz-box-shadow: 2px 0px 1px 0px rgba(105,105,105,0.18);
    box-shadow: 2px 0px 1px 0px rgba(105,105,105,0.18);
    padding-top: 1px;
    height: 100%;
  }
</style>