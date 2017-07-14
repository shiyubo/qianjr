import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/home.vue'
import ProductListPage from '../views/productList.vue'
import MyAccountPage from '../views/myAccount.vue'
import MorePage from '../views/more.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomePage },
  { path: '/productList', component: ProductListPage },
  { path: '/myAccount', component: MyAccountPage },
  { path: '/more', component: MorePage }
]

export default new VueRouter({
  // linkActiveClass: 'active',
  mode: 'history',
  routes
})
