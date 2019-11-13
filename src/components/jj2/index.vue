<template>
    <ol class="goods-new row-s">
      <li class="goods-new_items" v-for="(item) in recommend " :key="item.goodsid">
        <img
          :src="item.pic"
          alt
        />
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
            <span>券</span>{{item.quan_jine}}元
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
import {jjInfoList} from "@api/freeShipping";
export default {
    name:"jj2",
     data() {
    return {
      recommend:[],
    };
  },
    async created(){
      let data1 =await jjInfoList();
      // console.log(data.data.data);
      this.recommend=data1.data.data;
  }    
}
</script>
<style>