<template>
    <div>

        <div class="header">
            <a href="#" class="iconfont" @click="handleBack()">&#xe605;</a>
            <img src="https://cmsstatic.ffquan.cn//wap_new/ranking/images/title.svg?v=201801221043" alt="">
        </div>

        <div class="footer">
        <div class="caidan">
            <ul>
                <router-link v-for="(item,index) in fengqiangCai" :key="index" tag="li" :to="{name:'goods',params:{id:item.id}}">
                    <span>{{item.title}}</span>
                </router-link>
            </ul>
        </div>

        <keep-alive>
            <router-view></router-view>
        </keep-alive>
      
        </div>
    </div>
</template>

<script>
import {fengqiangCaidan} from "@api/fengqiang";
export default {
     async created() {
        // 获取到菜单的数据
        let caidan = await fengqiangCaidan();
        this.fengqiangCai = caidan.data;
    },
    data() {
        return {
            fengqiangCai:[],
        }
    },
    methods: {
        handleBack(){
            this.$router.back();
        }
    },
   
}
</script>

<style lang="scss" scoped>
.footer{
    padding-top: .45rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: scroll;
}
.header{
    height: .45rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(-90deg,#ff2a6e,#ff5b3f);
    top: 0;
    z-index: 20;
    position: sticky;
    img{
    width:1.36rem;
    height: .3rem;
}
a{
    position: absolute;
    left: .2rem;
    color: #fff;
}
}

    .caidan{
    height: .44rem;
    position: sticky;
    top: 0;
    padding: 0 .1rem;
    overflow: scroll;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(-90deg,#ff2a6e,#ff5b3f);
    ul{
    position: absolute;
    left: .1rem;
    top: 0;
    height: .33rem;
    width: 9rem;
    margin: .06rem 0;
    display: flex;
    align-items: center;
    .router-link-active{
        box-sizing: border-box;
        border-bottom: 2px solid #fff;
         span{
                color:#fff;
                }
    }
    li{
    margin: 0 .08rem;
    padding: 0 .02rem;
    height: 100%;
    display: flex;
    align-items: center;
    &:hover{
    box-sizing: border-box;
    border-bottom: 2px solid #fff;
}
    &:hover span{
    color:#fff;
}
    img{
    width: .29rem;
    height: .17rem;
}
span{
    font-size: .16rem;
    color: rgba(255, 255, 255, 0.6);
}
}
}
}


</style>