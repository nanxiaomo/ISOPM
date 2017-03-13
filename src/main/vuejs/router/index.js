import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home/home'
import login from '../pages/login/login'
import slide from 'components/slide/slide'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      title: '主页',
      component: home
    },
    {
      path: '/slide',
      name: 'slide',
      component: slide
    },
    {
      path: '/login',
      name: 'login',
      title: '登录',
      component: login
    }
  ]
})
export default router
