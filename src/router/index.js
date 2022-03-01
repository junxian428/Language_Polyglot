import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import France from '../views/France.vue'
import Spanish from '../views/Spanish.vue'
import Russian from '../views/Russian.vue'
import German from '../views/German.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/france',
    name: 'France',
    component: France
  },
  {
    path: '/spanish',
    name: 'Spanish',
    component: Spanish
  },
  {
    path: '/russian',
    name: 'Russian',
    component: Russian
  },
  {
    path: '/german',
    name: 'German',
    component: German,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
