import { userInfoList } from "@api/register";

let state = {
    username: "",
    password: "",
    userList: []
}
let actions = {

}
let mountions = {
    handleName(state,e){
        let val=e.target.value;
        state.username=val;
    }
}
let getters = {

}

export default {
    state,
    actions,
    mountions,
    getters,
    namespaced: true
}