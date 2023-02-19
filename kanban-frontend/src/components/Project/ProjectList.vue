<script lang="ts" setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router'
  import mockProjects from '@/MockData/Projects';
  import Project from '@/components/Project/Project.vue'

  const projects = ref(mockProjects);
  const router = useRouter()    

  const handleProjectClick = (id: number) => {
    const projectRoute = `/project/${id}`;
    router.push(projectRoute)
  }
</script>
<template>
  <section class="projects">
    <Project 
      v-for="project in projects"
      :key="project.id"
      :id="project.id"
      :name="project.name"
      :description="project.description"
      @projectClicked="handleProjectClick"
    />
  </section>
</template>
<style>
  .projects {
    display: flex;
    flex-flow: row wrap;
  }
</style>