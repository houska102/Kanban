<template>
  <ProjectList />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ProjectList from '@/components/Project/ProjectList.vue'

export default defineComponent({
  components: {
    ProjectList,
  },
})
</script>
<style>
  .projects {
    display: flex;
    flex-flow: row wrap;
  }
</style>
