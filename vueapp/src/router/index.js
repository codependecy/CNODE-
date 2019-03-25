import Vue from 'vue'
import router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import HelloEarth from '../components/HelloEarth'
import list from '../components/list'
Vue.use(router)

// 模块的导出
/* eslint-disable no-new */
export default new router({
    routes: [{
        name:'helloworld',
        path: '/helloworld/:worldmsg',
        component: HelloWorld
      },{
        name:'helloearth',
        path: '/helloearth/:earthmsg',
        component: HelloEarth
      },{
        path: '/list',
        component: list
      }
    ]
})