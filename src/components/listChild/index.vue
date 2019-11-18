<template>
    <div>
        <div class="lei_body">
            <ul>
                <router-link tag="li" 
                :to="{name:'detail',query:{id:item.id,goodsid:item.goodsid,title:item.d_title,price:item.jiage,quan:item.quan_jine,xiaoliang:item.xiaoliang,img:item.pic,yuanjia:item.yuanjia}}"
                v-for="(item,index) in datalist" :key="index" >
                    <div class="left_img">
                        <img :src="item.pic" alt="">
                    </div>
                    <div class="right">
                        <h2><span>天猫</span>{{item.d_title}}</h2>
                        <h4><span>聚</span>卷后<strong>￥{{item.jiage}}</strong></h4>
                        <h5><span>旗舰店</span><i>卷{{item.quan_jine}}元</i></h5>
                        <h6>已售{{item.xiaoliang | guolv("万")}} | 评论{{item.comment | guolv("万")}}</h6>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
import {kindListApi} from "@api/kind"
export default {
    name:"List",
    data(){
        return {
            datalist:[],
            cid:"",
        }
    },
    created() {
        let {cid}=this.$route.query; 
        this.handleGetDataList(cid,"t");
    },
    beforeRouteUpdate(to,from,next){
        let {cid,px}=to.query;
        this.cid=cid;
        this.px=px;      
        this.handleGetDataList(this.cid,this.px);
    },
    methods: {
        async handleGetDataList(cid,px){
            let data=await kindListApi(cid,px);
            // console.log(data.data);
            this.datalist=data.data.content;
            // sessionStorage.setItem("list",JSON.stringify(data.data.content))
        }
    },
}
</script>
<style lang="scss" scoped>
    /* body */
.lei_body{
    margin-top: .9rem;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    -webkit-box-flex: 1;
    background-color: #fff;
    height: 100%;
    position: absolute;
    top:0;
}
.lei_body ul li{
    padding: .1rem 0 0 .1rem;
    border-bottom: 1px solid #F5F5F5;
    display: flex;
    padding-bottom: .1rem;
}
.lei_body .left_img{
    width: 1.26rem;
    height: 1.12rem;
    margin-right: .14rem;

}
.lei_body .left_img img{
    width: 1.26rem;
    height: 1.12rem;
}
.right h2{
    font-size: 14px;
    font-weight: 400;
    color: #333;
    line-height: .2rem;
    
}
.right h2 span{
    min-width: 26px;
    height: .14rem;
    background-color: #fe0036;
    border-radius: 2px;
    display: inline-block;
    margin-right: 3px;
    font-size: .12rem;
    line-height: .14rem;
    color: #fff;
}
.right h4{
    padding-top: .04rem;
}
.right h4 span{
    background: #fe0036;
    padding:0  .02rem;
    font-size: .12rem;
    border-radius: .03rem;
}
.right h4 strong{
    font-size: .18rem;
    color:#fe0036 ;

}
.right h5{
    margin: .04rem 0;
}
.right h5 span{
    border:1px solid #FF0137;
    color: #FF0137;
    font-size: .12rem;
   margin-right: .04rem;
}
.right h5 i{
    height: 12px;
    background: linear-gradient(90deg,#ff8873 0,#ff4f4f 100%);
    border-radius: 2px;
    display: inline-block;
    padding: 0 5px 0 0;
    font-size: 8px;
    font-weight: 400;
    color: #fff;
    line-height: 13px;
    font-style: normal;
}
.right h6{
    font-size: 9px;
    font-weight: 400;
    color: #888;
}
</style>