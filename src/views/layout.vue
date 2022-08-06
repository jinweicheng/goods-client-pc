<template>
  <div>
    <AppTopnav></AppTopnav>
    <AppHeader></AppHeader>
    <AppHeaderSticky></AppHeaderSticky>
    <div class="app-body">
      <router-view />
    </div>
    <AppFooter></AppFooter>
    <!-- <button @click="$store.commit('user/setUser',{})">loginout</button>
    <button @click="$store.commit('user/setUser',{ token: 'cjwtoken'})">login</button> -->
  </div>
</template>

<script>
import AppTopnav from '@/components/app-topnav.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeaderSticky from '@/components/app-header-sticky.vue'
import { useStore } from 'vuex'
export default {
  name: 'layoutPage',
  components: {
    AppTopnav,
    AppHeader,
    AppFooter,
    AppHeaderSticky
  },
  setup () {
    console.log('category')
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>
<style scoped lang="less">
  .app-body {
    // height: 600px
  }
</style>
