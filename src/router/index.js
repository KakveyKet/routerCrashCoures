import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Test1Vue from '@/views/Test1.vue'
import Test2Vue from '@/views/Test2.vue'
import Login from '../views/Login.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/test1',
          name: 'test1',
          component: Test1Vue
        },
        {
          path: '/test2',
          name: 'test2',
          component: Test2Vue
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }

  ]
})

export default router
