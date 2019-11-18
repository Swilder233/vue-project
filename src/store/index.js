import Vue from "vue";
import Vuex from "vuex";
import kind from "./kind";
Vue.use(Vuex);

const store=new Vuex.Store({
    modules:{
        kind
    }
})


export default store;
