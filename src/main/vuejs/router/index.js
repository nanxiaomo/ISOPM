import Vue from 'vue'
import Router from 'vue-router'
import home from 'pages/home/home'
import login from 'pages/login/login'
import staff from 'pages/staff/staff'
import post from 'pages/staff/post'
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
      path: '/login',
      name: 'login',
      title: '登录',
      component: login
    },
    {
      path: '/staff',
      name: 'staff',
      title: '人员信息管理',
      component: staff,
      children: [
        {
          path: 'post',
          component: post
        }
      ]
    }
  ]
})
export default router
