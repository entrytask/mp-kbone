import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "Home" */'@/components/home/index.vue')
const My = () => import(/* webpackChunkName: "Home" */'@/components/my/index.vue')
const Doc = () => import(/* webpackChunkName: "Home" */'@/components/doc/index.vue')


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/(home|index)?',
      name: 'Home',
      component: Home,
    },
    {
      path: '/my',
      name: 'My',
      component: My,
    },
    {
      path: '/doc',
      name: 'Doc',
      component: Doc,
    },
  ],
})
