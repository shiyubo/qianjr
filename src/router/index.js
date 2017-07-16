import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/home.vue'
import ProductPage from '../views/product.vue'
import AccountPage from '../views/account.vue'
import MorePage from '../views/more.vue'

Vue.use(VueRouter)

// 配置路由规则
const routes = [
  { path: '*', redirect: '/home' },
  { path: '/', redirect: '/home' },
  { path: '/home', name: '首页', component: HomePage },
  { path: '/product', name: '理财列表', component: ProductPage },
  { path: '/account', name: '我的账户', component: AccountPage },
  { path: '/more', name: '更多', component: MorePage }
]

// 创建一个路由器实例
const router = new VueRouter({
  // linkActiveClass: 'active',
  mode: 'history',
  // base: __dirname,
  routes
})

router.afterEach((to, from, next) => {
  document.title = to.name
})

export default router
