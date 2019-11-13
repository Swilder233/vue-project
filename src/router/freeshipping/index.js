export default{
        path:"/freeshipping",
        component:_=>import("@pages/freeshipping"),
        name:"freeshipping",
        meta:{
            headerflag:true,
        },
        children:[
            // {
            //     path:"/freeshipping",
            //      redirect:"/freeshipping/jx1",//精选
            // },
            {
                path:"jx1",
                component:_=>import("@components/jx1"),//导航栏
                name:"jx1",
                meta:{
                    headerflag:true,
                }, 
            } 
        ]
}