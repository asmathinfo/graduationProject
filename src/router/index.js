import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/login'
import List from '@/components/list'
import Detail from '@/components/detail'
import Attention from '@/components/attention'
import PublishPage from '@/components/publishPage'
import Person from '@/components/person'

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
        {path: '/home', component: List},                  // 默认显示商品列表
        {path: '/home/detail', component: Detail},         // 点击之后查看商品详情
        {path: '/home/attention', component: Attention},   // 购买注意事项
        {path: '/home/publish', component: PublishPage},   // 发布商品页面
        {path: '/home/person', component: Person}          // 个人中心页面
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
