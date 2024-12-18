import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HomePage.vue'
import Kundservice from './components/KundserviceComponent.vue'
import SnusILaget from './components/SnusILagetComponent.vue'
import Login from './components/LoginComponent.vue'
import SnusDetails from './components/SnusDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/kundservice',
    name: 'Kundservice',
    component: Kundservice,
  },
  {
    path: '/snus-i-laget',
    name: 'SnusILaget',
    component: SnusILaget,
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/snus/:id',
    name: 'SnusDetails',
    component: SnusDetails,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
