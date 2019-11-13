<template>
  <div id="app">
    <!-- <Headers v-if="$route.meta.headerflag"></Headers> -->
    <keep-alive :exclude="/special/">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// import Headers from "@common/components/headers";
export default {
  name: "App",
  
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