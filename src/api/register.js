import http from "@utils/request";

export const userInfoList = (name="",password="") => http({
    method: "post",
    url: "http://localhost:3000",//精选
    data: {
       name:name,
       password:password,
    }
})