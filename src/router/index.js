import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/kits',
    name: 'Kits',
    component: () => import('../views/Kits.vue')
  },
  {
    path: '/kits/new-kit',
    name: 'NewKit',
    component: () => import('../views/NewKit.vue')
  },
    {
      path: '/kits/:kitId',
      name: 'editKit',
      component: () => import('../views/NewKit.vue')
    },
    {
      path: '/props/new-prop',
      name: 'NewProp',
      component: () => import('../views/NewProp.vue')
    },
    {
      path: '/props/:propId',
      name: 'editProp',
      component: () => import('../views/NewProp.vue')
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: () => import('../views/Calculator.vue')
    }

]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
