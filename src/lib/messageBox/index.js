import Vue from "vue";
import messageBox from "./index.vue";

export default (()=>{
    let defaultVal = {
        flag:false
    }
    let massageFn = Vue.extend(messageBox);

    return (options)=>{
        for(var key in options){
            console.log(options[key]);
            defaultVal[key] = options[key];
            console.log(defaultVal.flag);
        }
    let message = new massageFn({
        el:document.createElement("div"),
        data:{
            flag:defaultVal.flag
        },
        methods:{
            massageDestroy(){
                console.log(this.flag);
                document.body.removeChild(message.$mount().$el);
            }
        }
    })
    document.body.appendChild(message.$mount().$el);

}
})()