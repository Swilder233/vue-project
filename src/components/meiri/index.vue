<template>
    <div class="sec">
      <qing-scroll>
         <ul>
        <li v-for="(item,index) in getList" :key="index">
          <div class="lazy">
            <img
              :src="item.picUrl"
              alt
            />
          </div>
          <div class="container">
            <div class="content">
              <p class="glc-title">{{item.name}}</p>
              <p class="glc-des">{{item.fashionTag}}</p>
            </div>
            <div class="glc-zdt">
              <div class="goods_coupon">
                <span class="quanjine">{{item.couponAmount}}</span>元券
              </div>
              <p class="hasq">
                剩余
                <span>{{item.restCount}}</span>件
              </p>
            </div>
            <div class="cf gl-bot">
              <p class="glc-price">
                <span class="qh">到手价 ￥</span>
                <span class="priceNum">{{item.price}}</span>
              </p>
              <div class="glc-link glc-btn msq">马上抢</div>
            </div>
          </div>
        </li>
      </ul>
      </qing-scroll>
     
    </div>

</template>
<script>
import {halfInfoList} from "@api/half";
export default {
  name: "meiri",
  data(){
    return{
    getList: []
    }
  },
  created() {
    this.handleList("15");
  },
  methods: {
    async handleList(id) {
      let data = await halfInfoList(id)
         console.log(data.data.list);
      this.getList=data.data.list;
    }
  },
  beforeRouteUpdate(to, from, next) {
    let { id } = to.query;
    console.log(id);
    this.handleList(id);
  }
};
</script>
<style lang="scss">
.sec {
  background: white;
  // margin-top: 0.85rem;
  overflow: scroll;
  height: 100%;
  // padding-bottom: .5rem;
}
.sec ul {
  width: 100%;
  // height: 1.5rem;
  margin-top: -0.1rem;
  background: white;
  // padding-bottom:0.5rem;
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
.sec ul li .content {
  width: 1.8rem;
  height: 1.15rem;
  margin-left: 0.16rem;
}
.sec ul li .content .glc-title {
  text-align: left;
  font-family: Arial, "Microsoft yahei";
  font-size: 0.13rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.sec ul li .content .glc-des {
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
  color: #ff7800;
  background-image: url("https://cmsstatic.ffquan.cn//web/images/ddq/quanbg.png?v=201910105824523");
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
  color: white;
  float: right;
  background-image: url("https://cmsstatic.ffquan.cn//web/images/ddq/dqbtn.png?v=201910105824523");
  background-size: 100% 100%;
  padding: 0 10px 0 0;
  margin-top: 0.05rem;
}
</style>