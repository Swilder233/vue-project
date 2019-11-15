import Vue from 'vue';
import BSscroll from "./bscroll"
let componentMap=[
    BSscroll
]
componentMap.forEach((item)=>{
    Vue.component(item.name,item)
})