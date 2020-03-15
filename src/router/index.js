import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/home/Index.vue')
const Network = () => import('@/views/Network.vue')
const Client = () => import('@/views/Client.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/(home|index)?',
    name: 'Home',
    component: Home,
  }, {
    path: '/index.html',
    name: 'HomeHtml',
    component: Home,
  }, {
    path: '/test/(home|index)',
    name: 'HomeTest',
    component: Home,
  }, {
    path: '/network',
    name: 'networkConfig',
    component: Network,
  }, {
    path: '/client',
    name: 'clientConfig',
    component: Client,
  }],
})
