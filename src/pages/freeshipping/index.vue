<template>
  <div class="page">
    <Header :title="message"/>
    <div class="section_free">
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
    <!-- 使用框架 -->
       <van-tabs>
      <van-tab   :to="{name:'jx1',query:{n_id:item.id}}" v-for="(item,index) in btns" :title="item.name"  :key="index">
      </van-tab>
    </van-tabs>
   

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
export default {
  name: "freeshipping",
  components: {
    Header
  },
  data() {
    return {
      created(){
        // this.handleReload();
      },
      methods: {
        handleReload(){
          // window.location.reload();
        }
      },
      message:"9.9包邮",
      btns:[
        {
          name:"精选",
          id:58
        },
        {
          name:"居家百货",
          id:65
        },
        {
          name:"美食",
          id:296
        },
        {
          name:"服装",
          id:597
        },
        {
          name:"配饰",
          id:604
        },
        {
          name:"美妆",
          id:611
        },
        {
          name:"内衣",
          id:618
        },
        {
          name:"母婴",
          id:625
        },
        {
          name:"箱包",
          id:8703
        },
        {
          name:"数码配件",
          id:632
        },
        {
          name:"文娱车品",
          id:639
        },
        ]
    };
  },   
};
</script>

<style lang="scss" scoped>
.section_free ul {
  display: flex;
  flex-wrap: wrap;
}
.section_free ul li {
  display: flex;
  position: relative;
}
.section_free ul li h3 {
  position: absolute;
  font-weight: 400;
  color: #fc4073;
  font-size: 0.14rem;
  padding: 5px 0 0 5px;
}
.section_free ul li p {
  position: absolute;
  font-size: 0.12rem;
  color: #888888;
  top: 0.23rem;
  left: 0.05rem;
}
.section_free ul li:nth-of-type(1) img {
  width: 1.6rem;
  height: 0.8rem;
}
.section_free ul li:nth-of-type(4) img {
  width: 1.6rem;
  height: 0.8rem;
}
.section_free ul li img {
  width: 0.8rem;
  height: 0.8rem;
}

// 近一小时疯抢
// .nine_comlist {
// }
// .nine_comlist .nine_h3bt {
//   height: 0.4rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-weight: normal;
//   background: white;
//   /* clear: both; */
// }
// .nine_comlist .nine_h3bt span {
//   padding: 0 0.1rem;
//   font-size: 0.15rem;
//   color: #fc436d;
// }
// 

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

</style>