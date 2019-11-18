import Vue from "vue";
import VueRouter from "vue-router";
import VueTouch from "vue-touch";
import home from "./home";
import mine from "./mine";
import kind from "./kind"
import fengqiang from "./fengqiang";
// import { Swipe, SwipeItem } from 'vant';
// Vue.use(Swipe).use(SwipeItem);
Vue.use(VueRouter);
Vue.use(VueTouch,{name:"v-touch"});
const router = new VueRouter({
    mode:"hash",
    routes:[
        kind,
        {
            path:"/",
            component:_=>import("@pages/home"),
            meta:{
                tabbarFlag:true,
            }  
        },
        // 分类下的列表
        {
            path:"/list",
            component:_=>import("@pages/list"),
            name:"list",  
            children:[
                {
                    path:"/list",
                    redirect:"/list/child"
                },
                {
                    path:"child",
                    component:_=>import("@components/listChild"),
                    name:"child",
             
                },
            ]
        },
        // detail
        {
            path:"/detail",
            component:_=>import("@pages/detail"),
            name:"detail",
            
        },
        // 品牌详情
        {
            path:"/pinpai/:brandId",
            component:_=>import("@pages/pinpaiDetail"),
            name:"pinpai",
        },
        {
            path:"/fengqiang",
            redirect:"/fengqiang/goods/4"
        }, 
        //  
        {
            path:"/mycart",
            component:_=>import("@pages/mycart"),
            name:"mycart",
            // meta:{
            //     tabbarFlag:true,
            // }  
        },
        home,
        mine,
        fengqiang,
    ]
})

export default router;