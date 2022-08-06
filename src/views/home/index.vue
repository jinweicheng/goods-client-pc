<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 轮播图 -->
        <HomeBanner/>
        <!-- 左侧分类 -->
        <HomeCategory />
      </div>
    </div>
  </div>
</template>
<script>
import HomeCategory from './components/home-category'
import HomeBanner from './components/home-banner'
export default {
  name: 'PageHome',
  components: { HomeCategory, HomeBanner }
}
</script>
<style scoped lang="less">
.app-carousel {
  :deep(carousel-btn.prev){
    left: 270px;
  }
  :deep(.carousel-indicator){
    padding-left: 250px;
  }
}
</style>
