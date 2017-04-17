/**
 * Created by Administrator on 2017/4/16.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
  'attentionRead': false,
  'attentionRule': false
}

// 创建一个对象存储一系列接下来要写的mutation函数
const mutations = {
  // 选择阅读的内容
  selectAttention (state, attention) {
    state.attentionRead = attention.attentionRead
    state.attentionRule = attention.attentionRule
  }
}

// 整合初始状态和mutation函数，得到想要的store
// 至此，这个store可以连接到应用中，可以没有action（异步变化），getters（过滤），modules（分模块）
export default new Vuex.Store({
  state,
  mutations
})
