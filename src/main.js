import Vue from 'vue'
import App from './App.vue'
// 导入路由实例对象
import router from './router'
// 导入 vuex 数据状态管理库
import store from './store'
// 导入全局样式文件
import '@/styles/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
