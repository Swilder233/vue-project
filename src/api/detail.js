import http from "@utils/request"

//商品图片详情
export const detailImgApi=(goodsid)=>http({
    method:"get",
    url:"/api/goods/get-goods-detail-img?goodsId="+goodsid,

})
//good info
export const detailInfoApi=(goodsid)=>http({
    method:"get",
    url:"/api/goods/get-goods-shop-info?goodsId="+goodsid,
})

 //商品推荐
export const detailRecommendApi=(id)=>http({
    method:"get",
    url:"/api/goods/get-recommend-goods?id="+id,
})

// 商品相似推荐
export const detailSimilarApi=(id)=>http({
    method:"get",
    url:"/api/goods/get-similar-goods?id="+id+"&categoryId=3035"
})



