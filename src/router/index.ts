import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: 'DefaultLayout'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
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
