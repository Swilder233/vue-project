<template>
    <div>
        <ul v-if="flag">
             <div class="sanjiao"></div>
            <!-- <router-link tag="li" v-for="(item,index) in messageList" :key="index" :to="item.path">
                <a href="#" class="iconfont" v-html="item.icon"></a>
                <span>{{item.text}}</span>
            </router-link> -->
            <li v-for="(item,index) in messageList" :key="index" @click="item.path">
                <a :href="item.path" @click="massageDestroy()">
                    <i class="iconfont" v-html="item.icon"></i>
                    <span>{{item.text}}</span>
                </a>
                
            </li>
        </ul>
    </div>
</template>

<script scoped>
export default {
    // name:"messagebox",
    data(){
        return{
            messageList:[
        {
            text:"首页",
            icon:"&#xe604;",
            path:"home"
        },
        {
            text:"搜索",
            icon:"&#xe613;",
            path:""
        },
        {
            text:"客服",
            icon:"&#xe634;",
            path:""
        },
        {
            text:"反馈",
            icon:"&#xe63b;",
            path:"/yijian"
        },
        {
            text:"我的",
            icon:"&#xe6f8;",
            path:"mine"
        }
    ]
        }
    },
    
}
</script>


<style scoped>
    ul{
        padding: 0 .05rem;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: .55rem;
        right: .1rem;
        border-radius: .03rem;
        z-index:6666666;
    }
    .sanjiao{
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-bottom-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: -0.2rem;
        right: 0.15rem;

    }
    ul li{
        width: 1.06rem;
        height: .45rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom:1px solid rgba(255, 255, 255,0.1);
    }
    ul li span{
        margin-left: .1rem;
        font-size: .14rem;
        color: #fff;
    }
    ul li i{
         font-size: .14rem;
        color: #fff;
    }
    ul li a{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>