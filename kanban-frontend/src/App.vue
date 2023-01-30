<template>
  <ToolBar />
  <Content />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Content from '@/components/Layout/Content.vue';
import ToolBar from '@/components/Layout/ToolBar.vue';

@Options({
  components: {
    ToolBar,
    Content,
  },
})
export default class App extends Vue {}
</script>

<style>
:root {
  --primary-color: #8bc34a;
  --light-primary-color: #bef67a;
  --dark-primary-color: #5a9216;
  --secondary-color: #ffee58;
  --light-secondary-color: #ffff8b;
  --dark-secondary-color: #c9bc1f;
  --app-background-dark: #e1e1e1;
  --app-background: #f5f5f5;
}
body {
  background: var(--app-background);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 48px;
}
.primary {
  background: var(--primary-color);
  color:black;
}
.primary-light {
  background: var(--light-primary-color);
  color:black;
}
.primary-dark {
  background: var(--dark-primary-color);
  color:black;
}

.secondary {
  background: var(--secondary-color);
  color:black;
}
.secondary-light {
  background: var(--light-secondary-color);
  color:black;
}
.secondary-dark {
  background: var(--dark-secondary-color);
  color:black;
}

</style>
