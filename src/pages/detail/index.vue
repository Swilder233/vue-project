<template>
    <div class="body" :class="op==true?'opacity':''">
        <!-- 头部 -->
        <div class="header">
            <v-touch tag="div" @tap="handleDetailBack()"
            class="back iconfont" v-html="icon[0]"></v-touch>
            <div class="title">
                <li>商品</li>
                <li>详情</li>
                <li>推荐</li>
            </div>
            <div class="icon iconfont" v-html="icon[1]"></div>
        </div>
        <!-- body -->
        <div class="detail">
        <v-touch tag="div" class="img" @tap="handleNone()">
            <img :src="img" alt="">
        </v-touch>
        <div class="goods_info">
            <h1><span>天猫</span>{{title}}</h1>
            <div class="goods_price">
                <li>到手￥<span>{{price}}</span></li>
                <p>已定<span>{{xiaoliang | guolv("万")}}</span>件</p>
            </div>
            <div class="old_price">
                <i>到手价<span>￥{{price}}</span></i>
                <i>包邮</i>
            </div>
            <div class="goods_quan">
                <ul>
                    <img src="https://cmsstatic.ffquan.cn//wap_new/main/images/goods_quan.png?v=201911081848" alt="">
                    <h2><span>{{quan}}</span>元优惠券</h2>
                    <p>使用期限：2019.11.10-2019.11.11</p>
                    <h3>领劵预定</h3>
                </ul>
            </div>
            <div class="content">
                付定金【拍1件.送定制版外购品】【买2送1，到手28片加送精华液】李佳琪推荐，黑海盐高净润泡泡面膜，三重净化，舒缓肌肤，改善痘痘和粉刺，你的毛孔吸尘器，给肌肤注氧打气。【过敏包退，破损包退】
            </div>
        </div>
        <div class="hr"></div>
        <div class="store">
            <div class="store_info">
                <img src="https://img.alicdn.com/imgextra//i4/379424083/O1CN01Vd5era1g23dFFzU3v_!!379424083.png_310x310.jpg"
                    alt="">
                <div class="dian">
                    <h5>{{infoList.shopName}}</h5>
                    <img src="@assets/images/logo.png" alt="">
                </div>
                <ol>店铺所有优惠 ></ol>
            </div>
            <ul>
                <li>宝贝描述：{{infoList.dsrScore}}<span>高</span></li>
                <li>卖家服务：{{infoList.serviceScore}}<span>高</span></li>
                <li>物流服务：{{infoList.shipScores}}<span>平</span></li>
            </ul>
        </div>
        <div class="hr"></div>
        <!-- 相似推荐 -->
        <div class="similar">
            <h3>相似推荐</h3>
            <dl>
                <dd v-for="(item,index) in similarList" :key="index"
                
                >
                    <a href="">
                        <img :src="item.pic" alt="">
                        <h6>{{item.title}}</h6>
                        <li>{{item.quanJine}}元卷</li>
                        <li>卷后价{{item.jiage}}</li>
                    </a>
                </dd>
            </dl>
        </div>
        <div class="hr"></div>
        <!-- 宝贝详情 -->
        <div class="baby_detail">
            <h3>宝贝详情</h3>
            <div class="baby_img">
                <!-- <div>
                    <img  alt="">
                </div>
                <div v-for="(itemimg,indexOne) in imgList" :key="indexOne">
                    <h1>{{itemimg.height}}</h1>
                    <img :src="itemimg.img" alt="">
                </div> -->
                <div>
                    <img src="https://img.alicdn.com/imgextra/i4/379424083/O1CN01380jyd1g23hl2bdfG_!!379424083.jpg" alt="">
                </div>
                <div>
                    <img src="https://img.alicdn.com/imgextra/i2/379424083/O1CN01zwq93x1g23hfao9id_!!379424083.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="baby_hot baby_detail">
            <h3>今日热销</h3>
            <!-- 列表 -->
            <div class="boby_list">
                <ul>
                    <li v-for="(item,index) in recommendList" :key="index">
                        <img :src="item.pic" alt="">
                        <div class="goods_title"><span>天猫</span>item.dtitle</div>
                        <div class="go_price">卷后<span>￥{{item.jiage}}</span></div>
                        <div class="juan"><i>旗舰店</i><strong>卷{{item.quanJine}}元</strong></div>
                        <div class="sale">已售{{item.xiaoliang | guolv("万")}} | 评论0</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- footer -->
    <div class="footer">
        <div class="share">
            <p class="iconfont" v-html="icon[2]"></p>分享
        </div>
        <div class="cang">
            <p class="iconfont" v-html="icon[3]"></p>收藏
        </div>
        <div class="buy">
            <v-touch tag="span" @tap="handleBuy()">口令购买</v-touch>
            <!-- @tap="handleCart()" -->
            <v-touch tag="span" @tap="handleCart()">领劵预定</v-touch>
        </div>
    </div>
    <!-- 加入cart -->
    <transition name="bottom">
        <div class="cart" v-if="cartFlag">
            <h3>种类</h3>
            <h3>大小</h3>
            <!-- <router-link tag="div" :to="{name:'mycart',params:{dianpu:this.infoList.shopName,biaoti:title,jiage:price,pic:img}}">确定</router-link> -->
            <v-touch tag="div" @tap="handleSure()">确定</v-touch>
        </div>
    </transition>
    
    </div>
