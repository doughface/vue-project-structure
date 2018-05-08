import Vue from 'vue'
import App from './App'
import router from './router' //路由
import store from './store' //vuex
import './filters' //全局过滤器
import './directives' //全局指令
import './components' //全局组件
import './lib' //第三方插件库
import './assets/app.css' //通用css
import './assets/app.js' //通用js
import './api' //全局接口

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
