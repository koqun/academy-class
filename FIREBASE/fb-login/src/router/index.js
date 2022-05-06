import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'start',
    component: () => import("@/components/StartPage.vue") 
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("@/components/LoginPage.vue") 
  },
  {
    path: '/register',
    name: 'register',
    component: () => import("@/components/RegisterPage.vue") 
  },
  {
    path: '/main',
    name: 'main',
    component: () => import("@/components/MainPage.vue") 
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
