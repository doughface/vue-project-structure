import Vue from 'vue'
import Vuex from 'vuex'
import ajaxLib from './lib/axios'
const ajax = ajaxLib.ajax
Vue.use(Vuex)

function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}
const store = new Vuex.Store({
  state: {
    userInfo: {},
    baseUrl: window.location.protocol + '//' + window.location.host,
  },
  mutations: {
    setUserInfo(state, data) {
      state.userInfo = data
    }
  },
  actions: {
    async getUserInfoById(context,payload) {
      let res = await ajax.get('/user/' + payload._id)
      if (res) {
        sessionStorage.userInfo = JSON.stringify(res)
        context.commit('setUserInfo', res)
      } else {
        context.commit('setUserInfo', {})
      }
    }
  }
})
export default store
