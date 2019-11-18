import http from "@utils/request";

// 品牌详情介绍(上)
export const pinpaiApi=(brandId)=>http({
    method:"get",
    url:"/api/tb-service/brand/detail-info?brandId="+brandId,
})


// 品牌详情下的列表
// export const pinpaiListApi=()=>http({
//     method:"get",
//     url:"/index.php?r=class%2Fcyajaxsub&page=1&cid=282&px=t&cac_id=",
// })

export const pinpaiListApi=(brandId)=>http({
    method:"get",
    url:"/index.php?r=brand/branddetaillist",
    data:{
        token: false,
        brand_id: brandId,
        page: 1,
        tuserId: 797808,
        entityId: 4
    }
})




