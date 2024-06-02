import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/dashboard/DashboardView.vue'),
      meta: {
        layout: 'DefaultLayout'
      }
    },
    {
      path: '/lists',
      name: 'lists',
      component: () => import('@/views/lists/ListsView.vue'),
      meta: {
        layout: 'DefaultLayout'
      }
    },
    {
      path: '/scheduler',
      name: 'scheduler',
      component: () => import('@/views/dashboard/DashboardView.vue'),
      meta: {
        layout: 'DefaultLayout'
      }
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: () => import('../views/auth/SignInView.vue'),
      meta: {
        layout: 'AuthLayout'
      }
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: () => import('../views/auth/SignUpView.vue'),
      meta: {
        layout: 'AuthLayout'
      }
    }
  ]
})

export default router
