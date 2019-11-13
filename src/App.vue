<template>
  <div id="app">
<<<<<<< HEAD
    <!-- <Headers v-if="$route.meta.headerflag"></Headers> -->
    <keep-alive :exclude="/special/">
      <router-view></router-view>
    </keep-alive>
=======
      <Kind/>
>>>>>>> refs/remotes/origin/master
  </div>
</template>

<script>
<<<<<<< HEAD
// import Headers from "@common/components/headers";
export default {
  name: "App",
  components: {
    Headers
  }
};
=======
import Kind from "@pages/kind";
<<<<<<< HEAD
// import list from "@pages/list";
export default {
    name:"App",
    components:{
        Kind,
        // list
=======
export default {
    name:"App",
    components:{
        Kind
>>>>>>> huanhuan
    }
}
>>>>>>> refs/remotes/origin/master
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