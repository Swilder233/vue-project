<template>
  <div class="page">
    <Header :title="message" />
    <div class="ranking_nav_tab opacity1 ranking_nav_tab3">
      <div>
        <span>00:00</span>
        <p>正在抢购</p>
      </div>
      <div class="ranking_banner">
        <img
          src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01bxRFEY2JJhz5KNm0P_!!2053469401.png?v=752320"
          alt
        />
      </div>
    </div>
    <van-tabs animated>
      <van-tab
        :to="{name:'meiri',query:{id:item.id}}"
        v-for="(item,index) in timeList"
        :title="item.time + '抢购'"
        :key="index"
      ></van-tab>
    </van-tabs>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "@common/components/headers";
export default {
  name: "half",
  components: {
    Header
  },
  data() {
    return {
      message: "每日半价",
      timeList: [
        {
          time: "15:00",
          msg: "疯抢",
          id: "15"
        },
        {
          time: "19:00",
          msg: "疯抢",
          id: "19"
        },
        {
          time: "21:00",
          msg: "疯抢",
          id: "21"
        },
        {
          time: "00:00",
          msg: "疯抢",
          id: "00"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.ranking_nav_tab {
  height: 0.44rem;
  width: 100%;
  background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
  /* display: flex;
    justify-content: center;
    align-items: center; */
}
.ranking_nav_tab div {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.ranking_nav_tab span {
  color: white;
  font-size: 0.2rem;
  display: block;
}
.ranking_nav_tab p {
  color: white;
  font-size: 0.12rem;
}
.ranking_banner {
  width: 100%;
  height: 0.8rem;
}
.ranking_banner img {
  height: 0.8rem;
}
.ranking_ullit3 li {
  border-bottom: solid 1px #eee;
  height: 1.2rem;
  padding: 0.1rem 0.1rem 0.1rem 0;
  margin-bottom: 0.05rem;
}
.ranking_ullit {
  padding-top: 0.1rem;
  background: #f5f5f5;
}

.ranking_ullit3 li a img {
  width: 1.2rem;
}
.van-tabs__wrap {
  margin-top: -0.4rem;
}

// .section{
//     background: white;
// }

// .section ul{
//     width: 100%;
//     height: 1.1rem;
//     margin-top: -0.1rem;
//     background: white;
// }
// .section ul li{
//     width: 100%;
//     height: 1.1rem;
//     padding: 0 .1rem;
//     display: flex;
//     background: white;
//     border-top: 1px solid #eeeaea;
//     padding: .15rem 0;
// }
// .section ul li .container{
//     display: flex;
//     flex-direction: column;
//     width: 1.8rem;
// }
// .section ul li .lazy{
//     width: 1.12rem;
//     height: 1.12rem;
// }
// .section ul li .lazy img{
//     width: 1.12rem;
//     height: 1.12rem;
// }
// .section ul li .content{
//     width: 1.8rem;
//     height: 1.15rem;
//     margin-left:0.16rem ;
// }
// .section ul li .content .glc-title{
//     text-align: left;
//     font-family: Arial,"Microsoft yahei";
//     font-size: .13rem;
//     text-overflow: ellipsis;
//     overflow: hidden;
//     white-space: nowrap;
// }
// .section ul li .content .glc-des {
//     height: .32rem;
//     margin: .01rem 0 .15rem;
//     line-height: .16rem;
//         font-size: .12rem;
//         color: #FF3C32;
//         overflow: hidden;
// }
// .section ul li .glc-zdt{
//     height: .2rem;
//     margin-left: .16rem;

// }
// .section ul li .glc-zdt .goods_coupon{
//     text-align: center;
//     width: .6rem;
//     height: .20rem;
//     margin-left: 1px;
//     right: 0;
//     float: left;
//     line-height: 20px;
//     font-size: .8em;
//     color: #FF7800;
//     // background-image: url(../img/quanbg.png);
//     background-size: 100% 100%;
//     background-repeat: no-repeat;
// }
// .section ul li .glc-zdt .hasq{
//     float: right;
//     color: #888888;
//     font-size: .12rem;
//     margin-top: .05rem;
// }
// .section ul li .cf .glc-price {
//     font-size: 1em;
//     color: #FF2B22;
//     float: left;
//     font-family: 'microsoft yahei';
//     font-size: .12rem;
//     margin-left: .16rem;
//     /* width: 100%; */
// }
// .section ul li .cf .glc-price .priceNum{
//     font-size: .16rem;
// }
// .section ul li .glc-btn {
//     font-size: .12rem;
//     color: white;
//     float: right;
//     // background-image: url(../img/dqbtn.png);
//     background-size:100% 100% ;
//     padding: 0 10px 0 0;
//     margin-top:0.05rem;
// }
</style>