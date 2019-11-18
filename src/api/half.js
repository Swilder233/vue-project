import http from "@utils/request";

///导航栏  http://cmsjapi.ffquan.cn/api/goods/price/half-of-daily-session

export const dailyInfoList = () => http({
    method: "get",
    url: "/api/goods/price/half-of-daily-session",
    data: {
        // currentSession:currentSession,
        // nextDay:false
    }
})
//每日半价
export const halfInfoList = (currentSession) => http({
    method: "get",
    url: "/api/goods/price/get-half-of-daily-current-session-list",//每日半价
    data: {
        currentSession:currentSession,
        nextDay:false
    }
})