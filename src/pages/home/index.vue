<template>
    <div class="top">
		<div class="header">
			<input type="text" placeholder="输入商品名或粘贴宝贝标题搜索"/>
			<span  class="iconfont sousuo">&#xe613;</span>
			<p><span class="iconfont">&#xe600;</span>
				<span>消息</span>
			</p>
		</div>

        <div class="nav">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
            
			<div class="nav_left">
				<a href="#">精选</a>
			</div>
			<div class="nav_center">
			<ul class="caidan">
				<router-link v-for="(item,index) in navList" :key="index" :to="{name:'xqc',query:{id:item.id,index:index}}"
				tag="li"><a href="#">{{item.name}}</a></router-link>
			</ul>
			</div>
			<router-link class="iconfont nav_right" tag="a" to="/home/caidan">&#xe610;</router-link>
		</div>

        <!-- 轮播图 -->

        <van-swipe :autoplay="3000" class="swiper">
        <van-swipe-item v-for="(image, index) in swiperList" :key="index" class="banner">
            <img :src="image.pic"/>
        </van-swipe-item>
        </van-swipe>

        <!-- 优惠 -->
        <div class="youhui">
			<ul>
				<!-- <router-link :to="youhuiList[0].place" tag="li">
					<img :src="youhuiList[0].address" alt="">
					<span>{{youhuiList[0].name}}</span>
				</router-link> -->
				<router-link to="/fengqiang" tag="li">
					<img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN0151LlXA2JJhyWrrtRw_!!2053469401.gif" alt="">
					<span>疯抢排行</span>
				</router-link>
				<router-link to="/" tag="li">
					<img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN018sPcWK2JJhy38xfum_!!2053469401.png" alt="">
					<span>9.9包邮</span>
				</router-link>
				<router-link to="/" tag="li">
					<img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN01ptnbDO2JJhybcK39o_!!2053469401.gif" alt="">
					<span>品牌特卖</span>
				</router-link>
				<router-link to="/" tag="li">
					<img src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01C0wivK2JJhxxaqA66_!!2053469401.png" alt="">
					<span>每日半价</span>
				</router-link>
				<router-link to="/" tag="li">
					<img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN011npPe82JJhy3KUj5q_!!2053469401.png" alt="">
					<span>折上折</span>
				</router-link>

			</ul>
		</div>

        <!-- 消息 -->
		<div class="msg">
			<div class="msg_center">
				<img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN011wdOkj2JJhy7TkPFo_!!2053469401.png" alt="">

				<van-swipe vertical  class="msg_item" :autoplay="3000" :show-indicators="false">
					<van-swipe-item v-for="(item,index) in youhuitoutiao" :key="index">
						<span>{{item.tag}}</span>
							{{item.name}}
					</van-swipe-item>
				</van-swipe>
						<i>&gt;</i>
				
			</div>
		</div>
        <!-- 叮咚抢 -->
        <div class="dingdong">
			<div class="dingdong_center">
				<div class="dingdong_center-left">
					<div class="dianchang">
						<h3>咚咚抢</h3>
						<p>
							<span>10点场</span>8:02:30
						</p>
					</div>

					<div class="dianchang_goods">
					<ul class="dianchang_content">
						<li class="dianchang_item" 
						v-for="(goods, index) in  dongdongqiang.ddqGoodsList" :key="index"> 
							<img :src="goods.pic" alt="">
							<p>
								<i>￥{{goods.price}}</i>
								<del>￥{{goods.orginPrice}}</del>
							</p>
						</li>
					</ul>
					</div>
				</div>
				<div class="dingdong_center-right">
					<a href="#" v-for="(item,index) in dongdongqiang.config" :key="index">
						<img :src="item.address">
					</a>
				</div>
			</div>
		</div>

        <!-- 品牌特卖 -->
		<div class="temai">
			<div class="temai_center">
				<div class="pinpai">
					<div class="pinpai_left">
					<h3>品牌特卖</h3>
					<span>600+品牌</span>
					</div>
					<a href="#" class="iconfont">更多品牌&#xe715;</a>
				</div>
				<ul class="temai_content">
					<li v-for="(item,index) in pinpaiList" :key="index">
						<img :src="item.address" alt="">
					</li>
				</ul>
			</div>
		</div>

        <!-- 领卷 -->
		<div class="lingjuan">
			<div class="lingjuan_center">
				<div class="lingjuan_top">
					<h3>大家都在领</h3>
					<p>
						<span>3,3333,222</span>
						今日实时领卷
					</p>
				</div>
				<div class="lingjuan_msg"> 
					<p>
						<img src="http://awb.img.xmtbang.com/img/uploadnew/201412/18/de7ff7b55caf4100b7b725d163c2ec79.jpg" alt="">
						134******72刚刚领取了优惠券:【直营】德国进口叶黄素胶囊30粒*6盒
					</p>
				</div>
					<van-swipe class="allGoods" :autoplay="3000">
					<van-swipe-item v-for="(item,index) in allList" :key="index" class="allItem" style="width:85px">
						<img :src="item.pic">
						<p>{{item.dtitle}}</p>
						<p>
							<span>￥{{item.price}}</span>
							<i>{{item.couponPrice}}元券</i>
						</p>
						<h4>即将领完</h4>
					</van-swipe-item>
					</van-swipe>
			</div>
		</div>


        <!-- 发现好货 -->
        <div class="findGood">
			<div class="findGood_center">
				<p class="findTitle">发现好货</p>
				<ul>
					<li v-for="(item,index) in findGoodsList" :key="index">
						<img :src="item.pic" alt="">
						<h4 class="title">{{item.title}}</h4>
						<div class="quan">
							<span>{{item.quanJine}}元券</span>
							<span>聚划算</span>
						</div>
						<div class="daoshou">
						<p>券后<span>￥{{item.jiage}}</span></p>
						</div>
						<div class="yushou">
							<p>天猫
								<span>￥{{item.yuanjia}}</span>
							</p>
							<i>已定{{((item.xiaoliang)/10000).toFixed(1)}}万</i>
						</div>
					</li>
				</ul>
			</div>
		</div>
    </div>

    