</template>
<script>
import {detailImgApi,detailInfoApi,detailRecommendApi,detailSimilarApi} from "@api/detail";
import MessageBox from "@lib/messageBoxBuy/index.js";
import { Toast } from 'mint-ui';
export default {
    name:"detail",
    // components:{
    //     MessageBox
    // },
    data(){
        return {
            icon:["&#xe605;","&#xe606;","&#xe610;","&#xe609;"],
            id:"",
            goodsid:"",
            title:"",
            price:"",
            quan:"",
            xiaoliang:"",
            imgList:[],
            infoList:"",
            img:"",
            recommendList:[],
            similarList:[],
            op:false,
            // 加入购物车
            cartFlag:false,
            store:JSON.parse(localStorage.getItem("cart"))||[]
        }
    },
    async created() {
        let {id,goodsid,title,price,quan,xiaoliang,img}=this.$route.query;
        this.id=id;
        this.goodsid=goodsid;
        this.title=title;
        this.price=price;
        this.quan=quan;
        this.xiaoliang=xiaoliang;
        this.img=img;
        console.log(this.id,this.goodsid,this.title,this.price,this.quan,this.xiaoliang,this.img);
        //商品图片
        let imgData = await detailImgApi(goodsid);  
        this.imgList=imgData.data;
        // console.log(this.imgList)
        //商品信息
        let infoData=await detailInfoApi(goodsid);
        this.infoList=infoData.data;
        //推荐
        let recommendData=await detailRecommendApi(id);   
        this.recommendList=recommendData.data;
        //相似推荐
        let similarData=await detailSimilarApi(id);
        this.similarList=similarData.data;
        // console.log(this.recommendList);


    },
    
    methods: {
        handleDetailBack(){
            this.$router.back();
        },
        handleBuy(){
            this.op=true;
            // 弹出框
            MessageBox({
                title:"复制淘口令购买",
                content:"复制框内整段文字，打开【手-机-淘-宝】即可领券购买。$OTGVYvNTuRX$",
                ok:()=>{
                    // alert("复制成功")
                    this.op=false;
                }
            })
        },
   
        handleCart(){
            this.cartFlag=!this.cartFlag;

        },
        handleSure(){
            this.cartFlag=false;
            // 点击弹出加入成功提示框
            Toast({
                message: '加入购物车成功',
                position: 'center',
                duration: 5000
            });
            let obj={};
            obj.dianpu=this.infoList.shopName;
            obj.title=this.title;
            obj.jiage=this.price;
            obj.pic=this.img;
            console.log(obj);

            this.store.push(obj);
            localStorage.setItem("cart",JSON.stringify(this.store));  
            // obj={}
            // if(!localStorage.getItem("cart")){
            //     localStorage.setItem("cart",JSON.stringify(this.store));                
            //     // this.store.push(obj);
            //     JSON.parse(localStorage.getItem("cart")).push(obj);
            // }else{
            //     // console.log(JSON.parse(localStorage.getItem("cart")));
            //     JSON.parse(localStorage.getItem("cart")).push(obj);
            // }
        },
        handleNone(){
            this.cartFlag=false;
        }
    },
    
}
</script>
<style>
/* 加入购物车 */
.cart{
    width: 100%;
    height: 3rem;
    position: absolute;
    left: 0;
    bottom: 0;
    background: red;
    z-index: 30
}
.bottom-enter,.bottom-leave-to{
    bottom:-2.44rem;
}
.bottom-enter-active,.bottom-leave-active{
    transition: .2s;
}



