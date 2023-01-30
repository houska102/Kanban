import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from '@/components/routes/Home.vue'
import About from '@/components/routes/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]


createApp(App)
  .use(createRouter({
    history: createWebHistory(),
    routes,
  }))
  .mount('#app')
