import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/routes/Home.vue'
import About from '@/components/routes/About.vue'
import ProjectBoard from '@/components/routes/ProjectBoard.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { 
    path: '/project/:id',
    component: ProjectBoard,
    props: true,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
