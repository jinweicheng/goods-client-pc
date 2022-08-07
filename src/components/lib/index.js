// 扩展vue原有的功能：全局组件，自定义指令，挂载原型方法，注意：没有全局过滤器。
// 这就是插件
// vue2.0插件写法要素：导出一个对象，有install函数，默认传入了Vue构造函数，Vue基础之上扩展
// vue3.0插件写法要素：导出一个对象，有install函数，默认传入了app应用实例，app基础之上扩展
import AppSkeleton from './app-skeleton.vue'
import AppCarousel from './app-carousel.vue'
import AppMore from './app-more.vue'
import defaultImg from '@/assets/images/200.png'
export default {
  install (app) {
    // 在app上进行扩展，app提供 component directive 函数
    // 如果要挂载原型 app.config.globalProperties 方式
    app.component(AppSkeleton.name, AppSkeleton)
    app.component(AppCarousel.name, AppCarousel)
    app.component(AppMore.name, AppMore)
    defineDirection(app)
  }
}
// 自定义指令：v-lazyload
const defineDirection = (app) => {
  app.directive('lazyload', {
    mounted (el, binding) {
      // el为dom，binding为绑定dom对象的属性值
      const observe = new IntersectionObserver(([{ isIntersecting }]) => {
        // 监听dom对象是否进入可视区
        if (isIntersecting) {
          observe.unobserve(el)
          el.onerror = () => {
            el.src = defaultImg
          }
          el.src = binding.value
        }
      }, {
        threshold: 0.01
      })
      // 监听dom对象
      observe.observe(el)
    }
  })
}
