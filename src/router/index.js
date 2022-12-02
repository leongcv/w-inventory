import { createRouter, createWebHistory } from 'vue-router'
import ApartmentView from '@/views/ApartmentView.vue'
import ApartmentDetailView from '@/views/ApartmentDetailView.vue'
import InventoryEditView from '@/views/InventoryEditView.vue'


export const topNavigation = [
]

export const leftNavigation = [
  {
    path: '/',
    name: 'apartment',
    alias: '/apartment',
    component: ApartmentView,
    meta: {
      title: 'Apartment',
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'About',
    }
  }
]

const otherRoutes = [
  {
    path: '/apartment/:id',
    name: 'apartment-detail',
    component: ApartmentDetailView,
    meta: {
      title: 'Apartment\'s Inventory',
    }
  },
  {
    path: '/inventory/:id/edit',
    name: 'inventory-edit',
    component: InventoryEditView,
    meta: {
      title: 'Edit Inventory',
    }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: topNavigation.concat(leftNavigation.concat(otherRoutes)),
})

export default router
