import Vue from 'vue'
import Router from 'vue-router'

import home from 'pages/home/home'
import login from 'pages/login/login'
import staff from 'pages/staff/staff'
import pindex from 'pages/home/index'
import pPManagement from 'pages/personalPManagement/personalPManagement'
import projectManagement from 'pages/projectManagement/projectmanagement'
import projectadd from 'pages/projectManagement/projectadd'
import test from 'pages/projectManagement/test'
import personalPMView from 'pages/personalPManagement/personalPManagementView'
import companyAll from 'pages/companyall/companypage'
import companyAdd from 'pages/companyall/companyadd'
import companyCheck from 'pages/companyall/companycheck'
import company from 'pages/companyall/company'

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
          path: 'personalPManagement',
          name: 'personalPManagement',
          title: '人员案件管理',
          component: pPManagement
        },
        {
          path: 'personalPManagementView',
          name: 'personalPManagementView',
          title: '人员案件查看',
          component: personalPMView
        },
        {
          path: 'projectmanagement',
          name: 'projectManagement',
          title: '案件管理',
          component: projectManagement
        },
        {
          path: 'projectmanagement/projectadd',
          name: 'projectadd',
          title: '增加案件',
          component: projectadd
        },
        {
          path: 'company',
          name: 'company',
          title: '公司信息管理',
          component: company
        },
        {
          path: 'company1',
          name: 'companyall',
          title: '公司信息管理',
          component: companyAll
        },
        {
          path: 'company/add',
          name: 'companyadd',
          title: '新增公司',
          component: companyAdd
        },
        {
          path: 'test',
          name: 'test',
          title: '新增公司',
          component: test
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
