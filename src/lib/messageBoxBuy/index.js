import MessageBoxBuy from "./index.vue";
import Vue from "vue";

export default (()=>{
    let defaultValue={
        title:"提示",
        content:"内容",
        ok:function(){}

    }

    let BoxBuyFn=Vue.extend(MessageBoxBuy);

    let MessageBoxCb=(options)=>{
        for(var key in options){
            defaultValue[key]=options[key];
        }

        let messageBoxVm=new BoxBuyFn({
            el:document.createElement("div"),
            data:{
                title:defaultValue.title,
                content:defaultValue.content,
            },
            methods:{
                handleOk(){
                    document.body.removeChild(messageBoxVm.$mount().$el)
                    defaultValue.ok && defaultValue.ok()
                },
                handleClose(){
                    document.body.removeChild(messageBoxVm.$mount().$el)
                    defaultValue.ok && defaultValue.ok()
                }
            }
        })

        document.body.appendChild(messageBoxVm.$mount().$el)
    }
    MessageBoxCb.type="function";
    return MessageBoxCb;


})()

