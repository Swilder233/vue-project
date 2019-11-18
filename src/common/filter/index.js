import Vue from "vue";
// 用于销量和评价
Vue.filter("guolv",(int,wan)=>{
    if(int/10000>=1){
        return (int/10000).toFixed(1)+wan;
    }else{
        return int;
    }
})


