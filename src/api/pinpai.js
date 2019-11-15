import http from "@utils/request";

// 品牌详情介绍
export const pinpaiApi=()=>http({
    method:"get",
    url:"/api/tb-service/brand/detail-info?brandId=4535252"
})

// 品牌详情下的列表
// export const pinpaiListApi=()=>http({
//     method:"post",
//     url:"/index.php?r=brand/branddetaillist",
//     data:{
//         token: false,
//         brand_id: 59531753,
//         page: 1,
//         tuserId: 797808,
//         entityId: 4
//     }
// })
export const pinpaiListApi=()=>http({
    method:"get",
    url:"/index.php?r=class%2Fcyajaxsub&page=1&cid=282&px=t&cac_id=",
})


