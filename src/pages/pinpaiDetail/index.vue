<template>
    <div class="pinpai">
        <!-- 滑上去之后的header ，滑上之后会显示-->
        <div class="header_pre" style="display: none;">
            <header class="header_none">
                <v-touch tag="a" @tap="pinpaiBack()" href="" class="iconfont" v-html="icon[0]"></v-touch>
                <div class="title">品牌详情</div>
            </header>
        </div>
        <div class="header_show">
            <div class="header_show_title">
                <v-touch tag="a" @tap="pinpaiBack()" href="#" class="iconfont" v-html="icon[0]"></v-touch>
                品牌详情
            </div>
        </div>
        <!-- 百草味 -->
        <div class="main">
            <!-- 详情介绍 class="info"-->
            <div :class="isShow==0?'info':'info infoAdd'">
                <div class="logo">
                    <img :src="pinpaiList.brandLogo" alt="">
                </div>
                <div class="name">{{pinpaiList.brandName}}</div>
                <h3><span>{{pinpaiList.brandWenan}}</span></h3>
                <h4>
                    <span>粉丝：{{pinpaiList.fansNum | guolv("万")}}</span>|
                    <span>近期销量：{{pinpaiList.recentSale | guolv("万")}}</span>
                </h4>
                <h5>「{{label}}」</h5>
                <p :class="isShow==1?'over':'detail'">{{pinpaiList.brandDes}}</p>
                <div class="more">
                    <v-touch tag="span" @tap="handleMore()" class="moremore">{{more[isShow==0?'0':'1']}}</v-touch>
                    <span class="put">收起</span>
                </div>
            </div>
            <!-- 爆款推荐 -->
            <div class="hot">
                <h2>爆款推荐</h2>
                <h3></h3>
                <ol>
                    <li v-for="(item,index) in pinpaiList.hotPush" :key="index">
                        <img :src="item.pic" alt="">
                        <div class="discount">{{item.discount}}折</div>
                        <!-- <div class="new">新品</div> -->
                        <div class="hotname">{{item.dtitle}}</div>
                        <div class="span">
                            <span class="price">￥{{item.jiage}}</span>
                            <span>￥{{item.yuanjia}}</span>
                        </div>
                    </li>   
                </ol>
            </div>

            <!-- 列表详情 -->
            <!-- 列表 -->
            <div class="list">
                <ul>
                    <router-link tag="li" 
                    :to="{name:'detail',query:{id:item.id,goodsid:item.goodsId,title:item.d_title,price:item.jiage,quan:item.quan_jine,xiaoliang:item.xiaoliang,img:item.pic}}" 
                    v-for="(item,index) in pinList" :key="index">
                        <img :src="item.pic" alt="">
                        <div class="goods_title"><span>天猫</span>{{item.d_title}}</div>
                        <div class="goods_price">卷后<span>￥{{item.jiage}}</span></div>
                        <div class="juan"><i>旗舰店</i><strong>卷{{item.quan_jine}}元</strong></div>
                        <div class="sale">已售{{item.xiaoliang | guolv("万")}} | 评论{{item.comment | guolv("万")}}</div>
                    </router-link>
                </ul>
            </div>
        </div>



        <!--  -->
        <!-- <router-link :to="{name:'PinpaiDetail',query:{brandId:item.brandId}}"></router-link> -->
    </div>
