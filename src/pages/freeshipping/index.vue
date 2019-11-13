<template>
  <div class="page">
    <Header :title="message"/>
    <div class="section">
      <ul>
        <router-link tag="li" :to="{name:'special',query:{n_id:2,title:'9块9每日精选'}}">
          <img
            src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01UZfhB42JJhz1pOtjS_!!2053469401.jpg"
            alt
          />
          <h3>9块9每日精选</h3>
          <p>十元封顶</p>
        </router-link>
        <router-link tag="li" :to="{name:'special',query:{n_id:9,title:'3.9元区'}}">
          <img
            src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01G9vazf2JJhz1pP20u_!!2053469401.png"
            alt
          />
          <h3>3.9元区</h3>
          <p>居家低至5折</p>
        </router-link>
        <router-link tag="li" :to="{name:'special',query:{n_id:16,title:'5.9元区'}}">
          <img
            src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN01S4Q95E2JJhz0U2gF3_!!2053469401.png"
            alt
          />
          <h3>5.9元区</h3>
          <p>低至5.9元起</p>
        </router-link>
        <router-link tag="li" :to="{name:'special',query:{n_id:23,title:'19.9元专区'}}">
          <img
            src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN015NqWTV2JJhz0EHSWK_!!2053469401.jpg"
            alt
          />
          <h3>19.9元专区</h3>
          <p>半价抢不停</p>
        </router-link>
        <router-link tag="li" :to="{name:'special',query:{n_id:30,title:'8.9元区'}}">
          <img
            src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01K4Ru8t2JJhyx5uckX_!!2053469401.png"
            alt
          />
          <h3>8.9元区</h3>
          <p>变美有诀窍</p>
        </router-link>
       <router-link tag="li" :to="{name:'special',query:{n_id:37,title:'新品专区'}}">
          <img
            src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01RMjV3I2JJhyzg9WUt_!!2053469401.jpg"
            alt
          />
          <h3>新品专区</h3>
          <p>优惠提前购</p>
        </router-link>
      </ul>
    </div>
    
   
    <ul class="choose">
      <!-- <v-touch></v-touch> -->
     
      <router-link class="choose_li"  tag="li" :to="{name:'jx1',query:{n_id:58}}" >
        <b>精选</b>
      </router-link>
      
      <router-link class="choose_li"  tag="li" :to="{name:'jx1',query:{n_id:65}}">
        <b>居家百货</b>
      </router-link>

      <router-link class="choose_li"  tag="li" :to="{name:'jx1',query:{n_id:296}}">
        <b>美食</b>
      </router-link>

      <router-link class="choose_li"  tag="li" :to="{name:'jx1',query:{n_id:597}}">
        <b>服装</b>
      </router-link>

      <router-link class="choose_li"  tag="li" :to="{name:'jx1',query:{n_id:604}}">
        <b>配饰</b>
      </router-link>

      <router-link class="choose_li"  tag="li" :to="{name:'jx1',query:{n_id:611}}">
        <b>美妆</b>
      </router-link>

      <router-link class="choose_li"  tag="li" :to="{name:'jx1',query:{n_id:618}}">
        <b>内衣</b>
      </router-link>

      <router-link class="choose_li"  tag="li" :to="{name:'jx1',query:{n_id:625}}">
        <b>母婴</b>
      </router-link>
      <router-link class="choose_li"  tag="li" :to="{name:'jx1',query:{n_id:8703}}">
        <b>箱包</b>
      </router-link>
      <router-link class="choose_li"  tag="li" :to="{name:'jx1',query:{n_id:632}}">
        <b>数码配件</b>
      </router-link>
      <router-link class="choose_li"  tag="li" :to="{name:'jx1',query:{n_id:639}}">
        <b>文娱车品</b>
      </router-link>
     
    </ul>
    <!-- 近一小时疯抢 -->
    <!-- <div class="nine_comlist">
      <h3 class="nine_h3bt">
        <img
          src="https://cmsstatic.ffquan.cn//web/nine_special/images/nine_tab_left.svg?v=20191084829689"
          alt
        />
        <span class="feng">近一小时疯抢</span>
        <img
          src="https://cmsstatic.ffquan.cn//web/nine_special/images/nine_tab_right.svg?v=20191084829689"
          alt
        />
      </h3>
      <ul class="swiper-wrapper">
        <li class="swiper-slide">
          <img
            src="https://img.alicdn.com/imgextra/i1/2201195930685/O1CN01c9EkUU1Gvlrd6J7sG_!!2201195930685.jpg_310x310.jpg"
            alt
          />
          <p class="text">疯抢 6754 件</p>
          <p class="name">【拍6件】网红日本海盐饼干600g</p>
          <p class="money">
            <span>¥18.88</span>
          </p>
        </li>
        <li class="swiper-slide">
          <img
            src="https://img.alicdn.com/imgextra/i1/2201195930685/O1CN01c9EkUU1Gvlrd6J7sG_!!2201195930685.jpg_310x310.jpg"
            alt
          />
          <p class="text">疯抢 6754 件</p>
          <p class="name">【拍6件】网红日本海盐饼干600g</p>
          <p class="money">
            <span>¥18.88</span>
          </p>
        </li>
        <li class="swiper-slide">
          <img
            src="https://img.alicdn.com/imgextra/i1/2201195930685/O1CN01c9EkUU1Gvlrd6J7sG_!!2201195930685.jpg_310x310.jpg"
            alt
          />
          <p class="text">疯抢 6754 件</p>
          <p class="name">【拍6件】网红日本海盐饼干600g</p>
          <p class="money">
            <span>¥18.88</span>
          </p>
        </li>
        <li class="swiper-slide">
          <img
            src="https://img.alicdn.com/imgextra/i1/2201195930685/O1CN01c9EkUU1Gvlrd6J7sG_!!2201195930685.jpg_310x310.jpg"
            alt
          />
          <p class="text">疯抢 6754 件</p>
          <p class="name">【拍6件】网红日本海盐饼干600g</p>
          <p class="money">
            <span>¥18.88</span>
          </p>
        </li>
        <li class="swiper-slide">
          <img
            src="https://img.alicdn.com/imgextra/i1/2201195930685/O1CN01c9EkUU1Gvlrd6J7sG_!!2201195930685.jpg_310x310.jpg"
            alt
          />
          <p class="text">疯抢 6754 件</p>
          <p class="name">【拍6件】网红日本海盐饼干600g</p>
          <p class="money">
            <span>¥18.88</span>
          </p>
        </li>
        <li class="swiper-slide">
          <img
            src="https://img.alicdn.com/imgextra/i1/2201195930685/O1CN01c9EkUU1Gvlrd6J7sG_!!2201195930685.jpg_310x310.jpg"
            alt
          />
          <p class="text">疯抢 6754 件</p>
          <p class="name">【拍6件】网红日本海盐饼干600g</p>
          <p class="money">
            <span>¥18.88</span>
          </p>
        </li>
        <li class="swiper-slide">
          <img
            src="https://img.alicdn.com/imgextra/i1/2201195930685/O1CN01c9EkUU1Gvlrd6J7sG_!!2201195930685.jpg_310x310.jpg"
            alt
          />
          <p class="text">疯抢 6754 件</p>
          <p class="name">【拍6件】网红日本海盐饼干600g</p>
          <p class="money">
            <span>¥18.88</span>
          </p>
        </li>
      </ul>
    </div> -->
    <div class="ov_h"></div>

    <h3 class="h3bt_bg">
      <img
        src="https://cmsstatic.ffquan.cn//web/nine_special/images/nine_tab_left_tow.svg?v=20191084829689"
        alt
      />
      <span class="colout">精选推荐</span>
      <img
        src="https://cmsstatic.ffquan.cn//web/nine_special/images/nine_tab_right_tow.svg?v=20191084829689"
        alt
      />
    </h3>
    <!-- 精选推荐 -->
    
   <router-view></router-view>
  </div>
