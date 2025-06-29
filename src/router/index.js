import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Marketplace from '../views/Marketplace.vue'
import Gaming from '../views/Gaming.vue'
import Community from '../views/Community.vue'
import Artists from '../views/Artists.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/marketplace',
    name: 'Marketplace',
    component: Marketplace
  },
  {
    path: '/gaming',
    name: 'Gaming',
    component: Gaming
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  },
  {
    path: '/artists',
    name: 'Artists',
    component: Artists
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router 