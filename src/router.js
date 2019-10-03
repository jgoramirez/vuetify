import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/icons',
      name: 'icons',
      component: () => import(/* webpackChunkName: "icons" */ './views/Icons.vue')
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import(/* webpackChunkName: "cards" */ './views/Cards.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
