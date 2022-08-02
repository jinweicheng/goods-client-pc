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
    }
  },
  actions: {
    async getList (state) {
      const res = await findAllCategory()
      console.log('res', res)
      state.commit('setList', res)
    }
  }
}
