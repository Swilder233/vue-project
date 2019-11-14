<template>


  <ol class="goods-new row-s">
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
  </ol>
</template>
<script>
import { freeInfoList } from "@api/freeShipping";
export default {
  name: "jx1",
  data() {
    return {
      recommend: [],
      n_id: 58,
      ids: []
      // list: []
    };
  },
  created() {
    if (this.n_id.length == 0) {
      let { n_id } = this.$route.query;
      this.n_id = n_id;
      this.handleGetGoodsList("nine/listajax", this.n_id, 1, "");
    } else {
      this.n_id = 58;
      this.handleGetGoodsList("nine/listajax", this.n_id, 1, "");
    }
  },
  methods: {
    async handleGetGoodsList(r, n_id, page, cac_id) {
      //在这里要获取数据

      let data1 = await freeInfoList(r, n_id, page, cac_id);

      this.recommend = data1.data.data;

      // switch (
      //   n_id //存到sessionStorage中
      // ) {
      //   case 58:
      //     sessionStorage.setItem(
      //       "nineGoodsList1",
      //       JSON.stringify(data1.data.data)
      //     );
      //     break;
      //   case 65:
      //     sessionStorage.setItem(
      //       "nineGoodsList2",
      //       JSON.stringify(data1.data.data)
      //     );
      //     break;
      //   case 296:
      //     sessionStorage.setItem(
      //       "nineGoodsList3",
      //       JSON.stringify(data1.data.data)
      //     );
      //     break;
      //   case 597:
      //     sessionStorage.setItem(
      //       "nineGoodsList4",
      //       JSON.stringify(data1.data.data)
      //     );
      //     break;
      //   case 604:
      //     sessionStorage.setItem(
      //       "nineGoodsList5",
      //       JSON.stringify(data1.data.data)
      //     );
      //     break;
      //   case 611:
      //     sessionStorage.setItem(
      //       "nineGoodsList6",
      //       JSON.stringify(data1.data.data)
      //     );
      //     break;
      //   case 618:
      //     sessionStorage.setItem(
      //       "nineGoodsList7",
      //       JSON.stringify(data1.data.data)
      //     );
      //     break;
      //   case 625:
      //     sessionStorage.setItem(
      //       "nineGoodsList8",
      //       JSON.stringify(data1.data.data)
      //     );
      //     break;
      //   case 8703:
      //     sessionStorage.setItem(
      //       "nineGoodsList9",
      //       JSON.stringify(data1.data.data)
      //     );
      //     break;
      //   case 632:
      //     sessionStorage.setItem(
      //       "nineGoodsList10",
      //       JSON.stringify(data1.data.data)
      //     );
      //     break;
      //   case 639:
      //     sessionStorage.setItem(
      //       "nineGoodsList11",
      //       JSON.stringify(data1.data.data)
      //     );
      //     break;
      // }
    }
  },
  beforeRouteUpdate(to, from, next) {
    let { n_id } = to.query;
    this.n_id = n_id;
    // this.handleGetGoodsList("nine/listajax", n_id, 1, "");
    this.ids.push(n_id);
    console.log(this.ids);

    // for (var n = 0; n < this.ids.length; n++) {
    //   if (n_id == this.ids[n]) {
    //     switch (
    //       n_id //存到sessionStorage中
    //     ) {
    //       case 58:
    //          this.recommend=JSON.parse(sessionStorage.getItem("nineGoodsList1"));
    //         break;
    //       case 65:
    //          this.recommend=JSON.parse(sessionStorage.getItem("nineGoodsList2"));
    //         break;
    //       case 296:
    //          this.recommend=JSON.parse(sessionStorage.getItem("nineGoodsList3"));
    //         break;
    //       case 597:
    //          this.recommend=JSON.parse(sessionStorage.getItem("nineGoodsList4"));
    //         break;
    //       case 604:
    //          this.recommend=JSON.parse(sessionStorage.getItem("nineGoodsList5"));
    //         break;
    //       case 611:
    //          this.recommend=JSON.parse(sessionStorage.getItem("nineGoodsList6"));
    //         break;
    //       case 618:
    //          this.recommend=JSON.parse(sessionStorage.getItem("nineGoodsList7"));
    //         break;
    //       case 625:
    //          this.recommend=JSON.parse(sessionStorage.getItem("nineGoodsList8"));
    //         break;
    //       case 8703:
    //          this.recommend=JSON.parse(sessionStorage.getItem("nineGoodsList9"));
    //         break;
    //       case 632:
    //          this.recommend=JSON.parse(sessionStorage.getItem("nineGoodsList10"));
    //         break;
    //       case 639:
    //          this.recommend=JSON.parse(sessionStorage.getItem("nineGoodsList11"));
    //         break;
    //     }
    //   } else { 
        this.handleGetGoodsList("nine/listajax", n_id, 1, "");
        // console.log("again");
    //   }
    // }
  }
};
</script>
<style>
li:hover{
  color: #fe0036;
  font-weight: bolder;
  border-bottom: 2px #fe0036 solid;
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