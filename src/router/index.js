import { createRouter, createWebHistory } from 'vue-router'
import ProductoView from '../views/ProductoView.vue';
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/producto-view/ :url',
    name: 'producto',
    component: ProductoView,
    props: true 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
