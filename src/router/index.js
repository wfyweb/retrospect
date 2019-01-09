import Vue from 'vue'
import Router from 'vue-router'

import location from '@/page/location'
import home from '@/page/home'
import enterprise from '@/page/enterprise'
import scenery from '@/page/scenery'
import tourism from '@/page/tourism'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'location',
      component: location,
      meta: { title: '获取位置' }
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: { title: '扶贫产品' }
    },
    {
      path: '/enterprise',
      name: 'enterprise',
      component: enterprise,
      meta: { title: '生产企业' }
    },
    {
      path: '/scenery',
      name: 'scenery',
      component: scenery,
      meta: { title: '扶贫简介' }
    },
    {
      path: '/tourism',
      name: 'tourism',
      component: tourism,
      meta: { title: '旅游资源' }
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) { // 如果设置标题，拦截后设置标题
    document.title = to.meta.title
  }
  next()
})
export default router
