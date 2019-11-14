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
        {
            path: "/mine",
            component: _ => import("@pages/mine"),//我的
            name: "mine",
            meta: {
                tabbarFlag: true,
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
export default router
