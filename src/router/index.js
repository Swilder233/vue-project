import Vue from "vue";
import VueRouter from "vue-router";
// import VueTouch from "vue-touch";
import home from "./home";
import mine from "./mine";
import fengqiang from "./fengqiang";
import freeshipping from './freeshipping';
import kind from "./kind";

Vue.use(VueRouter);
// Vue.use(VueTouch,{name:"v-touch"});
const router = new VueRouter({

    mode: "hash",
    routes: [
        freeshipping,
        kind,
        // search,
     
        {
            path:"/mine",
            component:()=>import("@pages/mine"),
            name:"mine",
            meta:{
                headerFlag:false,
                tabbarFlag:true,
                requiredAuth:true
            }
        },
      
        {
            path: "/special",
            component: _ => import("@pages/special"),//专区
            name: "special",
            meta: {
                tabbarFlag: true,
            }
        },
        {
            path: "/login",
            component: _ => import("@pages/login"),//登录
            name: "login",
            meta: {
                tabbarFlag: false,
            }
        },
        {
            path: "/register",
            component: _ => import("@pages/register"),//注册
            name: "register",
            meta: {
                tabbarFlag: false,
            }
        },
        {
            path: "/merchant",
            component: _ => import("@pages/merchant"),//商家店铺
            name: "merchant",
            meta: {
                tabbarFlag: false
            }
        },
        {
            path: "/search",
            component: _ => import("@pages/search"),//搜索
            name: "search",
            meta: {
                tabbarFlag: false,
            }  
        },
        {
            path: "/half",
            redirect:"/half/meiri",
            component: _ => import("@pages/half"),//每日半价
            name: "half",
            meta: {
                tabbarFlag: false
            },
            children: [
                {
                    path: "meiri",
                    component: _ => import("@components/meiri"),//每日半价下的疯抢
                    name: "meiri",
                    meta: {
                        tabbarFlag: false,
                    }
                },
            ]},
            {   
                path: "/dongdong",
                redirect:"/dongdong/feng",
                component: _ => import("@pages/dongdong"),//咚咚抢
                name: "dongdong",
                meta: {
                    tabbarFlag: true,
                },
                children: [
                    {
                        path: "feng",
                        component: _ => import("@components/feng"),//咚咚抢下的疯抢
                        name: "feng",
                        meta: {
                            tabbarFlag: false,
                        }
                    },
                ]
            },
        
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
        },
        {
            path:"/fengqiang",
            redirect:"/fengqiang/goods/4"
        },       
        home,
        mine,
        fengqiang,
    ]
})

        //全局守卫进行token判断
    router.beforeEach((to,from,next)=>{
        if(to.path != "/login" && to.meta.requiredAuth){
            console.log(111)
            if(document.cookie.indexOf("token")==0){
                next();
                
            }else{
                next({name:"login",params:{path:to.path}});
            }
        }else{
            next();
        }
    })
export default router
