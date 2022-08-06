<template>
  <div class="app-carousel" @mouseenter="stopTimerFn" @mouseleave="startTimerFn">
    <ul class="carousel-body">
      <!-- 轮播图 -->
      {
        {{banners}}
      }
      <li class="carousel-item" v-for="(item,i) in banners" :key="item.id" :class="{fade:index===i}">
        <RouterLink to="/">
          <img :src="item.imgUrl" alt="">
        </RouterLink>
      </li>
    </ul>
    <!-- 上一张、下一张 -->
    <a href="javascript:;" class="carousel-btn prev" @click="nextfn(-1)"><i class="iconfont icon-angle-left"></i></a>
    <a href="javascript:;" class="carousel-btn next"  @click="nextfn(1)"><i class="iconfont icon-angle-right"></i></a>
    <!-- 指示器 -->
    <div class="carousel-indicator">
      <span v-for="(item,i) in banners" @click="clickIndicator(i)" :key="item.id" :class="{active:index===i}"></span>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  name: 'AppCarousel',
  props: {
    banners: {
      type: Array,
      default: () => []
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 1000
    },
    width: {
      type: String,
      default: '1240px'
    },
    height: {
      type: String,
      default: '500px'
    }
  },
  setup (props) {
    const index = ref(0)

    // 1、自动轮播图
    let timer = null
    const autoplayfn = () => {
      clearInterval(timer)
      timer = setInterval(() => {
        index.value++
        if (index.value >= props.banners.length) {
          index.value = 0
        }
      }, props.duration)
    }
    // 数据变化的时候开启定时器
    watch(() => props.banners, (newValue) => {
      console.log('watch entry', newValue, props.autoplay)
      if (newValue.length && props.autoplay) {
        index.value = 0
        autoplayfn()
      }
    }, { immediate: true })

    // 2、鼠标进入停止定时器
    const stopTimerFn = () => {
      clearInterval(timer)
    }
    const startTimerFn = () => {
      if (props.banners.length && props.autoplay) {
        autoplayfn()
      }
    }

    // 3、pre next切换
    const nextfn = (step) => {
      const newIndex = index.value + step
      if (newIndex < 0) {
        index.value = props.banners.length - 1
        return
      }
      if (newIndex >= props.banners.length) {
        index.value = 0
        return
      }
      index.value = newIndex
    }

    // 4、点击指示器切换
    const clickIndicator = (value) => {
      index.value = value
    }

    return { index, nextfn, stopTimerFn, startTimerFn, clickIndicator }
  }
}
</script>
<style scoped lang="less">
.app-carousel{
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
  .carousel{
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0,0,0,0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background:  #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0,0,0,.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      &.prev{
        left: 20px;
      }
      &.next{
        right: 20px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>
