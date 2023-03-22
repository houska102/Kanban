<script lang="ts" setup>
  import { NavigationItem } from '@/models/NavigationItem'
  import { ref } from 'vue';

  const navigationItems = ref<NavigationItem[]>([
    { route: `/`, label: 'home'},
    { route: `/about`, label: 'about'}
  ]);
</script>
<template>
  <header class="toolbar primary">
    <h1 class="toolbar--app-name">Kanban</h1>
    <div class="toolbar--section-divider">&nbsp;</div>
    <nav class="toolbar--navigation">
      <router-link 
        v-for="item in navigationItems"
        :key="item.route"
        :to="item.route"
      >
        {{ item.label.toLocaleUpperCase() }}
      </router-link>
    </nav>
  </header>
</template>
<style scoped>
.toolbar {
  height: 48px;
  width: 100vw;
  position: fixed;
  top: 0;
  left:0;
  display: flex;
  flex-flow: row nowrap;
  box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.15);
}
.toolbar--app-name{
  display: inline-flex;
  height: 48px;
  padding: 3px 5px;
  margin: 0;
  align-items:baseline;
}

.toolbar--section-divider {
  height: 48px;
  width: 1px;
}

.toolbar--navigation a {
  display: inline-flex;
  height: 48px;
  padding: 5px 10px;
  font-size: 1.2rem;
  text-decoration: none;
  text-align: center;
  align-items:center;
}

.toolbar--navigation a:hover, 
.toolbar--navigation .router-link-active {
  background: var(--dark-primary-color);
}
.toolbar--navigation a:visited {
  color: inherit;
}
 a
.toolbar--navigation a:focus {
  text-decoration: underline;
}
</style>
