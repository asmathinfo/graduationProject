/**
 * Created by Administrator on 2017/4/16.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
  'attentionRead': false,           // 点击注意事项
  'attentionRule': false,           // 点击发布规则
  'emailname': '',                  // 显示导航栏用户名
  'islogin': false,                 // 是否登录
  'loginInShow': true,              // 显示登录页面
  'loginUpShow': false,             // 显示注册页面
  'commodityDetail': {}             // 商品详情
}

// 创建一个对象存储一系列接下来要写的mutation函数
const mutations = {
  // 选择阅读的内容
  selectAttention (state, attention) {
    state.attentionRead = attention.attentionRead
    state.attentionRule = attention.attentionRule
  },
  // 显示导航栏的昵称
  showName (state, emailname) {
    state.emailname = emailname.emailname
    state.islogin = emailname.islogin
  },
  // 选择显示登录还是注册
  loginShow (state, loginShow) {
    state.loginInShow = loginShow.loginInShow
    state.loginUpShow = loginShow.loginUpShow
  },
  // 显示商品详情
  showCommodityDetail (state, commodityDetail) {
    state.commodityDetail = commodityDetail.commodityDetail
  }
}

// 整合初始状态和mutation函数，得到想要的store
// 至此，这个store可以连接到应用中，可以没有action（异步变化），getters（过滤），modules（分模块）
export default new Vuex.Store({
  state,
  mutations
})
