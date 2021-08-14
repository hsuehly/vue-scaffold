import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Vueaxios from 'vue-axios'

// Vue.use(Vueaxios,axios)

// 实例化vue
new Vue({
  el: '#app',
  render: h => h(App), //将app组件渲染到#app中
  router,
  beforeCreate() {
    Vue.prototype.$bus = this // 全局时事件总线
    Vue.prototype.axios = axios
  },

  
})