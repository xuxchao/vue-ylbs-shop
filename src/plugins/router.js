import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

const ShopDetail = () => import(/* webpackChunkName: "shopDetail" */ '@/views/ShopDetail.vue')
const Evaluation = () => import(/* webpackChunkName: "evaluation" */ '@/views/Evaluation.vue')
const Login = () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
const Home = () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue')
const ShopCar = () => import(/* webpackChunkName: "ShopCar" */ '@/views/ShopCar.vue')
const Dingdan = () => import(/* webpackChunkName: "Dingdan" */ '@/views/Dingdan.vue')
const Person = () => import(/* webpackChunkName: "Person" */ '@/views/Person.vue')
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/index',
      component: Home
    },
    {
      path: '/car',
      component: ShopCar,
    },
    {
      path: '/dingdan',
      component: Dingdan,
    },
    {
      path: '/person',
      component: Person,
      meta: { requiresAuth: true },
    },
    {
      path: '/shopdetail/:id',
      name: 'shopDetail',
      component: ShopDetail
    },
    {
      path: '/evaluation/:id',
      name: 'evaluation',
      component: Evaluation
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
// 判断是否需要登录
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.login) {
    next({
      path: '/login'
    })
  } else {
    next()
  }
})

export default router