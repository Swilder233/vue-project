<template>
         <div class="lei_body">
        <ul>
            <router-link v-for="(item,index) in goodsList" :key="index" tag="li"
            :to="{name:'detail',query:{id:item.id,
					goodsid:item.goodsid,title:item.dtitle,
					price:item.jiage,
					quan:item.quanJine,
					xiaoliang:item.xiaoliang,
					img:item.pic,yuanjia:item.yuanjia,}}">
                <div class="left_img">
                    <img :src="item.pic">
                </div>
                <div class="right">
                    <h2><span>天猫</span>{{item.d_title}}</h2>
                    <h4>券后<strong><i>￥</i>{{item.jiage}}</strong></h4>
                    <h5><span>旗舰店</span><i>券{{item.quan_jine}}元</i></h5>
                    <h6>已售{{((item.xiaoliang)/10000).toFixed(1)}}万 | 评论{{((item.comment)/10000).toFixed(1)}}</h6>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
import {goodsList} from "@api/xiangqing";
export default {
    name:"xqc",
    data(){
        return{
            goodsList:[],
            px:"t",
            id:""

        }
    },
    async created(){
        let {id} = this.$route.query;
        let goods = await goodsList(id);
        this.goodsList = goods.data.content;
        console.log(this.goodsList);
    },
    beforeRouteUpdate(to,from,next){
        let {cid} = to.query;
        let {px} = to.query;
        this.id=cid;
         this.px = px;
         console.log(this.px,this.id);
        let ppp = (this.px==undefined?'t':this.px);
       
        console.log(ppp);
        this.handleSendCid(cid,ppp);
        next(()=>{

        })
    },
    methods:{
        async handleSendCid(cid,px){
            let goods = await goodsList(cid,px);
            console.log(cid,px);
            this.goodsList = goods.data.content;
        }
    }
}
</script>

<style>
    /* body */
.lei_body{
    margin-top: 1.4rem;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    position: absolute;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    -webkit-box-flex: 1;
    background-color: #fff;
}
.lei_body ul li{
    padding: .1rem 0 0 .1rem;
    border-bottom: 1px solid #F5F5F5;
    display: flex;
    padding-bottom: .1rem;
}
.lei_body .left_img{
    width: 1.46rem;
    height: 1.12rem;
    margin-right: .14rem;

}
.lei_body .left_img img{
   width: 1.12rem;
   height: 1.12rem;
}
.right h2{
    font-size:.14rem;
    padding-right: .03rem;}
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
    font-size: .12rem;
    color: #666;
}
.right h4 i{
    font-size: .12rem;
    font-style: normal;
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