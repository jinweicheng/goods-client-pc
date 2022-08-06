<template>
  <div class="home-banner">
    <AppCarousel :banners="banners" autoplay/>
  </div>
</template>

<script>
import { findBanner } from '@/api/home.js'
import { ref } from 'vue'
export default {
  name: 'HomeBanner',
  setup () {
    const banners = ref([])
    findBanner().then(data => {
      console.log('banners', data.result)
      banners.value = data.result
    })
    return { banners }
  }
}
</script>

<style scoped lang="less">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 98;
}
</style>