</template>

<script>
import {homeCaidan,homeGoodsList,pinpaiList,findGoodsList,swiperList,youhuitoutiao,dongdongqiang,allList} from "@api/home";
export default {
    name:"home",
    data(){
        return{
            navList:[],
            goodsList:[],
            pinpaiList:[],
            findGoodsList:[],
			swiperList:[],
			youhuitoutiao:[],
			dongdongqiang:[],
			allList:[]
			
        }
    },
   async created() {
    //    获取到菜单键
       let data = await homeCaidan();
        this.navList = data.data;
        // 获取到商品信息
        let goods = await homeGoodsList();
        this.goodsList = goods.data;
        // console.log(goods.data);
        // 品牌特卖
        let pinpai  = await pinpaiList();
        this.pinpaiList = pinpai.data.config;
        // console.log(this.pinpaiList);
        // 发现好货
        let findGoods  = await findGoodsList();
        this.findGoodsList = findGoods.data.list;
        // console.log(this.findGoodsList);
        // 轮播图
        let swiper  = await swiperList();
        this.swiperList = swiper.data.config;
		// console.log(swiper);
		// 优惠头条
		 let toutiao  = await youhuitoutiao();
        this.youhuitoutiao = toutiao.data.config.list;
		// console.log(this.youhuitoutiao);
		// 咚咚抢
		 let dongdong  = await dongdongqiang();
		this.dongdongqiang = dongdong.data;
		// console.log(this.dongdongqiang);
		// 大家都在领
		 let all  = await allList();
        this.allList = all.data.config.list;
		// console.log(this.allList);

    },
}
</script>

<style lang="scss" scoped>
    .top{
        width: 100%;
        position: absolute;
        padding-bottom: .5rem;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
		overflow: scroll;
		background: #f6f6f6;
    }
    .header{
	padding-right:.1rem;
	height: .44rem;
	display: flex;
	align-items: center;
	background: #bb2210;
	position: sticky;
	top: 0;
	z-index: 20;
	input{
	flex: 1;
	height: .32rem;
	margin-left: .1rem;
	border-radius: .36rem;
	font-size: .14rem;
	text-indent: .3rem;
	border: none;
}
.sousuo{
	position: absolute;
	left: .2rem;
	color: #999;
}
p{
	width: .36rem;
	text-align: right;
	font-size: .12rem;
	color: #fff;
    text-align: center;
    span{
	display: block;
}
}
}

