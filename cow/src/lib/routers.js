/**
 * Created by qiwihui on 1/23/17.
 */

import App from '../App'
import Home from '../views/home.vue'
import Login from '../views/login.vue'

export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/login',
        meta: {auth: false},
        component: Login
      },
      {
        path: '/home', // overview
        component: Home
      },
      {
        path: '/',
        meta: {auth: false},
        component: Home
      },
      {
        path: '*', // 其他页面，强制跳转到登录页面
        redirect: '/login'
      }
    ]
  }
]