.body{
    height: 100%;
}
.opacity{
    background: #666;
    opacity: 0.5;
}
    /* 头部 */
    .header{
        height: .45rem;
        width: 100%;
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .08rem;
        background: #fff;
        z-index: 20;
    }
    .back,.icon{
        width: .3rem;
        height: .3rem;
        background: rgba(0, 0, 0, 0.3);
        color: rgb(255, 255, 255);
        border-radius: 50%;
        line-height: .3rem;
        text-align: center;
        font-size: .2rem;
        font-weight: 600;
    }
    .icon{
        font-size: .16rem;
    }
    .header .title{
        display: flex;
        width: 1.4rem;
        justify-content: space-between;
        align-items: center;
    }
    .header .title li{
        font-size: .16rem;
        color: #000000;
    }
/* main */
.detail{
    padding: 0 0 .56rem;
    width: 100%;
    height: 100%;
    -webkit-overflow-scrolling: touch;
    -webkit-box-flex: 1;
    overflow: hidden;
    overflow-y: auto;
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;


}
.detail .img{
    height: 3.2rem;
}
.detail .img img{
    width: 100%;
}
.goods_info{
    padding: 0 .1rem;
}
.goods_info h1{
    font-size: 0.15rem;
    font-weight: 400;
    padding: .2rem 0 .12rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: .06rem;
}
.goods_info h1 span{
    border: 1px solid #FC3F78;
    color: #FC3F78;
    padding: 0 .03rem;
    margin-right: 5px;
    font-size: .12rem;
}
.goods_price,.old_price{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 .06rem .08rem;
}
.goods_price li{
    color: #FC4D52;
    font-size: .14rem;

}
.goods_price li span{
    font-size: .18rem;
}
.goods_price p span{
    color: #FC4D52;
}
.old_price i{
    font-style: normal;
    color: #888;
}
.goods_quan{
    height: .76rem;
    width: 100%;
    position: relative;
    display: flex;
    color: #ffffff;
}
.goods_quan img{
    width: 100%;
}
.goods_quan h2{
    position: absolute;
    left: .56rem;
    top: .16rem;
    font-size: .14rem;
}
.goods_quan h2 span{
    font-size: .18rem;
    font-weight: 600;
    padding-right: .04rem;
}
.goods_quan p{
    position:absolute;
    top: .38rem;
    left: .16rem;
    font-size: .12rem;
}
.goods_quan h3{
    position: absolute;
    left: 2.2rem;
    top: .12rem;
    padding: .12rem 0;
    padding-left: .08rem;
    border-left: .01rem dashed #ffffff;
    font-size: .14rem;
    font-weight: normal;
}
.content{
    font-size: .15rem;
    line-height: .22rem;
    padding: .05rem 0 .14rem;
    color: #888;
}
/* 店铺描述 */
.hr{
    background: #F5F5F5;
    height: .07rem;
    width: 3.2rem;
    padding: 0;
    margin: 0;
}
.store{
    height: 1.2rem;
    margin: .08rem 0;

}
.store_info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: .1rem;
    border-bottom: 1px solid #eeeeee;
    padding: .1rem .1rem;
}
.store_info img{
    width: .6rem;
    height: .6rem;
}
.dian img{
    width: .83rem;
    height: .13rem;
    margin-top: .08rem;
}
.store_info .dian{
    display: flex;
    flex-direction: column;
}
.store_info .dian h5{
    font-size: .15rem;
    width: 1.4rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: normal;
}
.store ul{
    padding: 0 .1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding-top: .14rem;
}
.store ul li{
    font-size: .12rem;
    padding-right: .04rem;
    padding-left: .04rem;
    border-right: 1px solid #eeeeee;
}
.store ul li:nth-of-type(3){
    border: none;
}
.store ul li:nth-of-type(3) span{
    background: #FF7800;
}
.store ul li span{
    background: #E31436;
    color: #ffffff;
    font-size: .1rem;
    border-radius: .02rem;
    margin-left: .02rem;
}
.similar h3{
    height: .49rem;
    line-height: .49rem;
    width: 100%;
    text-align: center;
    font-size: .16rem;
}
.similar dl{
    height: 1.8rem;
    width: 100%;
    display: flex;
    align-items: center;
    overflow: auto;
}
.similar dl img{
    width: .83rem;
    height: .83rem;
}
.similar dl dd{
    width: .83rem;
    margin-left: .1rem;
}
.similar dl dd h6{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: .06rem 0;
}
.similar dl dd li{
    color: #FC4D52;
    font-size: .12rem;
    margin: .06rem 0;
}
.similar dl dd li:nth-of-type(1){
    width: .5rem;
    border: 1px solid #FC4D52;
}
/* 宝贝详情 */

