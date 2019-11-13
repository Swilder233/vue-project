import Vue from "vue";
import VueRouter from "vue-router";
import VueTouch from "vue-touch";
import home from "./home";
import mine from "./mine";
// import { Swipe, SwipeItem } from 'vant';
// Vue.use(Swipe).use(SwipeItem);
Vue.use(VueRouter);
Vue.use(VueTouch,{name:"v-touch"});
const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        home,
        mine
    ]
})

export default router;