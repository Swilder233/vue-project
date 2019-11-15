import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueTouch from "vue-touch"
import store from "./store"
// 公共属性
import Observer from "./observer"
Vue.prototype.$observer = Observer;

Vue.use(VueTouch,{name:"v-touch"})
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
