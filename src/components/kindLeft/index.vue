<template>
    <div class="menu kind_left">
        <div class="move"></div>
        <a href="#" v-for="(item,index) in kindList" :key="index"
        :class="activeIndex==index?'active':''"
        @click="handleClick(index,item)"
        >{{item.name}}</a>
    </div>
</template>
<script>
import {kindApi} from "@api/kind"
export default {
    name:"KindLeft",
    data(){
        return {
            kindList:[],
            activeIndex:0
        }
    },
    methods: {
        handleClick(index,item){
            this.activeIndex=index;
            this.$observer.$emit("handleright",item);
        }
    },
    async created() {
        let data=await kindApi();
<<<<<<< HEAD
        // console.log(data)
=======
        console.log(data)
>>>>>>> huanhuan
        this.kindList=data.data.data;
        sessionStorage.setItem("kind",JSON.stringify(data.data.data[0]))  
    },
}
</script>
<style>
    /* menu */
    .active{
        background: #ffffff;
        color: #FC3F78;
        border-left: 1px solid #FC3F78;
<<<<<<< HEAD
        border-bottom: none;
=======
>>>>>>> huanhuan
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
    /* .move{
        position: absolute;
        width: .65rem;
        height: .45rem;
        background: #ffffff;
        box-sizing: border-box;
        border-left: 1px solid #FC3F78;
    } */
</style>

