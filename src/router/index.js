import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
// 重写原型上的push方法，统一处理错误信息
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{ ShowNav: true }
  },
  {
    path: '/life',
    name: 'life',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    children: [
      {
        path: '/life/personal',
        name: 'personal',
        component: () => import('../components/Personal.vue'),
        meta: {ShowPernav: true},
      },
      {
        path: '/life/pubuliu',
        name: 'pubuliu',
        component: () => import('../components/Pubuliu.vue'),
        meta: {ShowPernav: true},
      },
      {
        path: '/life/hoby',
        name: 'hoby',
        component: () => import('../components/Hoby.vue'),
        meta: {ShowPernav: true},
      },
      {
        path: '/life/music',
        name: 'music',
        component: () => import('../components/Music.vue')
      },
      {
        path: '/life/sticker',
        name: 'sticker',
        component: () => import('../components/Sticker.vue')
      },
      {
        path: '/life/passage',
        name: 'passage',
        component: () => import('../components/Passage.vue'),
        meta: {ShowPernav: false, ShowPasnav: true},
      },
      {
        path: '/life/aboutme',
        name: 'aboutme',
        component: () => import('../components/Aboutme.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // 如果目标路由有哈希标记（#），滚动到该哈希的位置
      return { selector: to.hash };
    } else {
      // 否则滚动到页面顶部
      return { x: 0, y: 0 };
    }
  },
})

export default router
