import Vue from "vue";
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
    ]
})


export default router;
