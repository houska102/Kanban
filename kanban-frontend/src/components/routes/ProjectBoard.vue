<template>
  <span>{{ id }}</span>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    id: {
      type: String
    }
  }
})
</script>
<style>
  .projects {
    display: flex;
    flex-flow: row wrap;
  }
</style>