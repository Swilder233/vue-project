import http from "@utils/request";

// r=class/category&type=1   r="class/category",type=1
// 获取分类页所有数据
// export const kindApi=(r="class/category",type=1)=>http({
//     method:"get",
//     url:"/index.php",
//     data:{
//         r:r,
//         type:type,
//     }
// })


export const kindApi=()=>http({
    method:"get",
    url:"/index.php?r=class/category&type=1",
    // data:{
    //     r:r,
    //     type:type,
    // }
})


// 分类下的列表
export const kindListApi=(cid,px=t)=>http({
    method:"get",
    url:"/index.php?r=class%2Fcyajaxsub&page=1&cid="+cid+"&px="+px+"&cac_id=",
})


