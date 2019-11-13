import http from "@utils/request";

// r=class/category&type=1   r="class/category",type=1
// 获取分类页所有数据
export const kindApi=(r="class/category",type=1)=>http({
    method:"get",
    url:"/index.php",
    data:{
        r:r,
        type:type,
    }
})


// 根据cid获取右边的数据
// export const kindCidApi=()

