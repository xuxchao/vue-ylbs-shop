import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Index from '../views/Index'
import Home from '../views/Home'
import ShopCar from '../views/ShopCar'
import Dingdan from '../views/Dingdan'
import Person from '../views/Person'
const shopDetail = () => import(/* webpackChunkName: "shopDetail" */ '@/views/ShopDetail.vue')
const evaluation = () => import(/* webpackChunkName: "evaluation" */ '@/views/Evaluation.vue')
const login = () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
Vue.use(Router)


const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'index',
          component: Home
        },
        {
          path: 'car',
          component: ShopCar,
          meta: { requiresAuth: true },
        },
        {
          path: 'dingdan',
          component: Dingdan,
          meta: { requiresAuth: true },
        },
        {
          path: 'person',
          component: Person,
          meta: { requiresAuth: true },
        },
      ]
    },
    {
      path: '/shopdetail/:id',
      name: 'shopDetail',
      component: shopDetail
    },
    {
      path: '/evaluation/:id',
      name: 'evaluation',
      component: evaluation
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
// 判断是否需要登录
router.beforeEach((to, from, next) => {
  console.log(to.meta.requiresAuth, !store.state.login);
  
  if (to.meta.requiresAuth && !store.state.login) {
    next({
      path: '/login'
    })
  } else {
    next()
  }
})

export default router