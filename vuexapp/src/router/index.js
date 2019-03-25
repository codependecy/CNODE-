import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Vuex from 'vuex'


Vue.use(Vuex)

var store = new Vuex.Store({
  state:{
    num: 100
  }
})

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
