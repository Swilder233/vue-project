export default {
    path:"/mine",
    component:()=>import("@pages/mine"),
    name:"mine",
    meta:{
        headerFlag:false,
        tabbarFlag:true,
    }
}