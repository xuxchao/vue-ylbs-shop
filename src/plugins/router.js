import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

const ShopDetail = () => import(/* webpackChunkName: "shopDetail" */ '@/views/ShopDetail.vue')
const Evaluation = () => import(/* webpackChunkName: "evaluation" */ '@/views/Evaluation.vue')
const Login = () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
const Home = () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue')
const Car = () => import(/* webpackChunkName: "Car" */ '@/views/Car.vue')
const OrderList = () => import(/* webpackChunkName: "OrderList" */ '@/views/OrderList.vue')
const Person = () => import(/* webpackChunkName: "Person" */ '@/views/Person.vue')
const Pay = () => import(/* webpackChunkName: "PaySuccess" */ '@/views/Pay.vue')
const PaySuccess = () => import(/* webpackChunkName: "PaySuccess" */ '@/views/PaySuccess.vue')
const Test = () => import(/* webpackChunkName: "Test" */ '@/views/Test.vue')
const Coupons = () => import(/* webpackChunkName: "Coupons" */ '@/views/Coupons.vue')
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
      component: Car,
    },
    {
      path: '/orderlist',
      component: OrderList,
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
    },
    {
      path: '/pay',
      name: 'pay',
      component: Pay
    },
    {
      path: '/paysuccess',
      name: 'paysuccess',
      component: PaySuccess
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/coupons',
      name: 'coupons',
      component: Coupons
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