</template>
<script>
import Header from '@common/components/headers'
// import Vue from "vue";
// import { Button } from "vant";
// import {freeInfoList,jjInfoList} from "@api/freeShipping";
export default {
  name: "freeshipping",
  components: {
    Header
  },
  data() {
    return {
      message:"9.9包邮",
      btns:[{name:""}]
    };
  },   
};
</script>

<style lang="scss">
.section ul {
  display: flex;
  flex-wrap: wrap;
}
.section ul li {
  display: flex;
  position: relative;
}
.section ul li h3 {
  position: absolute;
  font-weight: 400;
  color: #fc4073;
  font-size: 0.14rem;
  padding: 5px 0 0 5px;
}
.section ul li p {
  position: absolute;
  font-size: 0.12rem;
  color: #888888;
  top: 0.23rem;
  left: 0.05rem;
}
.section ul li:nth-of-type(1) img {
  width: 1.6rem;
  height: 0.8rem;
}
.section ul li:nth-of-type(4) img {
  width: 1.6rem;
  height: 0.8rem;
}
.section ul li img {
  width: 0.8rem;
  height: 0.8rem;
}

.choose {
  /* width: 10rem; */
  height: 0.54rem;
  display: flex;
  overflow: auto;
  border-top: 1px #e9e6e6 solid;
  border-bottom: 1px #e9e6e6 solid;
  background: white;
  position: sticky;
  top: 0;
  z-index: 10
}
.choose .choose_li {
  display: flex;
  margin-right: 0.1rem;
  margin-left: 0.1rem;
  height: 0.54rem;
  width: 0.86rem;
  // padding: 0 0.1rem;
}
.choose .choose_li b {
  font-size: 0.14rem;
  font-weight: 400;
  display: inline-block;
  width: 0.6rem;
  height: 0.54rem;
  line-height: 0.54rem;
  text-align: center;
}
.choose .active{
  color: #fc4073;
}


