<template>
  <div class="app-header-sticky" :class="{show:y >= 78}">
    <div class="container" v-show="y>=78">
      <RouterLink class="logo" to="/" />
      <AppHeaderNav />
      <div class="right">
        <RouterLink to="/" >εη</RouterLink>
        <RouterLink to="/" >δΈι’</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
// import { onMounted, ref } from 'vue'
import AppHeaderNav from './app-header-nav'
import { useWindowScroll } from '@vueuse/core'
export default {
  name: 'AppHeaderSticky',
  components: { AppHeaderNav },
  setup () {
    // const y = ref(0)
    // onMounted(() => {
    //   window.onscroll = () => {
    //     console.log('y', document.documentElement.scrollTop)
    //     y.value = document.documentElement.scrollTop
    //   }
    // })
    // return { y }

    const { x, y } = useWindowScroll()
    return { x, y }
  }
}
</script>

<style scoped lang='less'>
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  transform: translateY(-100%);
  opacity: 0;
  &.show {
    transform: none;
    transition: all 0.5s linear;
    opacity: 1;
  }
  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 200px;
    height: 80px;
    background: url(../assets/images/logo.png) no-repeat  right 2px;
    background-size: 160px auto;
  }
  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid @mainColor;
    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;
      &:hover {
        color: @mainColor;
      }
    }
  }
}
</style>
