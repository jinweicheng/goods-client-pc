
import { createStore } from 'vuex'
import cart from './modules/cart'
import category from './modules/category'
import user from './modules/user'
import createPersistedstate from 'vuex-persistedstate'
export default createStore({
  // state: {
  //   username: 'cjw'
  // },
  // getters: {
  //   newName (state) {
  //     return state.username + '!!!'
  //   }
  // },
  // mutations: {
  //   updateName (state) {
  //     state.username = 'offer'
  //   }
  // },
  // actions: {
  //   updateName (ctx) {
  //     setTimeout(() => {
  //       ctx.commit('updateName')
  //     }, 1000)
  //   }
  // },
  modules: {
    cart,
    category,
    user
  },
  plugins: [
    createPersistedstate({
      key: 'goods-client-pc-store',
      paths: ['user', 'cart']
    })
  ]
})
