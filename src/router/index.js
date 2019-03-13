import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
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