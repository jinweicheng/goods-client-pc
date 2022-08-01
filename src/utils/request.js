import axios from 'axios'
import store from '@/store'
import router from '@/router'
const baseUrl = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  baseUrl,
  timeout: 5000
})
// 请求拦截器
instance.interceptors.request.use((config) => {
  const { profile } = store.state.user
  if (profile.token) {
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, (err) => {
  return Promise.reject(err)
})
// 响应拦截器
instance.interceptors.response.use((res) => {
  return res.data
}, (err) => {
  if (err.response && err.response.status === 401) {
    // 清除无效用户数据
    store.commit('user/setUser', {})
    // 跳转登陆页面
    const fullpath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push(`/login?redirectUrl=${fullpath}`)
    // 携带当前页面路由参数
    // router.currentRoute.value.fullPath
  }
  return Promise.reject(err)
})

// 导出请求对象
export default (url, method, submitData) => {
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