</template>
<script>
import {pinpaiApi,pinpaiListApi} from "@api/pinpai";
export default {
    name:"PinpaiDetail",
    data(){
        return {
            icon:["&#xe605;"],
            pinpaiList:"",
            label:"",
            pinList:[],
            isShow:0,
            more:["查看更多","收起"],
            brandId:""
        }
    },
    created() {
        // 首页传递
        let {brandId}=this.$route.params;
        console.log(brandId)
        this.handleDe(brandId);
        this.handleDeList(brandId);     
    },
    methods: {
        handleMore(){
            this.isShow=!this.isShow;
        },
        async handleDe(brandId){
            let data= await pinpaiApi(brandId);
            this.pinpaiList=data.data;
            this.label=data.data.label[1];
            // console.log(this.pinpaiList);
        
        },
        async handleDeList(brandId){
            let dataList = await pinpaiListApi(brandId);
            this.pinList=dataList.data.lists;
            // console.log(dataList);
            console.log(this.pinList);
        },
        pinpaiBack(){
            this.$router.push("/home");
            window.location.reload();
        }
    },
    
}
</script>
<style>
    body{
    background: #F5F5F5;
}
.header_pre{
    position: fixed;
    z-index: 160;
    border-bottom: solid 1px #ddd;
    transform: translateY(0) translateX(0);
    background: #fff;
    width: 100%;
    top: 0;
    left: 0;
    zoom: 1;
}
.header_pre .header_none{
    width: 100%;
    height: 45px;
    line-height: 45px;
    position: relative;
    z-index: 5;
    zoom: 1;
}
.header_pre .header_none a{
    position: absolute;
    zoom: 1;
    left: -2px!important;
    font-size: .18rem!important;
    z-index: 99;
    top: 0;
    width: 45px;
    height: 45px;
    vertical-align: middle;
    text-align: center;
    color: #666;
}
.header_pre .header_none .title{
    line-height: .45rem;
    overflow: hidden;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    zoom: 1;
    font-size: .16rem;
}

