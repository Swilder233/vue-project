<template>
    <div>
         <!-- 头部 -->
    <div class="top">
        <div class="toubu">
            <div class="back iconfont" @click="handleBack()">&#xe605;</div>
                <div class="title">{{caidanList[active].name}}</div>
            <div class="icon iconfont">&#xe606;</div>
        </div>

        <!-- 菜单 -->
        <van-tabs v-model="active">
            <van-tab :title="item.name" v-for="(item,index) in caidanList" :key="index"
            :to="{name:'xqc',query:{cid:item.cid}}" ></van-tab>
        </van-tabs>

    <!-- nav -->
        <div class="nav">
            <ul>
                <router-link v-for="(item,index) in goodsSort" :key="index" :to="{name:'xqc',query:{px:item.px}}" 
                tag="li">{{item.name}}</router-link>
            </ul>
        </div>
    </div>
    

    <keep-alive>
        <router-view></router-view>
    </keep-alive>
    </div>
</template>


<script>
import {caidanList} from "@api/xiangqing";
export default {
    name:"xiangqing",
    data(){
        return{
            caidanList:[{name:"美妆"}],
            index:"0",
            active: "0",
            flag:false,
            goodsSort:[
                {
                    name:"人气",
                    px:"t"
                },
                {
                    name:"最新",
                    px:"latest"
                },
                {
                    name:"销量",
                    px:"sell"
                },
                {
                    name:"价格",
                    px:"price"
                },
            ]
        }
    },
    async created(){
      
        let {id,index} = this.$route.query;
        console.log(index,id);
        let caidan = await caidanList();
        this.caidanList = caidan.data;
        this.handleSendId(id,index);
        
        
        // console.log(id);
    },
    methods:{
        handleBack(){
            this.$router.back();
            this.$destroy();
        },
        handleSendId(id,index){

            this.active =index;
            localStorage.setItem("index",JSON.stringify(index));
            // console.log();
        },

    }
}
</script>


<style scoped>
    .top{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}

/* 头部 */
.toubu{
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
    background: #fff;
}
.nav ul{
    width: 100%;
    display: flex;
    align-items: center;
    height: .5rem;
}
.nav ul li{
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: .5rem;
    font-size: .15rem;
}
/* 点击边框 */
.activeList{
    border-bottom: 1px solid #fe4a65;
}




</style>