// 菜单栏
.nav{
	padding: 0 .25rem 0 .42rem;
	height: .3rem;
	/* position: relative; */
	top: .43rem;
	position: sticky;
	background: #bb2210;
    z-index: 20;
    .nav_left{
	position: absolute;
	left: 0;
	top: 0;
	display: inline-block;
	width: .42rem;
	height: 100%;
	text-align: center;
    line-height: .3rem;	
    a{
	border-bottom: 2px solid #fff;
	font-size: .12rem;
	color: #fff;
	padding-bottom: .02rem;
}
}
.nav_center{
	/* height: 100%; */
	width: 100%;
	overflow: scroll;
}
.nav_right{
	position: absolute;
	right: 0;
	top: 0;
	display: inline-block;
	width: .25rem;
	height: 100%;
	color: #fff;
	line-height: .3rem;
	text-align: center;
}
.caidan{
    min-width: 6.7rem;
    height: 30px;
    li{
	float: left;
	list-style: none;
	line-height: .3rem;
	text-align: center;
    padding: 0 .07rem;
    a{
	font-size: .12rem;
	color:rgba(255, 255, 255,0.65);
	text-decoration: none;
}
}
}
}

// 轮播图
.swiper{
	width: 3rem;
    height: 1.19rem; 
    margin: 0 auto;
    .banner{
        height: 100%;
        // width: 100%;
        background: pink;
        img{
	// width: 100%;
	height: 1.19rem;
	border-radius: .05rem;
}
    }
}

// 优惠
.youhui{
	padding: 0 .1rem;
	height: .67rem;
    margin-top: .05rem;
    ul{
	width: 100%;
	height: 100%;
	background:#fff;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
    align-items: center;
    li{
	width: 20%;
	height: .55rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
    align-items: center;
    img{
	width: .43rem;
	height: .43rem;
}
span{
	font-size: .12rem;
	color: #333;
}
}
}
}

// 消息
.msg{
	padding: 0 .1rem;
    height: .34rem;
    .msg_center{
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
    background:#fff;
    img{
	width: .49rem;
	height: .11rem;
}
.msg_item{
	flex: 1;
	width: 2.04rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: .12rem;
    margin-left: .09rem;
	height: .14rem;
    span{
	background: #ff7913;
	color: #fff;
	border-radius: .08rem;
	padding: 0 .05rem;
	height: .12rem;
}
}
i{
    color: #999;
    font-style: normal;
}
}
}

// 叮咚抢
.dingdong{
	padding: 0 .1rem;
	height:2.34rem;
    margin-top: .03rem;
    .dingdong_center{
	padding-left:.11rem;
	height: 100%;
	display: flex;
	justify-content: center;
	background: #fff;
    border-radius: .05rem;
    .dingdong_center-right{
	width: 1.45rem;
	height: 100%;
	float: right;
	background: #fff;
    border-radius: 0 .05rem .05rem 0;
    a{
	width: 100%;
    height: 1.22rem;
    &:nth-child(1) img{
	width: 100%;
	height:1.22rem;
}
&:nth-child(2) img{
	width: 100%;
	height:1.02rem;
}
}
}
    .dianchang{
	width: 100%;
	height: .18rem;
	display: flex;
	align-items: center;
	font-size: .13rem;
    margin-bottom: .12rem;
    h3{
        font-size: .12rem;
    }
    p{
	border-radius: .3rem;
	margin-left: .08rem;
	border: 1px solid red;
    color: red;
    span{
	background: red;
	color: #fff;
	border-radius: .3rem;
}
}
}
    .dingdong_center-left{
	width: 1.45rem;
    padding-top: .1rem;
	overflow: hidden;
	.dianchang_goods{
		width: 100%;
		height: 1.86rem;
		overflow: scroll;
    .dianchang_content {
			width:2.9rem;
			height: 1.86rem;
			overflow: hidden;
		.dianchang_item{
	width: .68rem;
	height: .82rem;
	float: left;
	padding: 0;
    margin: 0 .03rem .13rem 0;
	// background: red;
    img{
	width: .61rem;
	height: .61rem;
}
 p {
	 font-size:.12rem;
	 i{
	color: #ff3b32;
	font-size: .08rem;
	font-style: normal;
}
del{
	color: #999;
	font-size: .08rem;
}
 }
}}
}
}
}
}