.baby_detail h3{
    width: 100% !important;
    width: .49rem;
    line-height: .49rem;
    text-align: center;

}
.baby_detail .baby_img img{
    width: 100%;
}
/* 今日热销 */
.boby_list{
    background: #F5F5F5
}
.boby_list ul{
    margin-left:.1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.boby_list ul li{
    background: #ffffff;
    margin-bottom: .1rem;
    padding-left: .08rem;
    width:145px;
    height: 2.68rem;
    border-radius: .05rem;
    margin-right: .1rem;
}
.boby_list ul li img{
    width: 100%;
    border-radius: .05rem;
}
.boby_list ul li .goods_title{
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
.boby_list ul li .goods_price{
    font-size: 10px;
    font-weight: 400;
    color: #666;
    margin: .04rem 0;
}

.boby_list ul li .go_price span{
    font-size: 19px;
    font-weight: 500;
    color: #FF2B22;
}
.boby_list ul li .juan i{
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
.boby_list ul li .juan strong{
    font-weight: normal;
    background: linear-gradient(90deg,#ff8873 0,#ff4f4f 100%);
    border-radius: 2px;
    padding: 0 5px;
    font-size: 8px;
    font-weight: 400;
    color: #fff;
    line-height: 16px;
}
.boby_list ul li .sale{
    padding-top: .08rem;
    font-size: 9px;
    font-weight: 400;
    color: #888;
}



/* footer */
.footer{
    height: .56rem;
    position: fixed;
    zoom: 1;
    bottom: 0;
    z-index: 10;
    background: #ffffff;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 0 0 .14rem;
}
.footer .share{
    width:.4rem;
    text-align: center;
    font-size: .14rem;
}
.footer .cang{
    width:.5rem;
    text-align: center;
    font-size: .14rem;
}
.footer .buy{
    display: flex;
    justify-content: center;
    margin-left: .15rem;
}

.footer .buy span:nth-of-type(1){
    color: #FE9F69;
    width: .8rem;
    height: .4rem;
    border: 1px solid #FE9F69;
    display: inline-block;
    line-height: .4rem;
    text-align: center;
    border-radius: .05rem 0 0 0.05rem;
}
.footer .buy span:nth-of-type(2){
    background: linear-gradient(to left,#FB85F7 0,#FE9F69 100%);
    display: inline-block;
    width: 1rem;
    height: .4rem;
    line-height: .4rem;
    text-align: center;
    border-radius: 0 .05rem .05rem 0;
}


</style>