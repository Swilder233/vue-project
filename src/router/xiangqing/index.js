export default {
    path:"/xiangqing",
    component:()=>import("@pages/xiangqing"),
    name:"xiangqing",
    meta:{
        headerFlag:false,
        tabbarFlag:false,
    },
    children:[
        {
            path:"xqc",
            name:"xqc",
            component:()=>import("@components/content"),
            meta:{
                headerFlag:false,
                tabbarFlag:false,
            },
        }
    ]
}