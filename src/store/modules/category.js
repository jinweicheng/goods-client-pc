import { findAllCategory } from '@/api/category'
import { topCategory } from '@/api/constants'

// 分类数据
export default {
  namespaced: true,
  state () {
    return {
      list: topCategory.map(item => ({ name: item }))
    }
  },
  mutations: {
    setList (state, payload) {
      state.list = payload
    },
    showSubCategory (state, id) {
      const item = state.list.find(item => item.id === id)
      item.show = true
    },
    hideSubCategory (state, id) {
      const item = state.list.find(item => item.id === id)
      item.show = false
    }
  },
  actions: {
    async getList (state) {
      const { result } = await findAllCategory()
      result.forEach(item => {
        item.show = false
      })
      console.log('result', result)
      state.commit('setList', result)
    }
  }
}
