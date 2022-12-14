import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './assets/styles/common.less'
import commonUI from './components/lib/index'
createApp(App).use(store).use(router).use(commonUI).mount('#app')
// createApp(App).use(store).use(router).mount('#app')
