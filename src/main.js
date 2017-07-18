import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './common/js/rem.js'

Vue.use(MintUI)

/* eslint-disable no-new */
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
new Vue({
  router,
  store,
  template: '<App/>',
  components: { App }
}).$mount('#app')