// 近一小时疯抢
.nine_comlist {
}
.nine_comlist .nine_h3bt {
  height: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  background: white;
  /* clear: both; */
}
.nine_comlist .nine_h3bt span {
  padding: 0 0.1rem;
  font-size: 0.15rem;
  color: #fc436d;
}
.swiper-wrapper {
  display: flex;
  overflow: auto;
  border-top: 1px #e9e6e6 solid;
  border-bottom: 1px #e9e6e6 solid;
  background: white;
}
.swiper-wrapper .swiper-slide {
  display: flex;
  margin-right: 0.1rem;
  height: 100%;
  flex-direction: column;
  width: 0.83rem;
  margin-right: 0.1rem;
}
.swiper-wrapper .swiper-slide img {
  width: 0.83rem;
  height: 0.83rem;
}
.swiper-wrapper .swiper-slide .text {
  border-radius: 0 0 0.02rem 0.05rem;
  text-align: center;
  text-indent: 0.2em;
  background: #fff3f3;
  border: 1px solid #ffbdbf;
  color: #fc4d52;
  font-size: 10px;
  overflow: hidden;
  height: 14px;
  line-height: 14px;
}
.swiper-wrapper .swiper-slide .name {
  font-size: 0.11rem;
  padding: 0.05rem 0 0;
  margin-bottom: 0.05rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: #666;
}
.swiper-wrapper .swiper-slide .money {
  color: #ff2b22;
  font-size: 0.14rem;
  overflow: hidden;
  margin: 0 0 0.05rem;
  width: 1rem;
}

.ov_h {
  height: 0.05rem;
  clear: both;
  background: #f0f0f0; 
  // background: pink;
  overflow: hidden;
}

.h3bt_bg {
  width: 100%;
  text-align: center;
  height: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: red; */
  background: white;
}
.h3bt_bg .colout {
  color: #c043fc;
  font-size: 0.15rem;
  font-weight: normal;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
}

.goods-new {
  display: flex;
  flex-wrap: wrap;
  background: #f0f0f0;
}
.goods-new .goods-new_items {
  width: 1.53rem;
  height: 2.69rem;
  border-radius: 0.05rem;
  background: white;
  margin-bottom: 0.05rem;
}
.goods-new .goods-new_items:nth-of-type(2n + 1) {
  margin-right: 0.05rem;
  margin-left: 0.05rem;
}
.goods-new .goods-new_items .product_title {
  margin-left: 0.1rem;
  width: 1.33rem;
  padding-right: 0.1rem;
}
.goods-new .goods-new_items .product_title .title_text {
  font-size: 0.13rem;
  font-weight: 400;
  color: #333;
  max-width: 0.97rem;
  text-align: left;
  margin: auto;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-new .goods-new_items .product_title .tm {
  min-width: 0.23rem;
  height: 0.13rem;
  background-color: #fe0036;
  border-radius: 0.02rem;
  background-image: url("https://cmsstatic.ffquan.cn//wap_new/common/images/tb.png?v=2019-11-10");
  display: inline-block;
  margin-right: 3px;
  background-size: 0.19rem 0.1rem;
  background-repeat: no-repeat;
  background-position: center;
}

.goods-new .goods-new_items .price {
  font-size: 0.1rem;
  font-weight: 400;
  color: #666;
  margin-bottom: -0.03rem;
  display: flex;
  align-items: baseline;
  vertical-align: text-bottom;
  margin-left: 0.1rem;
}
.goods-new .goods-new_items .price .RMB {
  font-size: 12px;
  font-weight: 500;
  color: #ff2b22;
  margin-left: 1px;
}
.goods-new .goods-new_items .price .price_num {
  font-size: 19px;
  font-weight: 500;
  color: #ff2b22;
}
.goods-new .goods-new_items .label_box {
  margin-left: 0.1rem;
}
.goods-new .goods-new_items .label {
  height: 8px;
  border-radius: 2px;
  border: 1px solid;
  font-size: 8px;
  font-weight: 400;
  color: #ff0137;
  line-height: 1;
  padding: 0 3px;
  margin-right: 5px;
  border-color: #f57223;
  color: #f57223;
}
.goods-new .goods-new_items .salse {
  margin-left: 0.1rem;
}
.goods-new .goods-new_items .juan {
  height: 0.12rem;
  background: linear-gradient(90deg, #ff8873 0, #ff4f4f 100%);
  border-radius: 0.02rem;
  padding: 0 0.05rem 0 0.12rem;
  font-size: 0.08rem;
  font-weight: 400;
  color: #fff;
  line-height: 0.13rem;
  display: inline-block;
  position: relative;
  z-index: 1;
  zoom: 1;
  top: 0;
}
.salse span {
  font-size: 9px;
  font-weight: 400;
  color: #888;
}

.goods-new .goods-new_items img {
  width: 1.52rem;
  height: 1.52rem;
}

</style>