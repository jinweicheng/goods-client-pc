<template>
  <div class="home-new" ref="target">
    <!-- 面板标题 -->
    <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
      <template #right><AppMore path="/test" /> </template>
      <!-- 面板内容 -->
      <Transition name="fade">
        <ul v-if="goods.length" class="goods-list">
          <li v-for="item in goods" :key="item.id">
            <RouterLink :to="`/product/${item.id}`">
              <img v-lazyload="item.picture" alt="">
              <p class="name ellipsis">{{item.name}}</p>
              <p class="price">&yen;{{item.price}}</p>
            </RouterLink>
          </li>
        </ul>
        <HomeSkeleton v-else></HomeSkeleton>
      </Transition>
    </HomePanel>
  </div>
</template>

<script>
import { ref } from 'vue'
import HomePanel from './home-panel.vue'
import { findNew } from '@/api/home'
import HomeSkeleton from './home-skeleton.vue'
import { useLazyData } from '@/hooks'
export default {
  name: 'HomeNew',
  components: {
    HomePanel,
    HomeSkeleton
  },
  setup () {
    // const goods = ref([])
    // findNew().then(data => {
    //   console.log('findNew', data.result)
    //   goods.value = data.result
    // })
    const target = ref(null)
    const { result } = useLazyData(target, findNew)
    return { goods: result, target }
  }
}
</script>

<style scoped lang="less">
.home-new {
  .goods-list {
    display: flex;
    justify-content: space-between;
    height: 406px;
    li {
      width: 306px;
      height: 406px;
      background: #f0f9f4;
      .hoverShadow();
      img {
        width: 306px;
        height: 306px;
      }
      p {
        font-size: 22px;
        padding: 12px 30px 0 30px;
        text-align: center;
      }
      .price {
        color: @priceColor;
      }
    }
  }
}

</style>
