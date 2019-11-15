<template>
  <div class="sea">
    <form action="/">
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </form>
    <van-cell-group v-for="(item,index) in list" :key="index">
      <van-cell :title="item" :value="item" />
    </van-cell-group>
  
  </div>
</template>
<script>
import { searchInfoList } from "@api/search";
export default {
  name: "search",
  data() {
    return {
      value: "",
      list: []
    };
  },
  watch: {
    async value(newVal) {
      let data = await searchInfoList(newVal);
      this.list = data ? data.data : [];
      console.log(this.list);
    }
  }
};
</script>
<style lang="scss">
        .sea{
            overflow: scroll;
        }
</style>