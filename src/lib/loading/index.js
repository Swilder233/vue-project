import Vue from "vue";
import LoadingView from "./index.vue";

 class JSLoading{
     constructor(){
         let loadingFn = Vue.extend(LoadingView);
         this.loadingVm = new loadingFn({
             el:document.createElement("div")
         })
     }
     loadingMount(){
         document.body.appendChild(this.loadingVm.$mount().$el);
     }
     loadingDestroy(){
         document.body.removeChild(this.loadingVm.$mount().$el);
     }
 }


 export default new JSLoading;