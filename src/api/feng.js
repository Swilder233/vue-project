import http from "@utils/request";

//咚咚抢
export const dongInfoList = (pageId=1) => http({
    method: "get",
    url: "/api/category/index/lingquan-live-new",//精选
    data: {
        pageId:pageId,
        pageSize: "10",
        entityId: "4",
        type: "1",
        version: "v1",
        tuserId: "797808",
        isWechat: "0"
    }
})