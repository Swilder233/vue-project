<template>
    <div class="fenlei">
        <div class="fenlei_top">
            选择分类
           <router-link tag="a" to="/home" class="iconfont">&#xe608;</router-link>
        </div>

        <div class="fenlei_content">
            <a href="#" v-for="(item,index) in caidanList" :key="index">
                <img :src="item.img1">
                <span>{{item.name}}}</span>
            </a>
           
        </div>
    </div>
</template>


<script>
import {homeCaidan} from "@api/home";
export default {
    name:"caidan",
    data(){
        return{
            caidanList:[]
        }
    },
   async created() {
       let data = await homeCaidan();
        this.caidanList = data.data;
    },
}
</script>

<style lang="scss">
    .fenlei{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding-bottom: .25rem;
        background: #fff;
        // display: none;
        .fenlei_top{
            padding: 0 .1rem;
            height: .25rem;
            font-size: .12rem;
            background: #fff;
            display: flex;
            align-items: center;
            position: relative;
            a{
                width:.25rem;
                height: .2rem;
                position: absolute;
                right: 0;
                z-index: 1000;

            }
        }
        .fenlei_content{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: .25rem;
        a{
            width: 25%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            margin-bottom: .2rem;
            img{
                width: .41rem;
                height: .41rem;
            }
            span{
                font-size: .12rem;
                margin-top: .06rem;
            }
        }
        }
    }
</style>