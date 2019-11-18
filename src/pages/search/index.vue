<template>
  <div class="sea">
    <form action="/">
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </form>
    <van-cell-group v-for="(item,index) in list" :key="index">
      <van-cell :title="item" :value="item" />
    </van-cell-group>

    <van-steps :active="active" class="step" >
      <van-step>进入淘宝</van-step>
      <van-step>复制商品标题</van-step>
      <van-step>点击搜索查询</van-step>
      <!-- <van-step>交易完成</van-step> -->
    </van-steps>

    <v-touch tag="div" class="v_back" @tap="handleback()">返回</v-touch>
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
  },methods:{
    handleback(){
      this.$router.back();
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
.v_back{
  background: linear-gradient(to right, #4bb0ff, #6149f6);
  color:white;
  display: inline-block;
  margin-top: .2rem;
  float: right;
  font-size: .14rem;
  border-radius: .05rem;
}

</style>