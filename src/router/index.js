import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/useAuthStore'


const requireAuth = (to, from, next) => {
  let store = useAuthStore()
  if (!store.user) {
    next({ name: 'login' })
  } else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../views/ChatView.vue'),
      beforeEnter: requireAuth
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: () => import('../views/NotFoundView.vue'),
    },
  ]
})



export default router
