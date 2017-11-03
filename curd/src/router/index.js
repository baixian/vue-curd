import Vue from 'vue'
import Router from 'vue-router'
//home.vue引入进来
import Home from '../views/home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component:Home
    }
  ]
})
