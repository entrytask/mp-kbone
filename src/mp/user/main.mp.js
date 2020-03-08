import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import App from '../../App.vue'
import store from '../../store'
import My from '../../user/my.vue'
import Login from '../../user/login.vue'
import List from '../../user/list.vue'
import Detail from '../../user/detail.vue'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/user/list',
    name: 'List',
    component: List,
  }, {
    path: '/user/my',
    name: 'My',
    component: My,
  }, {
    path: '/user/login',
    name: 'Login',
    component: Login,
  }, {
    path: '/user/detail/:id',
    name: 'Detail',
    component: Detail,
  }],
})

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  Vue.config.productionTip = false

  sync(store, router)

  return new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })
}
