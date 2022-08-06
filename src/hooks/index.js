// 组件进入可视区，懒加载组件
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'

export const useLazyData = (target, apiFn) => {
  const result = ref([])
  // const target = ref(null)
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }], observelElement) => {
      if (isIntersecting) {
        console.log('进入可视区')
        stop()
        apiFn().then(data => {
          result.value = data.result
        })
      }
    }
  )
  return { result }
}
