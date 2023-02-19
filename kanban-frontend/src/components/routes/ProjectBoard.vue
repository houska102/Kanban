<script lang="ts" setup>
  import { defineProps } from 'vue';
  import BacklogItem from '../Backlog/BacklogItem.vue';

  defineProps({
    id: {
      type: String
    }
  })
</script>
<template>
  <span>{{ id }}</span>
  <BacklogItem />
</template>
<style>
  .projects {
    display: flex;
    flex-flow: row wrap;
  }
</style>