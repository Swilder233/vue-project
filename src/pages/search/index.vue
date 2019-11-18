<template>
  <div class="sea">
    <form action="/">
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </form>
    <van-cell-group v-for="(item,index) in list" :key="index">
      <van-cell :title="item" :value="item" />
    </van-cell-group>

    <van-steps :active="active" class="step">
      <van-step>进入淘宝</van-step>
      <van-step>复制商品标题</van-step>
      <van-step>点击搜索查询</van-step>
      <!-- <van-step>交易完成</van-step> -->
    </van-steps>
  </div>
</template>
<script>
import { searchInfoList } from "@api/search";
import { throttle } from "@utils/throttle";
export default {
  name: "search",
  data() {
    return {
      value: "",
      list: [],
      active: 1
    };
  },
  watch: {
    value(newVal) {
      throttle(async () => {
        let data = await searchInfoList(newVal);
        this.list = data ? data.data : [];
        // console.log(this.list);
      });
      if (newVal.length == 0) {
        this.list = [];
      }
    }
  }
};
</script>
<style lang="scss">
.sea {
  overflow: scroll;
}
.step{
  margin-top: .2rem;
}
</style>