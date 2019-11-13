<template>
    <div class="content">
        <!-- <div v-if="kindList[0].floors==false"> -->
            <!-- <div>{{kindList}}</div> -->
            <ul v-for="(item,indexZero) in kindList[0].floors" :key="indexZero">
                <h3>{{item.name}}</h3>
                <li v-for="(childOne,indexOne) in item.list" :key="indexOne">
                    <a href="">
                        <img :src="childOne.img" alt="">
                        {{childOne.name}}
                    </a>
                </li>
            </ul>
        <!-- <div class="content">
            <ul>
                <h3>热门分类</h3>
                <li>
                    <a href="">
                        <img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01jovxys2JJhyfk5w9V_!!2053469401.png_310x310.jpg_.webp" alt="">
                        女士专用
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN016cEUcb2JJhyeFuhyG_!!2053469401.png_310x310.jpg_.webp" alt="">
                        移动电源
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01uiLwGQ2JJhyfk7oXa_!!2053469401.png_310x310.jpg_.webp" alt="">
                        时尚彩妆
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN01YO8lgq2JJhyfk5OsJ_!!2053469401.png_310x310.jpg_.webp" alt="">
                        假日零食
                    </a>
                </li>
            </ul>
        </!--> 
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name:"One",
    computed: {
        ...mapState({
            kindList:state=>state.kind.kindList,
        })
    },
}
</script>
<style>
    /* 右边 */
   /* 右边内容 */
.content{
    height:100%; 
    -webkit-overflow-scrolling: touch;
    -webkit-box-flex: 1;
    margin-left: .65rem;
    margin-top: 0.44rem;
    overflow: hidden;
    overflow-y: auto;
    position: relative;
    z-index: 0;
}
.content .img{
    margin: 0 10px;
    overflow: hidden;
    padding-top: 10px;
}
.content .img img{
    display: block;
    width: 100%;
    border-radius: .05rem;
    min-height: .6rem;
    background: #f5f5f5;
}
.content ul{
    float: left;
}
.content ul h3{
    font-size: 14px;
    font-weight: 400;
    color: #333;
    width: 100%;
    padding: 0 4%;
    box-sizing: border-box;
    margin-top: 15px;
    margin-bottom: 15px;
    height: 26px;
}
.content ul li{
    width: 33%;
    height: .96rem;
    float: left;
    text-align: center;
    opacity: 1;
}
.content ul li a{
    display: block;
    font-size: 12px;
    color: #333;
    line-height: 25px;
    overflow: hidden;
    padding-bottom: 20px;
}
.content ul li img{
    display: block;
    margin: auto;
    width: 60%;
    min-height: 40px;
}
</style>