import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueTouch from "vue-touch"
import store from "./store"
import "@common/filter"

// import { Toast } from 'mint-ui';
// 公共属性
import Observer from "./observer"
import '@common/components'
import Vant from 'vant'
import 'vant/lib/index.css';   
Vue.use(Vant)

Vue.prototype.$observer = Observer;
// Vue.use(Toast);
Vue.use(VueTouch,{name:"v-touch"})



Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
