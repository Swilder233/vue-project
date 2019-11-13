import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import router from './router'
=======
import router from "./router"
import store from "./store"
// 公共属性
import Observer from "./observer"
Vue.prototype.$observer = Observer;

>>>>>>> refs/remotes/origin/master

Vue.config.productionTip = false

new Vue({
<<<<<<< HEAD
=======
  store,
>>>>>>> refs/remotes/origin/master
  router,
  render: h => h(App)
}).$mount('#app')
