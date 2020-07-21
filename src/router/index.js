import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'color-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register'),
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('@/views/Setting'),
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('@/views/Posts'),
    },
    {
      path: '/pages',
      name: 'pages',
      component: () => import('@/views/Pages'),
    },
    {
      path: '/pages/:name',
      name: 'page-detail',
      component: () => import('@/views/Page'),
    },
    {
      path: '/playlist',
      name: 'play-list',
      component: () => import('@/views/PlayList'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/Search'),
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/views/NotFound'),
    },
  ]
})
