<template>
  <div class="sec">
   
      <ul>
        <div class="ranking_banner">
          <img
            src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01bxRFEY2JJhz5KNm0P_!!2053469401.png?v=752320"
            alt
          />
        </div>
        <li v-for="(item,index) in getList" :key="index">
          <div class="lazy">
            <img :src="item.picUrl" alt />
          </div>
          <div class="container">
            <div class="con">
              <p class="glc-title">{{item.name}}</p>
              <p class="glc-des">{{item.fashionTag}}</p>
              <span class="minge">{{item.yijuhua}}</span>
            </div>
            <div class="glc-zdt">
              <div class="goods_coupon">
                <span class="quanjine">{{item.preferential}}</span>
              </div>
              <p class="hasq">
                已抢
                <span>{{item.itemSoldNum}}</span>件
              </p>
            </div>
            <div class="cf gl-bot">
              <p class="glc-price">
                <span class="qh">到手价 ￥</span>
                <span class="priceNum">{{item.price}}</span>
              </p>
              <van-tag type="danger" class="glc-link glc-btn msq" v-show="flagGo">GO></van-tag>
              <van-tag type="danger" class="glc-link glc-btn msq" v-show="flagSoon">即将开始</van-tag>
            </div>
          </div>
        </li>
      </ul>
   
  </div>
</template>
<script>
import { halfInfoList } from "@api/half";
// import {dailyInfoList} from "@api/half"
export default {
  name: "meiri",
  data() {
    return {
      getList: [],
      flagGo:false,
      flagSoon:false,
    };
  },
  created() {
    this.handleList("15");
    // this.handleTime();
  },

  methods: {
    async handleList(id) {
      let data = await halfInfoList(id);
      // let data1 = await dailyInfoList()
      // console.log(data1);
      this.getList = data.data.list;
    },
    //  async handleTime() {
    //   let data1 = await dailyInfoList()
    //      console.log(data1.data);
    //   for(var i=0;i<data1.data.length;i++){
    //     if(data1.data[i].status=="after"){
    //         this.flagSoon=false;
    //          this.flagGo=true;
    //     }else{
    //          this.flagGo=false;
    //          this.flagSoon=true;
    //     }
    //   } 
    // }
  },
  beforeRouteUpdate(to, from, next) {
    let { id } = to.query;
    console.log(id);
    this.handleList(id);
  },
  
};
</script>
<style lang="scss">
.van-tabs{
  background: linear-gradient(to left, #FA4DBE 0, #FBAA58 100%);
}
.ranking_banner img{
  width:100%
}
.sec {
  background: white;
  overflow: scroll;
  height: 100%;
  
}
.minge{
      color: #FF2B22;
      font-size: .13rem;
      position: absolute;
      top: .3rem;
      margin-left: .05rem;
          background: #FFECEB;
    display: inline-block;
    border-radius: 2px;
    border: 1px solid #ffa5a1;
    color: #FF2B22;
}
.sec ul {
  width: 100%;
  margin-top: -0.1rem;
  background: white;
}

.sec ul li {
  width: 100%;
  height: 1.5rem;
  padding: 0 0.1rem;
  display: flex;
  background: white;
  border-top: 1px solid #eeeaea;
  padding: 0.15rem 0;
}
.sec ul li .container {
  display: flex;
  flex-direction: column;
  width: 1.8rem;
}
.sec ul li .lazy {
  width: 1.12rem;
  height: 1.12rem;
}
.sec ul li .lazy img {
  width: 1.12rem;
  height: 1.12rem;
}
.sec ul li .con {
  width: 1.8rem;
  height: 1.15rem;
  margin-left: 0.16rem;
  position:relative;
}
.sec ul li .con .glc-title {
  text-align: left;
  font-family: Arial, "Microsoft yahei";
  font-size: 0.13rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.sec ul li .con .glc-des {
  height: 0.32rem;
  margin: 0.01rem 0 0.15rem;
  line-height: 0.16rem;
  font-size: 0.12rem;
  color: #ff3c32;
  overflow: hidden;
}
.sec ul li .glc-zdt {
  height: 0.2rem;
  margin-left: 0.16rem;
}
.sec ul li .glc-zdt .goods_coupon {
  text-align: center;
  width: 0.6rem;
  height: 0.2rem;
  margin-left: 1px;
  right: 0;
  float: left;
  line-height: 20px;
  font-size: 0.8em;
  border-radius: 2px;
   color: #FF2B22;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.sec ul li .glc-zdt .hasq {
  float: right;
  color: #888888;
  font-size: 0.12rem;
  margin-top: 0.05rem;
}
.sec ul li .cf .glc-price {
  font-size: 1em;
  color: #ff2b22;
  float: left;
  font-family: "microsoft yahei";
  font-size: 0.12rem;
  margin-left: 0.16rem;
  /* width: 100%; */
}
.sec ul li .cf .glc-price .priceNum {
  font-size: 0.16rem;
}
.sec ul li .glc-btn {
  font-size: 0.12rem;
  // background: black;
  color: white;
  float: right;
  margin-top: 0.05rem;
}
</style>