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
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router'
import mockProjects from '@/MockData/Projects';
import Project from '@/components/Project/Project.vue'

export default defineComponent({
  components: {
    Project,
  },
  setup() {
    const projects = ref(mockProjects);
    const router = useRouter()    

    const handleProjectClick = (id: number) => {
      const projectRoute = `/project/${id}`;
      router.push(projectRoute)
    }
    return {
      projects,
      handleProjectClick
    }
  },
})
</script>
<style>
  .projects {
    display: flex;
    flex-flow: row wrap;
  }
</style>