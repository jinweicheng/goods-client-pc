import { createRouter, createWebHashHistory } from 'vue-router'
const Layout = () => import('@/views/layout.vue')
const Home = () => import('@/views/home')
const TopCategory = () => import('@/views/category/topCategory.vue')
const SubCategory = () => import('@/views/category/subCategory.vue')
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: Home },
      { path: '/category/:id', component: TopCategory },
      { path: '/category/sub/:id', component: SubCategory }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
