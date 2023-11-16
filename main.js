import App from './App'

import module from './ajax/api/index.js'
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'

//统一将请求方法挂在Vue原型上
Vue.prototype.$http = module

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif