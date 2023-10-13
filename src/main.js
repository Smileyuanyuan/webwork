import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import less from 'less'
import './iconfont/iconfont.css'
import 'animate.css'
import 'wowjs/css/libs/animate.css'
import wow from 'wowjs'
import 'mutationobserver-shim'; //解决wow兼容
import { VueMasonryPlugin } from 'vue-masonry'


Vue.use(VueMasonryPlugin)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(less)
Vue.prototype.$wow = wow

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
