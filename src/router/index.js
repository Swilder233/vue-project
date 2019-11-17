import Vue from "vue";
import VueRouter from 'vue-router';
import freeshipping from './freeshipping'
import kind from "./kind";
Vue.use(VueRouter);
const router = new VueRouter({
    linkActiveClass: 'active', // 这是链接激活时的class
    mode: "hash",
    routes: [
        freeshipping,
        
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
            ]
        },
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
       
        {
            path: "/list",
            component: _ => import("@pages/list"),
            name: "list",
        },
        {
            path: ""
        }
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