// 品牌特卖
.temai{
	padding: 0 .1rem;
    height: 2.67rem;
    .temai_center{
	padding: .1rem;
	background: #fff;
	border-radius: .08rem;
    margin-top: .05rem;
    a{
	color: #000;
}
    ul{
	display: flex;
	height: 2.21rem;
	flex-wrap: wrap;
	justify-content: center;
    align-items: center;
     li{
	width: 25%;
    border-radius: .04rem;
	overflow: hidden;
    margin-top: .1rem;
    img{
	width: .67rem;
	height:1.02rem;
}
}
}
    .pinpai{
	display: flex;
	align-items: center;
    margin: 0 .04rem;
    h3{
	font-size: .12rem;
	margin-right: .04rem;
	font-weight: normal;
}
.pinpai_left{
	flex: 1;
	display: flex;
    align-items: center;
    span{
	color: #ff891d;
	font-size: .12rem;
	border-radius: .08rem 0 .08rem 0;
	background: #000;
	padding: 0 .03rem;
}
}
}
}
}

// 领券
.lingjuan{
	padding: 0 .1rem;
    height: 2.32rem;
    .lingjuan_center{
	padding: .1rem 0 0 .09rem;
	background: #fff;
	border-radius: .08rem;	
    .lingjuan_top{
	display: flex;
    margin-bottom: .11rem;
     h3{
	font-size: .12rem;
}
p{
	flex: 1;
	font-size: .12rem;
	color: #333;
	text-align: right;
    padding-right: .05rem;
    span{
	color: #f9635d;
	margin-right: .03rem;
}
}
}
.lingjuan_msg{
    height:.2rem;
    p{
	margin-right: .12rem;
	font-size: .12rem;
	background: rgba(254,58,51,.1);
	padding: .03rem 0;
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	position: relative;
	border-radius: .08rem;
    color: #fe3a33;
    img{
	position: absolute;
	width: .23rem;
	height: .23rem;
	left: 0;
	top: 0;
}
}
}
.allGoods{
	width: 100%;
    .allItem{
	padding-top: .07rem;
	margin-right: .13rem;
	width: .85rem;
    height: 1.57rem;
	width: .85rem;
    img{
	width: 100%;
	height: .85rem;
	margin-bottom: .05rem;
}
p{
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: .12rem;
    margin-bottom: .04rem;
    span{
	color: #ff3b32;
}
i{
	margin-left: .03rem;
	background: #fe3a33;
	color: #fff;
	padding: 0 .02rem;
	font-style: normal;
}
}
h4{
	font-size: .12rem;
	color: #fe3a33;
}
}
}
}
} 

// 发现好货
.findGood{
    padding: 0 .1rem;
    .findGood_center{
    overflow: hidden;
    .findTitle{
	width: 100%;
	font-size: 12px;
	color: #000;
	text-align: center;
}
ul{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
    align-items: center;
    li{
	width:1.47rem;
	margin-top: .09rem;
	border-radius: .05rem;
	background: #fff;
    padding-bottom: .08rem;
    height: 2.8rem;
    img{
	width: 1.47rem;
	height: 1.47rem;
}
.title{
	font-size: .12rem;
	margin: .07rem;
}
.quan {height: .2rem;
margin-bottom: .05rem;
    span
    {&:nth-child(1){
	background: #ff4f4f;
	padding: .03rem .03rem;
	color: #fff;
	font-size: .12rem;
	margin-right: .04rem;
	border-radius: .03rem;
	margin-left: .07rem;
}
 &:nth-child(2){
	/* background: #ff4f4f; */
	border: 1px solid #ff3b32;
	color: #ff3b32;
	font-size: .12rem;
	padding: .03rem .03rem;
	border-radius: .03rem;
}}}
.daoshou p{
	margin-left: .07rem;
	font-size: .12rem;
    color: #ff3b32;
    span{
	font-size: .16rem;
	margin-left: .05rem;
}

}
.yushou{
    padding: 0 .04rem;
    p{
	font-size: .12rem;
	color: #999;
    float: left;
    span{
	margin-left: .04rem;
}
}
i{
	font-size: .12rem;
	color: #999;
	float: right;
    margin-right: .04rem;
    font-style: normal;
}
}
}
}
}
}
</style>