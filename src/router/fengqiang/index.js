export default {
    path:"/fengqiang",
    component:()=>import("@pages/fengqiang"),
    name:"fengqiang",
    meta:{
        headerFlag:false,
        tabbarFlag:false,
    },
    children:[
        {
            path:"goods/:id",
            component:()=>import("@components/fengqiang"),
            name:"goods",
            meta:{
                headerFlag:false,
                tabbarFlag:false,
            },
        }
    ]
}