<template>
  <div class="page">
    <Header :title="title"></Header>
    <h3 class="nine_h3bt h3bt_bg">
      <img
        src="https://cmsstatic.ffquan.cn//web/nine_special/images/nine_tab_left.svg?v=20191084829689"
        alt
      />
      <span class="feng">大家都在买</span>
      <img
        src="https://cmsstatic.ffquan.cn//web/nine_special/images/nine_tab_right.svg?v=20191084829689"
        alt
      />
    </h3>
    <div class="dianji">
      <div class="swiper-slide active swiper-slide-active">
        <router-link class="swiper-cent" tag="li" :to="{name:'detail',query:{id:item.id,goodsid:item.goodsid,title:item.d_title,price:item.jiage,quan:item.quan_jine,xiaoliang:item.xiaoliang,img:item.pic,yuanjia:item.yuanjia}}" v-for="(item) in hot " :key="item.goodsid">
          <a>
            <img :src="item.pic" alt />
          </a>
          <p style="height: .16rem;  line-height:.16rem; font-size: 0.11rem;" class="text">
            <i class="iconfont icon-remen"></i>
            50万人已买
          </p>
          <p class="name">{{item.d_title}}</p>
          <p class="money">
            ¥{{item.jiage}}
            <span>券后</span>
          </p>
        </router-link>
      </div>
    </div>

    <h3 class="nine_h3bt h3bt_bg jingxuan">
      <img
        src="https://cmsstatic.ffquan.cn//web/nine_special/images/nine_tab_left.svg?v=20191084829689"
        alt
      />
      <span class="feng">为您精选</span>
      <img
        src="https://cmsstatic.ffquan.cn//web/nine_special/images/nine_tab_right.svg?v=20191084829689"
        alt
      />
    </h3>
    <ul class="goods-new row-s">
      <li class="goods-new_items" v-for="(item) in recommend " :key="item.goodsid">
        <img :src="item.pic" alt />
        <h2 class="product_title">
          <i class="labelTop tm"></i>
          <span class="title_text">{{item.d_title}}</span>
        </h2>
        <h3 class="price">
          <span>券后&nbsp;</span>
          <span class="RMB">￥</span>
          <span class="price_num">{{item.jiage}}</span>
        </h3>
        <p class="label_box">
          <!-- <span class="label label2">爆款</span> -->
          <span class="juan">
            <span>券</span>
            {{item.quan_jine}}元
          </span>
        </p>
        <div class="salse">
          <span>已售{{(Number(item.xiaoliang)/10000).toFixed(1)}}万</span>&nbsp;
          <span>评论{{(Number(item.comment)/10000).toFixed(1)}}万</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Header from "@common/components/headers";
import { areaInfoList } from "@api/freeShipping";
export default {
  name: "special",
  components: {
    Header
  },
  data() {
    return {
      n_id: "",
      title: "",
      hot:[],
      recommend: []
    };
  },
  created() {
    let { n_id, title } = this.$route.query;
    this.n_id = n_id;
    this.title = title;
    this.handleGetGoodsList("nine/listajax", 1, 1, n_id, "");
  },
  methods: {
    async handleGetGoodsList(r, page, storey, n_id, cac_id) {
      let data1 = await areaInfoList(r, page, storey, n_id, cac_id);
      for(var i=0;i<3;i++){
          this.hot.push(data1.data.data[i]);
      }
      for(var i=3;i<data1.data.data.length;i++){
          this.recommend.push(data1.data.data[i]);
      }
    //   this.recommend = data1.data.data;
    }
  }
};
</script>
<style>
.nine_h3bt {
  font-weight: 400;
  line-height: 40px;
  text-align: center;
  margin: 0;
  z-index: 0;
}
.nine_h3bt {
  height: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  clear: both;
  font-size: 0.15rem;
  color: #c043fc;
  /* background-image: -webkit-gradient(linear,left 20,right 0,from(#873CFE),to(#FD295E)); */

  /* -webkit-text-fill-color: transparent */
  height: 0.4rem;
  background: url("https://cmsstatic.ffquan.cn//web/nine_special/images/nine_tab_bg.svg?v=20191084829689")
    center center no-repeat #fff;
  background-size: auto 100%;
}
.nine_h3bt.h3bt_bg span {
  padding: 0px 0.1rem;
}

.dianji {
  height: 1.9rem;
  width: 100%;
  background: white;
  display: flex;
  margin-top: 0.01rem;
  overflow: hidden;
}
.dianji img {
  width: 0.93rem;
}
.swiper-slide {
  /* margin-right: .1rem; */
  width: 100%;
  display: flex;
}
.swiper-slide:nth-child(3) {
  margin-right: 0;
}
.swiper-cent {
  margin-right: 0.09rem;
}
.name {
  -webkit-line-clamp: 2;
  color: #333;
  height: 2.9em;
  font-size: 0.12rem;
  padding: 0.05rem 0 0;
  margin-bottom: 0.05rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.text {
    margin-top: .05rem;
  border-radius: 0 0 0.02rem 0.02rem;
  text-align: center;
  text-indent: 0.2em;
  background: #fff3f3;
  border: 1px solid #ffbdbf;
  color: #fc4d52;
  font-size: 10px;
  overflow: hidden;
  height: 0.18rem;
  line-height: 0.18rem;
}
.money {
  color: #ff2b22;
  font-size: 0.14rem;
  overflow: hidden;
  margin: 0 0 0.05rem;
  width: 1rem;
}
.money span {
  color: #888;
  font-size: 0.11rem;
  /* display: none; */
}
.jingxuan {
  margin-top: 0.1rem;
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
  /* background-image: url(../img/tb.png); */
  background-image: url("https://img.alicdn.com/imgextra/i1/2201195930685/O1CN01c9EkUU1Gvlrd6J7sG_!!2201195930685.jpg_310x310.jpg_.webp");
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