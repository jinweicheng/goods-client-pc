
import { createStore } from 'vuex'

export default createStore({
  state: {
    username: 'cjw'
  },
  getters: {
    newName (state) {
      return state.username + '!!!'
    }
  },
  mutations: {
    updateName (state) {
      state.username = 'offer'
    }
  },
  actions: {
    updateName (ctx) {
      setTimeout(() => {
        ctx.commit('updateName')
      }, 1000)
    }
  },
  modules: {}
})
