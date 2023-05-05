import Vue from 'vue'
import App from './App.vue'

// 导入路由实例对象
import router from './router'

// 导入 vuex 数据状态管理库
import store from './store'

// 导入全局样式文件
import '@/styles/index.less'

// 导入字体图标样式文件
import '@/styles/icon.less'

// 导入 Vant 核心组件库
import Vant from 'vant'
// 导入 Vant 样式表文件
import 'vant/lib/index.css'

// 将 Vant 组件库安装为 Vue 的插件
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
