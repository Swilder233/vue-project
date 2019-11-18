<template>
    <div class="content">
            <ul  v-for="(item,index) in kindInfo.floors" :key="index">
                <h3>{{item.name}}</h3>
                <router-link tag="li" :to="'/list?cid='+item.list[indexOne].api_cid+'&name='+item.list[indexOne].name"
                v-for="(childOne,indexOne) in item.list" :key="indexOne">
                    <a href="">
                        <img :src="childOne.img" alt="">
                        {{childOne.name}}
                    </a>
                </router-link>
                
            </ul>
           
    </div>
</template>
<script>
import {kindApi} from "@api/kind"
export default {
    name:"KindRight",
    data(){
        return {
            kindInfo:JSON.parse(localStorage.getItem("kind"))||{},
            index:0,
            // px:["t","latest","sell","price_h"]
        }
    },
    created() {
        this.$observer.$on("handleright",(kindInfo)=>{
            this.kindInfo=kindInfo;
            console.log(this.kindInfo);
        })
    },
    // methods: {
    //     async handleGetData(){
    //         let data=await kindApi();
    //         console.log(data)
    //     }
    // },
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
    position: absolute;
    z-index: 0;
    /* padding-bottom: .5rem; */
    /* overflow: scroll; */
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