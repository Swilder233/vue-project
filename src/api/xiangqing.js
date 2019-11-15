import http from "@utils/request";


// 菜单键
export const caidanList = ()=>http({
    method:"get",
    url:"/index.php?r=class/index&type=2", 
})
// 商品信息
export const goodsList = (cid,px)=>http({
    method:"get",
    url:"/index.php?r=index/ajaxcat&px="+px+"&cid="+cid+"&page=1&cac_id=", 
})