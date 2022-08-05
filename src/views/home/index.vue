<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
      </div>
    </div>
    <!-- <AppSkeleton width="200px" height="100px" bg="red" animated/> -->
  </div>
</template>
<script>
import HomeCategory from './components/home-category'
// import AppSkeleton from '@/components/lib/app-skeleton.vue'
export default {
  name: 'PageHome',
  components: { HomeCategory }
}
</script>
<style scoped lang="less"></style>
