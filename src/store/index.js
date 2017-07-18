import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    headNav: 'tabbar-1'
  },
  mutations: {
    setHeadNav: (state, index) => {
      state.headNav = 'tabbar-' + index
    }
  }
})

export default store
