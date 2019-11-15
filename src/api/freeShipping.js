import http from "@utils/request";

//精选
export const freeInfoList = (r = "nine/listajax", n_id = "58", page = 1, cac_id = "") => http({
    method: "get",
    url: "/index.php",//精选
    data: {
        r: r,
        n_id: n_id,
        page: page,
        page: page
    }
})
//9块9每日精选 3.9元区 5.9元区 19.9元专区 8.9元区 新品专区
//http://www.mangguozhe.com/index.php?r=nine/listajax&page=1&storey=1&n_id=2&cac_id=
//http://www.mangguozhe.com/index.php?r=nine/listajax&page=1&storey=1&n_id=9&cac_id=
//http://www.mangguozhe.com/index.php?r=nine/listajax&page=1&storey=1&n_id=16&cac_id=
//http://www.mangguozhe.com/index.php?r=nine/listajax&page=1&storey=1&n_id=23&cac_id=
//http://www.mangguozhe.com/index.php?r=nine/listajax&page=1&storey=1&n_id=30&cac_id=
//http://www.mangguozhe.com/index.php?r=nine/listajax&page=1&storey=1&n_id=37&cac_id=
export const areaInfoList = (r = "nine/listajax", page = 1, storey = 1, n_id = 58, cac_id = "") => http({
    method: "get",
    url: "/index.php",//专区
    data: {
        r: r, 
        page: page,
        storey: storey,
        n_id: n_id,
        cac_id: cac_id,
    }
})



























// // 居家百货
// export const jjInfoList = (r ="nine/listajax", n_id =65, page = 1, cac_id ="") => http({
//     method: "get",
//     url: "index.php?r=nine/listajax&n_id=65&page=1&cac_id=",
//     data: {
//     }
// })
// //美食
// export const msInfoList = (r ="nine/listajax", n_id =296, page = 1, cac_id ="") => http({
//     method: "get",
//     url: "/index.php?r=nine/listajax&n_id=296&page=1&cac_id=",
//     data: {
//     }
// })
// //服装
// export const fzInfoList = (r ="nine/listajax", n_id =597, page = 1, cac_id ="") => http({
//     method: "get",
//     url: "/index.php?r=nine/listajax&n_id=597&page=1&cac_id=",
//     data: {
//     }
// })
// //配饰
// export const psInfoList = (r ="nine/listajax", n_id =604, page = 1, cac_id ="") => http({
//     method: "get",
//     url: "/index.php?r=nine/listajax&n_id=604&page=1&cac_id=",
//     data: {
//     }
// })
// //美妆
// export const mzInfoList = (r ="nine/listajax", n_id =611, page = 1, cac_id ="") => http({
//     method: "get",
//     url: "/index.php?r=nine/listajax&n_id=611&page=1&cac_id=",
//     data: {
//     }
// })
// //内衣
// export const nyInfoList = (r ="nine/listajax", n_id =618, page = 1, cac_id ="") => http({
//     method: "get",
//     url: "/index.php?r=nine/listajax&n_id=618&page=1&cac_id=",
//     data: {
//     }
// })
// //母婴
// export const myInfoList = (r ="nine/listajax", n_id =625, page = 1, cac_id ="") => http({
//     method: "get",
//     url: "/index.php?r=nine/listajax&n_id=625&page=1&cac_id=",
//     data: {
//     }
// })
// //箱包
// export const xbInfoList = (r ="nine/listajax", n_id =8703, page = 1, cac_id ="") => http({
//     method: "get",
//     url: "/index.php?r=nine/listajax&n_id=625&page=1&cac_id=",
//     data: {
//     }
// })
// //数码配件
// export const smInfoList = (r ="nine/listajax", n_id =632, page = 1, cac_id ="") => http({
//     method: "get",
//     url: "/index.php?r=nine/listajax&n_id=632&page=1&cac_id=",
//     data: {
//     }
// })
// //文娱车品
// export const wyInfoList = (r ="nine/listajax", n_id =639, page = 1, cac_id ="") => http({
//     method: "get",
//     url: "/index.php?r=nine/listajax&n_id=639&page=1&cac_id=",
//     data: {
//     }
// })