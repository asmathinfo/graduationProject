import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/login'
import List from '@/components/list'
import Detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {path: '/home', component: List},           // 默认显示商品列表
        {path: '/home/detail', component: Detail}   // 点击之后查看商品详情
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
