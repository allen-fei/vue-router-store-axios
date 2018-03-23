import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/a',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
