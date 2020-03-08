import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "Home" */'@/home/Index.vue')
const UserList = () => import(/* webpackChunkName: "UserList" */'@/user/list.vue')
const UserDetail = () => import(/* webpackChunkName: "UserDetail" */'@/user/detail.vue')
const UserMy = () => import(/* webpackChunkName: "UserMy" */'@/user/my.vue')
const UserLogin = () => import(/* webpackChunkName: "UserLogin" */'@/user/login.vue')

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
    path: '/user/list',
    name: 'UserList',
    component: UserList,
  }, {
    path: '/user/detail/:id',
    name: 'UserDetail',
    component: UserDetail,
  }, {
    path: '/user/my',
    name: 'UserMy',
    component: UserMy,
  }, {
    path: '/user/login',
    name: 'UserLogin',
    component: UserLogin,
  }],
})
