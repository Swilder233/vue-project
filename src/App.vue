<template>
  <div id="app">
    <!-- <Headers v-if="$route.meta.headerflag"></Headers> -->
    <keep-alive :exclude="/special/">
      <router-view></router-view>
    </keep-alive>
    <Tabbar />
  </div>
</template>
<script>
// import Headers from "@common/components/headers";
import Tabbar from "@common/tabBar"
export default {
  name: "App",
  components:{
    Tabbar
  }
};

</script>
<style lang="scss">
#app{
  height: 100%;
}
  .page{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    padding-bottom: .51rem;
    padding-top: .44rem;
    overflow: scroll;
  }

</style>