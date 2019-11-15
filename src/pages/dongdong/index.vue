<template>
  <div class="page">
    <Header :title="message" />
    <div class="kuanghuan">
      <van-tabs  v-model="active" sticky>
      <van-tab   :to="{name:'feng',query:{id:item.id}}" v-for="(item,index) in timeList" :title="item.time + '疯抢'"   :key="index">
      </van-tab>
    </van-tabs>
    </div>
    <!-- <div class="kuanghuan">
      <ul>
        <router-link
          :to="{name:'feng',query:{id:item.id}}"
          tag="li"
          v-for="(item,index) in timeList"
          :key="index"
        >
          <p>{{item.time}}</p>
          <span>{{item.msg}}</span>
        </router-link>
      </ul> -->
    <!-- </div> -->
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "@common/components/headers";

// import Vue from 'vue';
// import { Tab, Tabs } from 'vant';
// Vue.use(Tab).use(Tabs);

export default {
  name: "dongdong",
  components: {
    Header
  },
  data() {
    return {
      activeIndex: 0,
      message: "咚咚抢",
      timeList: [
        {
          time: "08:00",
          msg: "疯抢",
          id: 1
        },
        {
          time: "10:00",
          msg: "疯抢",
          id: 2
        },
        {
          time: "12:00",
          msg: "疯抢",
          id: 3
        },
        {
          time: "00:00",
          msg: "疯抢",
          id: 4
        }
      ]
    };
  },
  methods: {
    handle(index) {
      this.activeIndex = index;
    }
  }
};
</script>
<style lang="scss">
.active {
  background: linear-gradient(to right, #ff9c00, #ff5d00);
}
.kuanghuan {
  overflow: hidden;
  width: 100%;
  height: 1.78rem;
  background: url("https://img.alicdn.com/imgextra/i4/2053469401/O1CN01iGGS0k2JJhtBDpTGy-2053469401.jpg?v=201910105824523");
  background-size: contain;
  background-repeat: no-repeat;
  /* position: relative; */
}
/* .van-tabs{
  margin-top: .2rem
}
.van-tab{
  background: transparent;
} */
.kuanghuan  .van-tabs {
  position: relative;
  /* background: white; */
  display: flex;
  height: 0.4rem;
  top: 1.25rem;
  color: white;
  width: 100%;
  div{
    width: 100%;
  }
}
.kuanghuan .van-tabs .van {
  width: 0.64rem;
  font-size: 0.14rem;
  text-align: center;
  border-radius: 0.05rem;
}
.van-tabs__wrap{
  width: 100%
}
.van-tabs__nav{
  width: 100%;
}
/* .van-tabs--line .van-tabs__wrap {
   background: #ff5d00;
} */

/* .kuanghuan ul li:nth-child(1){
     background: linear-gradient(to right, #ff9c00, #ff5d00);
} */
.kuanghuan ul li:hover {
  background: linear-gradient(to right, #ff9c00, #ff5d00);
}
</style>