<template>
  <div>{{ projects }}</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import mockProjects from '@/MockData/Projects.js';

export default defineComponent({
  setup() {
    const projects = ref(mockProjects);

    return {
      projects
    }
  },
})
</script>
