import http from "@utils/request";

export const registerInfoList = (username="",password="") => http({
    method: "POST",
    url: "/users/register",//注册
    data: {
        username,
        password
    }
})
export const loginInfoList = (username="",password="") => http({
    method: "POST",
    url: "/users/login",//登录
    data: {
        username,
        password
    }
})