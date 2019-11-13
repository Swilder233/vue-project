import Vue from "vue";
<<<<<<< HEAD
import  VueRouter from 'vue-router';
import freeshipping from './freeshipping'
Vue.use(VueRouter);

const router=new VueRouter({
    linkActiveClass: 'active', // 这是链接激活时的class
    mode:"hash",
    routes:[
       freeshipping,
       {
           path:"/mine",
           component:_=>import("@pages/mine"),//我的
           name:"mine",
           meta:{
               tabbarFlag:true,
           }
       },
       {
           path:"/special",
           component:_=>import("@pages/special"),//专区
           name:"special",
           meta:{
                 tabbarFlag:true,
           }
       },   
       {
           path:"/login",
           component:_=>import("@pages/login"),//专区
           name:"login",
           meta:{
                 tabbarFlag:false,
           }
       },
       {
           path:"/merchant",
           component:_=>import("@pages/merchant"),
           name:"merchant",
           meta:{
               tabbarFlag:false
           }
       }   
=======
import VueRouter from "vue-router";
import kind from "./kind";

Vue.use(VueRouter);

const router=new VueRouter({
    mode:"hash",
    routes:[
        kind,
<<<<<<< HEAD
        {
            path:"/list",
            component:_=>import("@pages/list"),
            name:"list",   
        },
        {
            path:""
        }
=======
>>>>>>> huanhuan
>>>>>>> refs/remotes/origin/master
    ]
})


<<<<<<< HEAD
export default router
=======
export default router;
>>>>>>> refs/remotes/origin/master
