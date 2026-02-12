import { createRouter, createWebHistory } from 'vue-router'

import MenuIndex from '../components/Menus/Index.vue'
import MenuCreate from '../components/Menus/CreateMenu.vue'
import MenuEdit from '../components/Menus/EditMenu.vue'
import MenuShow from '../components/Menus/ShowMenu.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/menus',
      name: 'menus',
      component: MenuIndex
    },
    {
      path: '/menus/create',
      name: 'menu-create',
      component: MenuCreate
    },
    {
      path: '/menus/edit/:menuId',
      name: 'menu-edit',
      component: MenuEdit
    },
    {
      path: '/menus/:menuId',
      name: 'menu-show',
      component: MenuShow
    }
  ]
})

export default router
