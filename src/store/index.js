import Vue from "vue";
import Vuex from "vuex";
import kind from "./kind";
import register from "./register"
Vue.use(Vuex);

const store=new Vuex.Store({
    modules:{
        kind,
        register,
    }
})


export default store;
