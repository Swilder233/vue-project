<template>
  <div class="page">
    <Header :title="message" />
   
    <van-tabs class="content">
      <van-tab
        :to="{name:'meiri',query:{id:item.time}}"
        v-for="(item,index) in time"
        :title="item.time +':00' "
        :key="index"
      >
    <span class="start">
      {{item.status}}
    </span>
      </van-tab>
    </van-tabs>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "@common/components/headers";
import {dailyInfoList} from "@api/half"
export default {
  name: "half",
  components: {
    Header
  },
  data() {
    return {
      message: "每日半价",
     time:[],
    };
  },
  created() {
    this.handleTime();
  },
  methods: {
    async handleTime(id) {
      let data = await dailyInfoList()
         console.log(data.data);
     
      for(var i=0;i<data.data.length;i++){
        if(data.data[i].status=="before"){
          data.data[i].status="已开抢"
        }else if (data.data[i].status=="current"){
           data.data[i].status="正在抢购"
        }else{
          data.data[i].status="即将开始"
        }
      }
       this.time=data.data;
      
    }
  },
};
</script>
<style lang="scss" scoped>
.content {
    height: 0;
    padding-bottom: 0.65rem;
}
.start{
  display: inline-block;
  width: 100%;
  text-align: center;
   background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
  margin-top: -0.01rem;
  color: white;
  // height: .3rem;
  // line-height: .3rem;
}
.van-ellipsis{
  color: #fff;
}
.van-tab--active{
  font-weight: bolder;
  font-size: .18rem;
}
.van-tab{
  color{
    color: white;
  }
.van-tab--active {
    color: white;
    font-weight: 500;
  }
}
.van-tabs__wrap{
    background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
}
.van-tabs__nav{
    background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
}
.ranking_nav_tab {
  height: 0.44rem;
  width: 100%;
  background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
}

.ranking_banner {
  width: 100%;
  height: 0.8rem;
  z-index: 100;
  // margin-top: .5rem;
}
.ranking_banner img {
  height: 0.8rem;
}
.ranking_ullit3 li {
  border-bottom: solid 1px #eee;
  height: 1.2rem;
  padding: 0.1rem 0.1rem 0.1rem 0;
  margin-bottom: 0.05rem;
}
.ranking_ullit {
  padding-top: 0.1rem;
  background: #f5f5f5;
}
.ranking_ullit3 li a img {
  width: 1.2rem;
}
.van-tabs__wrap {
  margin-top: -0.4rem;
}

</style>