import ajaxLib from './lib/axios'
const ajax = ajaxLib.ajax

class Api {
  //获取地址栏参数
  static getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
    var r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2])
    return null
  }
  static async sendSms(data){
    return ajax.post('/sms/send',data)
  }
  static async vdSms(data){
    return ajax.post('/sms/vd',data)
  }
}
export default {
  install(Vue) {
    Vue.prototype.$api = Api
  },
  api:Api
}
