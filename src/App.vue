<template>
  <div>
    app
    <!-- 1、注意是双花括号 -->
    <p>{{$store.state.username}}</p>
    <!-- 2、计算属性使用 -->
    <p>{{$store.getters.newName}}</p>

    <button @click="mutationFn">update</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'app',
  setup () {
    const store = useStore()
    console.log(store.state.username)
    // eslint-disable-next-line no-unused-vars
    const mutationsFn = () => {
      console.log('111')
      store.commit('updateName')
      // store.dispatch('updateName')
    }
    return { mutationsFn }
  }
}

</script>
