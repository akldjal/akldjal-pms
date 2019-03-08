import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Edit from '@/pages/Edit'
import Increase from '@/pages/Increase'
import Information from '@/pages/Information'
import List from '@/pages/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/increase',
      name: 'Increase',
      component: Increase
    },
    {
      path: '/information',
      name: 'Information',
      component: Information
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
  ]
});