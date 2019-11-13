<template>
    <div>
        <!-- 头部 -->
        <div class="top">
            <a href="">
                <img src="@assets/images/top01.png" alt="">
            </a>
            <div class="from_text">
                <form action="">
                    <button class="search">
                        <img src="@assets/images/search.png" alt="">
                    </button>
                    <input type="text" placeholder="输入商品名或粘贴宝贝标题搜索">
                </form>
            </div>
        </div>
        <!-- left  :name="title"-->
        <div class="menu kind_left">
            
            <a href="#" v-for="(item,index) in kindList" :key="index"
            :class="activeIndex==index?'active':''"
            @click="handleClick(index,item)"
            >
                <router-link tag="div" :to="'/kind/'+arr[index]">
                {{item.name}}
                </router-link>
            </a>
            
        </div>
        <!-- right -->
       
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script>
// import One from "@components/kindChild/one"

import {kindApi} from "@api/kind";
import {mapState} from "vuex";
export default {
    name:"Kind",
    components:{
        // One,
    },
    data(){
        return {
            activeIndex:0,
            arr:["one","two","three","four","five","six","seven","eight"]
        }
    },
    methods: {
        handleClick(index,item){
            this.activeIndex=index;
            this.$observer.$emit("handleList",this.kindList)
        }
    },
    created() {
        this.$store.dispatch("kind/handleGetList");

    },
    computed: {
        ...mapState({
            kindList:state=>state.kind.kindList,
        })
    },
}
</script>
<style>
    .top{
    height: .44rem;
    background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
    border-bottom-color: transparent;
    padding: .08rem .1rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 120;
    display: block;
    box-sizing: border-box
}
.top a{
    position: absolute;
    left: .1rem;
    height: .28rem;
    width: .28rem;
    display:block;
    float: left;
}
.top a img{padding:0.05rem 0 0 .08rem;}
.from_text{
    background-color: #fff;
    border-radius: .05rem;
    min-width: 50%;
    margin-left: .3rem;
    line-height: .28rem;
    height: .28rem;
    position: relative;
}
.from_text .search{
    position: absolute;
    left:0;
    width: 24px;
    height: 24px;
    top: 2px;
    border: none;
    display: block;
    background: #ffffff;
    right: 6px;
    overflow: hidden;
}
.from_text input{
    margin: 0;
    border: none;
    padding: 0;
    outline: 0;
    width: 1.96rem;
    margin-left: .25rem;
    color: #ccc;
    position: absolute;
    top: 0;
    font-size: .14rem;
    line-height: .28rem;
}
 /* menu */
    .active{
        background: #ffffff;
        color: #FC3F78!important;
        border-left: 1px solid #FC3F78;
    }
    .menu{
        margin-top: .44rem;
        width: .65rem;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        overflow: hidden;
        overflow-y: auto;
        z-index: 5;
        background:#F4F4F4;
        padding:0; -webkit-overflow-scrolling: touch; -webkit-box-flex: 1; position: fixed;
    }
    .menu a{
        line-height: .45rem;
        display: block;
        height: .45rem;
        color: #333;
        z-index: 10;
        font-size: .12rem;
        position: relative;
        transition: all .4s cubic-bezier(.4,.68,.15,1) 0s;
        -webkit-transition: all .4s cubic-bezier(.4,.68,.15,1) 0s;
        text-align: center;
        overflow: hidden;
    }


</style>