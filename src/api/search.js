import http from "@utils/request";
export const searchInfoList = (kw) => http({
    //r=index/kwarr&kw=%E5%84%BF%E7%AB%A5&token=false
    method: "get",
    url: "/index.php",//搜索
    data: {
        kw:kw,
        r:"index/kwarr",
        token:false
    }
})