import http from "@utils/request";

//每日半价
export const halfInfoList = (currentSession) => http({
    method: "get",
    url: "/api/goods/price/get-half-of-daily-current-session-list",//每日半价
    data: {
        currentSession:currentSession,
        nextDay:false
    }
})