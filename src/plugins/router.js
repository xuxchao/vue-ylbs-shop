import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue')
    },
    {
      path: '/shopdetail/:id',
      name: 'shopDetail',
      component: () => import(/* webpackChunkName: "about" */ '@/views/ShopDetail.vue')
    },
    {
      path: '/evaluation/:id',
      name: 'evaluation',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Evaluation.vue')
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      meta: { requiresAuth: true },
      component: () => import(/* webpackChunkName: "about" */ '@/views/ShopCar.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Login.vue')
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