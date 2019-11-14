import http from "@utils/request";


// 菜单键
export const fengqiangCaidan = ()=>http({
    method:"get",
    url:"/api/goods/rushing-ranking/cate-list/v1", 
})

// 商品列表
export const goodsList = (cd=6)=>http({
    method:"get",
    url:"/api/goods/rushing-ranking/goods-list2/v2", 
    data:{
        type:1,
        cId:cd
    }
})