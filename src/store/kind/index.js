import {kindApi} from "@api/kind";
let state={
    kindList:[],
}

let actions={
    async handleGetList({commit}){
        let data = await kindApi();
        // console.log(data.data.data);
        commit("handlekind",data.data.data)
    }
}


let mutations={
    handlekind(state,list){
        state.kindList=list;
        // console.log(state.kindList)
        // console.log(state.kindList[0])
    }
}

let getters={

}

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced:true
}