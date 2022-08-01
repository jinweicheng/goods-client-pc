<template>
  <div>
    app--{{$store.state.user.profile.account}}
    <hr/>
    <button @click="$store.commit('user/setUser',{account: 'cjw'})">修改account</button>
    <!-- 1、注意是双花括号 -->
    <!-- <p>{{$store.state.username}}</p> -->
    <!-- 2、计算属性使用 -->
    <!-- <p>{{$store.getters.newName}}</p> -->
    <!-- 3、使用mutations和action -->
    <!-- <button @click="mutationFn">update</button> -->
    <!-- <div>{{$store.state.user.profile.account}}</div> -->
    <button @click="fn">测试request</button>
  </div>
</template>

<script>
// import { useStore } from 'vuex'
import request from './utils/request'
export default {
  name: 'app',
  setup () {
    // const store = useStore()
    // console.log(store.state.username)
    // console.log(store.state.user)
    // console.log(store.state.user.profile.account)
    // eslint-disable-next-line no-unused-vars
    // const mutationsFn = () => {
    //   console.log('111')
    //   store.commit('updateName')
    //   // store.dispatch('updateName')
    // }
    // return { mutationsFn }
    const fn = () => {
      request('/member/profile', 'post', { cjw: 'nihao' })
    }
    return { fn }
  }
}

</script>
