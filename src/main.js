import Vue from 'vue'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import HomePage from './components/home.vue'
import ProductListPage from './components/productList.vue'
import MyAccountPage from './components/myAccount.vue'
import MorePage from './components/more.vue'

Vue.use(MintUI)
Vue.use(VueRouter)

const router = new VueRouter({
  // linkActiveClass: 'active',
  mode: 'history',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomePage },
    { path: '/productList', component: ProductListPage },
    { path: '/myAccount', component: MyAccountPage },
    { path: '/more', component: MorePage }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
