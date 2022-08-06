<template>
  <div class="home-entry">
    <!-- 1、轮播模块 -->
    <div class="container">
      <!-- 轮播图 -->
      <HomeBanner/>
      <!-- 左侧分类 -->
      <HomeCategory />
    </div>

    <!-- 2、新鲜好物 -->
    <HomeNew />
    <!-- 3、热门推荐 -->
    <HomeHot />
    <!-- 4、品牌 -->
    <HomeBrand />
  </div>
</template>
<script>
import HomeCategory from './components/home-category'
import HomeBanner from './components/home-banner'
import HomeNew from './components/home-new.vue'
import HomeHot from './components/home-hot.vue'
import HomeBrand from './components/home-brand.vue'
export default {
  name: 'PageHome',
  components: { HomeCategory, HomeBanner, HomeNew, HomeHot, HomeBrand }
}
</script>
<style scoped lang="less">
// .home-entry {
  // margin-bottom: 20px;
// }
:deep(.app-carousel) {
  .carousel-btn.prev{
    left: 270px;
  }
  .carousel-indicator{
    padding-left: 250px;
  }
}
</style>
