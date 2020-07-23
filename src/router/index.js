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
      meta: {
        layout: () => import('@/layouts/Full'),
      },
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
      meta: {
        layout: () => import('@/layouts/Nav'),
      },
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
      path: '/my-playlist',
      name: 'my-playlist',
      component: () => import('@/views/MyPlayList'),
      meta: {
        loginRequired: true,
      },
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/views/NotFound'),
    },
  ]
})

