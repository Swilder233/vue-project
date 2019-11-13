import http from "@utils/request";


// 菜单键
export const homeCaidan = ()=>http({
    method:"get",
    url:"/api/category/get-category-list", 
})

// 品牌特卖
export const homeGoodsList = ()=>http({
    method:"get",
    url:"/api/category/product/model-detail-by-model-id-new", 
    data:{
        entityId:"4",
        modelId:"-1",
        proModelId:"1",
        source:"3",
        version:"v1",
        tuserId:"797808",
        isWechat:0
    }
})
// 轮播图
export const swiperList = ()=>http({
    method:"get",
    url:"/api/category/product/model-detail-by-model-id-new", 
    data:{
        entityId:"4",
        modelId:"-1",
        proModelId:"1",
        source:"3",
        version:"v1",
        tuserId:"797808",
        isWechat:0
    }
})

// 优惠
export const youhuiList = ()=>http({
    method:"get",
    url:"/api/category/product/model-detail-by-model-id-new",
    data:{
        entityId:"4",
        modelId:"12798",
        proModelId:"2",
        source:"3",
        version:"v1",
        tuserId:"797808",
        isWechat:0
    }
})
// 品牌特卖
export const pinpaiList = ()=>http({
    method:"get",
    url:"/api/category/product/model-detail-by-model-id-new",
    data:{
        entityId:"4",
        modelId:"12802",
        proModelId:"21",
        source:"3",
        version:"v1",
        tuserId:"797808",
        isWechat:0
    }
})


// 发现好货
export const findGoodsList = ()=>http({
    method:"get",
    url:"/api/category/index/lingquan-live-new",
    data:{
        pageId:"1",
        pageSize:"10",
        entityId:"4",
        type:"1",
        version:"v1",
        tuserId:"797808",
        isWechat:0
    }
})
export const ceshi = ()=>http({
    method:"get",
    url:"/ajax/getBookMenu?bookId=42904&pageNum=1&pageSize=50&sortType=0",
    // data:{
    //     pageId:"1",
    //     pageSize:"10",
    //     entityId:"4",
    //     type:"1",
    //     version:"v1",
    //     tuserId:"797808",
    //     isWechat:0
    // }
})