/* 显示的头部 */
.header_show{
    height: 2.1rem;
    background: linear-gradient(180deg,#aaa 0,#f6f6f6 100%);
    padding: 0 .1rem .5rem;
    position: absolute;
    top: 0;
    left: 0;
    margin: auto;
    width: 100%;
    max-width: 7.5rem;
    box-sizing: border-box;
}
.header_show .header_show_title{
    line-height: .45rem;
    overflow: hidden;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    zoom: 1;
    height: .45rem;
    font-size: .18rem;
    color: #fff;
    position: relative;
    z-index: 1;
}
.header_show .header_show_title a{
    position: absolute;
    z-index: 1;
    zoom: 1;
    left: 0;
    font-family: iconfont!important;
    font-size: .24rem;
    color: #ffffff;
    -webkit-font-smoothing: antialiased;
}
/* 百草味 */
.main{
    /* overflow: inherit!important; */
    /* zoom: 1;
    z-index: 99;
    position: relative; */
    width: 100%;
    max-width: 7.5rem;
    box-sizing: border-box;
    padding-top: .8rem;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    overflow: auto;
    
}
/* 详情介绍 */
.main .info{
    width: 3rem;
    height: 2.4rem;
    background: #fff;
    border-radius: .08rem;
    padding: 0 .11rem 0;
    margin: 0 .1rem .1rem;
    display: block;
    position: relative;
}
.main .info .logo{
    width: .7rem;
    height: .7rem;
    border-radius: .04rem;
    overflow: hidden;
    position: absolute;
    z-index: 100;
    zoom: 1;
    top: -0.27rem;
    left: 0;
    right: 0; 
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    box-shadow: 0 .03rem .08rem -0.2rem rgba(94,107,121,.2);
}
.main .info .logo img{
    width: 100%;
}
.main .info .name{
    padding-top: .53rem;
    height: .24rem;
    font-size: .17rem;
    font-weight: 500;
    color: #333;
    line-height: .24rem;
    margin: auto;
    text-align: center;
}
.main .info h3{
    padding: 0 .05rem;
    box-sizing: border-box;
    height: .16rem;
    margin-top: .28rem;
    font-size: .1rem;
    color: #666;
    line-height: .16rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
}

.main .info h3 span{
    background: rgba(0,0,0,.05);
    margin: auto;
    display: inline-block;
    padding: 0 .05rem;
    border-radius: .1rem;
    height: .16rem;
}
.main .info h4{
    height: .17rem;
    font-size: .12rem;
    font-weight: 300;
    color: #333;
    line-height: .17rem;
    margin-top: .11rem;
    display: flex;
    justify-content: center;
}
.main .info h4 span{
    padding: 0 .04rem;
}
.main .info h5{
    text-align: center;
    height: 17px;
    color: #fe3a33;
    padding: 0 .05rem;
    font-size: .12rem;
    font-weight: 400;
    line-height: .17rem;
}
/* 更多收起 */
.over{
    height: .7rem;
    white-space: inherit;
    color: #666;
    text-indent: .24rem;
    margin-bottom: 10px;
    display: -webkit-box;
    line-height: .17rem;
    margin-top: 15px;
    font-size: 12px;
}
.infoAdd{
    height: 2.6rem!important;
}
.main .info .detail{
    color: #666;
    text-indent: .24rem;
    margin-bottom: 10px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: .17rem;
    height: 0.34rem;
    margin-top: 15px;
    text-overflow: ellipsis;
    font-size: 12px;
    overflow: hidden;
}
.main .info .more{
    font-size: 12px;
    color: #9b9b9b;
    line-height: 17px;
    text-align: center;
}
.main .info .moremore{
    display: block;
}
.main .info .more .put{
    display: none;
    padding: .06rem 0;

}
/* 爆款推荐 */
.hot{
    background: #fff;
    border-radius: 8px;
    padding: 16px 8.5px 7.5px 10px;
    overflow: hidden;
    margin: 10px;
    margin-bottom: 24px;
    text-align: center;
}
.hot .hotname{
    width: .9rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-top: .04rem;
    font-size:.12rem;
}
.hot h2{
    font-size: 15px;
    font-weight: 500;
    color: #333;
    line-height: 21px;
    position: relative;
    display: inline;
}
.hot h3{
    width: .3rem;
    height: 1px;
    border-bottom: 2px solid #aaa;
    margin: .04rem auto;
}
.hot ol{
    width: 100%;
    display: flex;
    justify-content:space-between;
    align-items: center;

}
.hot ol li{
    width: 32%;
    height: 1.36rem;
    position: relative;
}
.hot ol li .discount{
    position:absolute;
    right: 0;
    bottom: .46rem;
    width: 31px;
    height: 14px;
    background: linear-gradient(153deg,#fad961 0,#f76b1c 100%);
    border-radius: 7px 7px 7px 0;
    font-size: 10px;
    font-weight: 400;
    color: #fff;
    text-align: center;
}
.hot ol li .new{
    position: absolute;
    right: 0;
    top: 0;
    background: linear-gradient(57deg,#40cff9 0,#1ea3f1 100%);
    height: 15px;
    border-radius: 8px;
    padding: 0 5px;
    font-size: 10px;
    font-weight: 400;
    color: #fff;
    line-height: 15px;
}
.hot ol li img{
    width: 100%;
}
.hot ol li .span{
    padding: .04rem 0 0.4rem 0;
}
.hot ol li .price{
    font-size: .16rem;
}
.hot ol li span:nth-of-type(2){
    text-decoration: line-through;
}
/* 列表 */
.list ul{
    margin-left:.1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.list ul li{
    width:145px;
    height: 2.68rem;
    border-radius: .05rem;
    margin-right: .1rem;
    background: #fff;
    margin-top: .1rem;
    box-sizing: border-box;
    padding-left: .08rem;
}
.list ul li img{
    width: 100%;
    border-radius: .05rem;
}
.list ul li .goods_title{
    width: 96%;
    font-size: 13px;
    font-weight: 400;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1;
    padding-top: .2rem;
}
.list ul li .goods_price{
    font-size: 10px;
    font-weight: 400;
    color: #666;
    margin: .04rem 0;
}

.list ul li .goods_price span{
    font-size: 19px;
    font-weight: 500;
    color: #FF2B22;
}
.list ul li .juan i{
    height: 8px;
    font-style: normal;
    border-radius: 2px;
    border: 1px solid;
    font-size: 8px;
    font-weight: 400;
    color: #ff0137;
    line-height: 1;
    padding: 0 3px;
    margin-right: 5px;
}
.list ul li .juan strong{
    font-weight: normal;
    background: linear-gradient(90deg,#ff8873 0,#ff4f4f 100%);
    border-radius: 2px;
    padding: 0 5px;
    font-size: 8px;
    font-weight: 400;
    color: #fff;
    line-height: 16px;
}
.list ul li .sale{
    padding-top: .08rem;
    font-size: 9px;
    font-weight: 400;
    color: #888;
}
</style>