<template>
    <div class="content">
            <ul  v-for="(item,index) in kindInfo.floors" :key="index">
                <h3>{{item.name}}</h3>
<<<<<<< HEAD
                <router-link tag="li" :to="'/list?index='+index+'&cid='+item.cid"
                v-for="(childOne,indexOne) in item.list" :key="indexOne">
=======
                <li v-for="(childOne,indexOne) in item.list" :key="indexOne">
>>>>>>> huanhuan
                    <a href="">
                        <img :src="childOne.img" alt="">
                        {{childOne.name}}
                    </a>
<<<<<<< HEAD
                </router-link>
               
            </ul>
           
=======
                </li>
                <!-- <li>
                    <a href="">
                        <img src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01lbMOAc2JJhydLRRSu_!!2053469401.png_310x310.jpg_.webp" alt="">
                        换季收纳
                    </a>
                </li>
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
                -->
            </ul>
             <!-- <One/> -->
        <!-- <div class="content" v-for="(kindInfo,dex) in kindList" :key="dex">
            <ul  v-for="(item,indexZero) in kindInfo.floors" :key="indexZero">
                <h3>{{item.name}}</h3>
                <li v-for="(childOne,indexOne) in item.list" :key="indexOne">
                    <a href="">
                        <img :src="childOne.img" alt="">
                        {{childOne.name}}
                    </a>
                </li>
            </ul>
        </div> -->
>>>>>>> huanhuan
    </div>
</template>
<script>
export default {
    name:"KindRight",
    data(){
        return {
            kindInfo:JSON.parse(sessionStorage.getItem("kind"))||{},
            index:0
        }
    },
    created() {
        this.$observer.$on("handleright",(kindInfo)=>{
            this.kindInfo=kindInfo;
<<<<<<< HEAD
            // console.log(this.kindInfo);
=======
            console.log(this.kindInfo);
>>>>>>> huanhuan
        })
    },
}
</script>
<style>
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