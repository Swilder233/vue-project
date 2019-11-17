<template>
  <div class="page">
    <Header :title="message" />
    <div class="kuanghuan">
      <van-tabs>
      <van-tab   :to="{name:'feng',query:{id:item.id}}" v-for="(item,index) in timeList" :title="item.time + '疯抢'" :key="index" style="background:url('https://cmsstatic.ffquan.cn//web/images/ddq/navbg.png?v=20191015394710')">
      </van-tab>
    </van-tabs>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "@common/components/headers";
export default {
  name: "dongdong",
  components: {
    Header
  },
  data() {
    return {
      activeIndex: 0,
      message: "咚咚抢",
      active:"",
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
          time: "14:00",
          msg: "疯抢",
          id: 4
        },
        {
          time: "00:00",
          msg: "疯抢",
          id: 5
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
<style lang="scss" scoped>
.kuanghuan {
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 1.78rem;
  background: url("https://img.alicdn.com/imgextra/i4/2053469401/O1CN01iGGS0k2JJhtBDpTGy-2053469401.jpg?v=201910105824523");
  background-size: contain;
  background-repeat: no-repeat;
}
.kuanghuan  .van-tabs {
  display: flex;
  height: 0.44rem;
  top: 1.25rem;
  width: 100%;
}
.van-tab--active {
   background-image: url("https://cmsstatic.ffquan.cn//web/images/ddq/navbg.png?v=20191015394710")
}
.van-tabs{
  width: 100%
}
.van-tabs>div{
  margin: 0 auto;
}
.van-tab{
  // background: red;
  // background-image: url("https://cmsstatic.ffquan.cn//web/images/ddq/navbg.png?v=20191015394710")
}

.kuanghuan .van-tabs .van {
  // width: 0.64rem;
  // font-size: 0.14rem;
  // text-align: center;
  // border-radius: 0.05rem;
}
.van-tabs__wrap{
  // width: 100%
}
.van-tabs__nav{
  // width: 100%;
}

</style>