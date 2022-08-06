<template>
  <div ref="target">
    <HomePanel title="热门品牌" sub-title="国际经典 品质保证">
      <template v-slot:right>
        <a @click="toggleFn(-1)" :class="{disabled: index===0}" href="javascript:;" class="iconfont icon-angle-left prev"></a>
        <a @click="toggleFn(1)" :class="{disabled: index===1}" href="javascript:;" class="iconfont icon-angle-right next"></a>
      </template>
      <div class="box" ref="box">
        <Transition name="fade">
          <!-- 品牌内容 -->
          <ul v-if="brands.length" class="list" :style="{transform: `translateX(${-index*1240}px)`}">
            <li v-for="item in brands" :key="item.id">
              <RouterLink to="/">
                <img :src="item.picture" alt="">
              </RouterLink>
            </li>
          </ul>
          <!-- 品牌骨架 -->
          <div v-else class="skeleton">
            <AppSkeleton class="item" v-for="i in 5" :key="i" animated bg="#e4e4e4" width="240px" height="305px"/>
          </div>
        </Transition>
      </div>
    </HomePanel>
  </div>
</template>

<script>
import { ref } from 'vue'
import HomePanel from './home-panel'
import { findBrand } from '@/api/home'
import { useLazyData } from '@/hooks'
export default {
  name: 'HomeBrand',
  components: { HomePanel },
  setup () {
    // 1、获取数据
    // findBrand(10).then(data => {
    //   lists.value = data.result
    // })
    const target = ref(null)
    const { result } = useLazyData(target, () => findBrand(10))
    console.log('brands', result)
    // 2、切换页面
    const index = ref(0)
    const toggleFn = (step) => {
      const newIndex = index.value + step
      if (newIndex < 0 || newIndex > 1) {
        return
      }
      index.value = newIndex
    }
    return { index, toggleFn, brands: result, target }
  }
}
</script>

<style scoped lang='less'>
.skeleton {
  width: 100%;
  display: flex;
  .item {
    margin-right: 10px;
    &:nth-child(5n) {
      margin-right: 0;
    }
  }
}
.home-panel {
  background:#f5f5f5
}
.iconfont {
  width: 20px;
  height: 20px;
  background: #ccc;
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  background: @mainColor;
  &::before {
    font-size: 12px;
    position: relative;
    top: -2px
  }
  &.disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}
.box {
  display: flex;
  width: 100%;
  height: 345px;
  overflow: hidden;
  padding-bottom: 40px;
  .list {
    width: 200%;
    display: flex;
    transition: all 1s;
    li {
      margin-right: 10px;
      width: 240px;
      &:nth-child(5n) {
        margin-right: 0;
      }
      img {
        width: 240px;
        height: 305px;
      }
    }
  }
}
</style>
