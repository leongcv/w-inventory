import { createRouter, createWebHistory } from 'vue-router'
import ApartmentView from '../views/ApartmentView.vue'
import InventoryView from '../views/InventoryView.vue'

export const routes = [
  {
    path: '/',
    name: 'apartment',
    title: 'Apartment',
    component: ApartmentView
  },
  {
    path: '/inventory',
    name: 'inventory',
    title: 'Inventory',
    component: InventoryView
  },
  {
    path: '/about',
    name: 'about',
    title: 'About',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, 
})

export default router
