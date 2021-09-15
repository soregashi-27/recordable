import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './views/Login.vue'
import Register from './views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '*',
    redirect: '/login'
  }
]

const router = new VueRouter({
  routes
})

export default router
