<template>
    <div class="list">
        <div class="top" style="margin:0;padding:0">
            <div class="header">
                <v-touch tag="div" @tap="listBack()"
                 class="back iconfont" v-html="icon[0]"></v-touch>
                    <div class="title">{{title}}</div>
                <div class="icon iconfont" v-html="icon[1]"></div>
            </div>
            <!-- nav -->
            <div class="nav">
                <ul>
                    <!-- :class="toIndex==index?'toActive':''" -->
                    <router-link tag="li" :to="'/list/child?px='+item.px+'&cid='+cid"
                    v-for="(item,index) in toArr"
                    :key="index"
                    >{{item.content}}</router-link>



                </ul>
            </div>
        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script>
export default {
    components:{
        
    },
    data(){
        return {
            icon:["&#xe605;","&#xe606;"],
            cid:"",
            title:"",
            // toIndex:0,
            // ["人气","最新","销量","价格"]
            toArr:[
                {
                    px:"t",
                    content:"人气"
                },
                {
                    px:"latest",
                    content:"最新"
                },
                {
                    px:"sell",
                    content:"销量"
                },
                {
                    px:"price_h",
                    content:"价格"
                },
            ]
        }
    },
    methods: {
        listBack(){
            this.$router.back("/kind");
        },
    },
    created() {
        let {cid,name} = this.$route.query;
        this.cid=cid;
        this.title=name;
        // console.log(this.cid)
    },
    
}
</script>
<style>
    .list{
        width: 100%;
        width: 100%;

    }
    .top{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: .94rem;
    }

    /* 头部 */
    .header{
        background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
        border-bottom-color: transparent;
        padding: .08rem .1rem;
        box-sizing: border-box;
        height: .44rem;
        display: flex;
        font-size: .17rem;
        justify-content: space-between;
        align-items: center;
        color: #ffffff;
    }
    .nav{
        width: 100%;
        height: .5rem;
        box-sizing: border-box;
        background: #ffffff;
        padding: 0;
    }
    .nav ul{
        width: 100%;
        display: flex;
        align-items: center;
        height: .5rem;
        box-sizing: border-box;
    }
    .nav ul li:hover{
        border-bottom: 1px solid #fe4a65;
    }
    .nav ul li{
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: .5rem;
        font-size: .15rem;
        box-sizing: border-box;
        border-bottom: 1px solid #ffffff;
    }
    /* 点击边框 */
    /* .router-link-exact-active{
        border-bottom: 1px solid #fe4a65;
    } */
    .toActive{
        border-bottom: 1px solid #fe4a65;
    }
</style>