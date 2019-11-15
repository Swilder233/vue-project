import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueTouch from "vue-touch"
import store from "./store"
// 公共属性
import Observer from "./observer"
Vue.prototype.$observer = Observer;

Vue.use(VueTouch,{name:"v-touch"})


import Vant from 'vant'
import 'vant/lib/index.css'; 
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
