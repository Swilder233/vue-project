<template>
     <div class="yijian">
        <div class="top">
            <a href="#" class="iconfont" @click="handleBack()">&#xe605;</a>
            <span>快速反馈</span>
            <i class="iconfont" @click="handleCaidan()">&#xe606;</i>
        </div>

        <div class="content">
            <h2>反馈类型</h2>

            <van-tabs v-model="active" class="xuanxiang">
            <van-tab v-for="(item,index) in xuanxiang" :key="index" :title="item" class="xuanxiang_item"></van-tab>
            </van-tabs>
            <!-- <ul>
                <li>9.9包邮</li>
                <li>咚咚抢</li>
                <li>每日半价</li>
                <li>综合反馈</li>
            </ul> -->
            <h2>错误描述</h2>
            <textarea cols="30" rows="10" placeholder="请在此输入您的意见" v-model="content"></textarea>
            
            <hr>
            <input type="text" class="qq" placeholder="请在此输入您的邮箱" v-model="qq">
            <p>您的宝贵建议是我们前进的动力，真诚感谢您！</p>
        </div>

        <div class="bottom">
            <button @click="handleSend()">提交</button>
        </div>
    </div>
</template>

<script>
import Message from "../../lib/messageBox/index.js";
export default {
    name:"yijian",
    data(){
        return{
            active:"",
            content:"",
            qq:"",
            flag:false,
            xuanxiang:["9.9包邮","咚咚抢","每日半价","综合反馈"],
            shuju:JSON.parse(localStorage.getItem("fankui")) || []
        }
    },
    methods:{
        handleBack(){
            this.$router.back();
        },
        handleCaidan(){
            if(this.flag == 0){
                 Message({
                     flag:true
                 });
                 this.flag = 1;
            }else{
                 Message({
                     flag:false
                 });
            }
        },
        handleSend(){
            let reg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g;
            if(this.content!="" && reg.test(this.qq)){
                // console.log(this.active,this.content,this.qq);
                let obj = {
                    title:this.xuanxiang[this.active],
                    content:this.content,
                    QQ:this.qq
                }
                this.shuju.push(obj);
                // console.log(this.shuju);
                localStorage.setItem("fankui",JSON.stringify(this.shuju));
                this.active = 0;
                this.content = "";
                this.qq = "";
                alert("反馈成功，谢谢您的帮助，我的会再接再厉！");
            }else{
                alert("请填写正确的信息！");
            }
        }
    }
}
</script>

<style scoped>
 .yijian{
            position: absolute;
            left: 0;
            right: 0;
            bottom:0;
            top: 0;
            width: 100%;
        }
        .top{
            width: 100%;;
            padding: 0 .1rem;
            height: .45rem;
            position: fixed;
            top: 0;
            background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2;
        }
        .top span{
            flex: 1;
            text-align: center;
            font-size: .17rem;
            color: #fff;
        }
        .top a{
            color: #fff;
        }
        .top i{
            color: #fff;
        }

        .content{
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            padding: .45rem .1rem .5rem .1rem;
            background:#fff;
            overflow: scroll;
            font-weight: normal;
        }
        .content h2{
            font-size: .15rem;
            margin: .2rem 0 .05rem 0;
        }
        .content ul{
            height: .4rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border-bottom: 1px solid #ccc;
            padding-bottom: .1rem
        }
        .content ul li{
            width: .66rem;
            color: #999;
            border: 1px solid #999;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: .05rem 0;
        }
        .content textarea{
            width: 2.94rem;
            height: 2rem;
            padding: .08rem .2rem 0 .2rem;
            background: #FCFAFC;
            resize: none;
        }
        .content .qq{
            padding: 0 .08rem;
            width: 100%;
            height: .4rem;
            margin-bottom: .18rem;
            background: #FCFAFC;
            border: 1px solid #ccc;
        }
        .content p{
            font-size: .13rem;
            color: #999;
        }

        .bottom{
            height: .45rem;
            width: 100%;
            padding: 0 .13rem;
            margin: 0 auto;
            position: fixed;
            bottom: .05rem;
            left: 0;
            z-index: 2;

        }
        .bottom button{
            width: 2.94rem;
            height: 100%;
            margin: 0 auto;
            background:#ccc;
            color: #fff;
            font-size: .17rem;
            border-radius: .05rem;
            border: none;
        }
</style>