import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
/**
 * TODO 路由地址对象
 * 每个路由两个属性：path 和 路由组件
 */
const routes = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/pledge',
    component: () => import('@/views/pledge/index.vue')
  },
  {
    path: '/bcg',
    component: () => import('@/views/bcg/index.vue')
  },
  {
    path: '/wallet',
    component: () => import('@/views/wallet/index.vue')
  },
  {
    path: '/extract',
    component: () => import('@/views/extract/index.vue')
  },
  {
    path: '/wp',
    component: () => import('@/views/wp/index.vue')
  }
]
const router = new VueRouter({
  routes
})
export default router
