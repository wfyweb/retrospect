import Vue from 'vue'
import Router from 'vue-router'

// import location from '@/page/location'
import home from '@/page/home'
import check from '@/page/check'
import record from '@/page/record'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: { title: '全程追溯信息' }
    },
    {
      path: '/check',
      name: 'check',
      component: check,
      meta: { title: '检测报告' }
    },
    {
      path: '/record',
      name: 'record',
      component: record,
      meta: { title: '生产日志' }
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
