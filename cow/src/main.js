// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import RegisterRouters from './lib/routers'
import store from './store'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  routes: RegisterRouters
})

router.beforeEach(({meta, path}, from, next) => {
  let { auth = true } = meta
  // TODO 检查登录
  let isLogin = Boolean(1)

  if (auth && !isLogin && path !== '/login') {
    return next({ path: '/login' })
  }
  next()
})

new Vue(Vue.util.extend({
  router,
  store
}, App)).$mount('#app')
