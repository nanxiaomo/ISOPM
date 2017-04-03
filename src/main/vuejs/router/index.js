import Vue from 'vue'
import Router from 'vue-router'

import home from 'pages/home/home'
import login from 'pages/login/login'
import staff from 'pages/staff/staff'
import pindex from 'pages/home/index'
import caseTable from 'pages/caseManagement/caseManagement'
import company from 'pages/companyall/companypage'
import companyAdd from 'pages/companyall/companyadd'
import companyCheck from 'pages/companyall/companycheck'
import staffpost from 'pages/staff/staffpost'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      title: '主页',
      component: home,
      children: [
        {
          path: '',
          component: pindex
        },
        {
          path: 'staff',
          name: 'staff',
          title: '人员信息管理',
          component: staff
        },
        {
          path: 'staff/add',
          title: '添加人员信息',
          component: staffpost
        },
        {
          path: 'case',
          name: 'caseManagement',
          title: '人员案件管理',
          component: caseTable
        },
        {
          path: 'company',
          name: 'companyall',
          title: '公司信息管理',
          component: company
        },
        {
          path: 'company/add',
          name: 'companyadd',
          title: '新增公司',
          component: companyAdd
        },
        {
          path: 'company/check',
          name: 'companycheck',
          title: '查看公司',
          component: companyCheck
        }
      ]
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
