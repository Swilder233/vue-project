<template>
<qing-scroll ref="scroll">
<!-- <div class="content" ref="goodsbody"> -->
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
        <!-- <span class="label label2">{{item.p_labels[0].title}}</span> -->
        <span class="label label2">爆款</span>
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
  </qing-scroll>
<!-- </div> -->
 
</template>
<script>
import { freeInfoList } from "@api/freeShipping";
// import BScroll from "better-scroll";
export default {
  name: "jx1",
  data() {
    return {
      recommend: [],
    };
  },
  created() {
      this.handleGetGoodsList();
  },
  methods: {
    async handleGetGoodsList(r, n_id, page, cac_id) {
      //在这里要获取数据
      n_id=n_id?n_id:58;
      let data1 = await freeInfoList(r, n_id, page, cac_id);
      this.recommend = data1.data.data;
    }
  },
  beforeRouteUpdate(to, from, next) {
    let { n_id } = to.query;
    this.n_id = n_id;
    this.handleGetGoodsList("nine/listajax", n_id, 1, "");
  },
  mounted(){
        //  console.log(this.$refs.scroll);
        this.$refs.scroll.handleScroll();
        this.$refs.scroll.handlepullingDown(()=>{
          console.log(12);
              this.handleGetGoodsList("nine/listajax", 296, 1, "");
        });
      
    }
   
};
</script>
<style>
/* li:hover{
  color: #fe0036;
  font-weight: bolder;
  border-bottom: 2px #fe0036 solid;
} */
.content{
  height: 100%;
  padding-bottom: .5rem;
}
.goods-new {
  /* position: absolute; */
  display: flex;
  flex-wrap: wrap;
  background: #f0f0f0;
  padding-bottom: .5rem; 
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