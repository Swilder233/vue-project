import Vue from "vue";
import VueRouter from "vue-router";
import kind from "./kind";

Vue.use(VueRouter);

const router=new VueRouter({
    mode:"hash",
    routes:[
        kind,
        // 分类下的列表
        // {
        //     path:"/",
        //     redirect:"/home"
        // },
        // {
        //     path:"/home",
        //     name:"home",
        //     component:_=>import("@pages/home")
        // },
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
            path:"/pinpai",
            component:_=>import("@pages/pinpaiDetail"),
            name:"pinpai",
        }
        
    ]
})


export default router;
