<template>
  <div id="app">
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
      <TabBar v-if="$route.meta.tabbarFlag"/>
  </div>
</template>

<script>
import TabBar from "./common/tabBar";
export default {
  name:"App",
  components:{
    TabBar
  }
}
</script>
<style>
  #app{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: red;
  }
</style>