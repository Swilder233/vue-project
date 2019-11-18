<template>
  <div class="scroll_container">
      <div class="scroll_loading" v-if="flag">
      <i class="fa fa-spinner fa-pulse"></i>
    </div>
    <div class="wrapper" ref="wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "qing-scroll",
  data(){
      return{
          flag:false,
      }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 1,
      pullDownRefresh:{
        threshold:50
      },//下拉刷新
      pullUpLoad:true,
      tap:true,
      click:true,
    });
  },
  methods: {
    handleScroll() {
      this.scroll.on("scroll", pro => {//下拉
        if (pro.y > 50) {
          this.flag=true;
        }
      });
    },
    handlepullingDown(callback){//下拉刷新
        this.scroll.on("pullingDown",()=>{
           callback() ;
        })
    },
    handleRefreshDown(){
      this.scroll.refresh();
      this.scroll.finishPullDown();
      setTimeout(()=>{
        this.flag=false;
      },1500)
      
    },
    handlepullingUp(callback){
      this.scroll.on("pullingup",()=>{
        callback();
      })
    },
    handlefinishPullUp(){
      this.scroll.finishPullUp();
      this.scroll.refresh();
    }

  }
};
</script>
<style lang="scss">
.wrapper,.scroll_container {
  height: 100%;
}
.scroll_loading{
    display: flex;
    justify-content: center;
    align-items: center;
    // height: .05rem;
    
}
</style>