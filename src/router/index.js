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
]

const otherRoutes = [
  {
    path: '/apartment/:id',
    name: 'apartment-detail',
    component: ApartmentDetailView,
    props: true,
    meta: {
      title: 'Apartment\'s Inventory',
    }
  },
  {
    path: '/apartment/:id/inventory/add',
    name: 'inventory-add',
    component: InventoryEditView,
    props: true,
    meta: {
      title: 'Add Inventory',
    }
  },
  {
    path: '/inventory/:id/edit',
    name: 'inventory-edit',
    component: InventoryEditView,
    props: true,
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
