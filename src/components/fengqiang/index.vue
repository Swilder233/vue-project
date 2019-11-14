<template>
        <div>  
       <!-- 排名倒计时 -->
        <div class="daojishi">
            距离下次更新排名还有<span>19</span>分<span>25</span>秒
        </div>

         <ul class="goods_content">
            <li v-for="(item,index) in goodsList" :key="index">
                <img :src="item.pic" alt="">
                <div class="goods_content-right">
                    <h4>{{item.dtitle}}</h4>
                    <p>
                            近2小时疯抢
                            <span>15.5万</span>件
                            <i>天猫价: ¥{{item.yuanjia}}</i>
                    </p>
                    <div class="quanhou">
                        <i>券后价￥</i>
                        <span>{{item.jiage}}</span>
                        <a href="#">立即抢</a>
                    </div>
                </div>
            </li>
        </ul>
         </div>
</template>


<script>
import {goodsList} from "@api/fengqiang";
import {daojishi} from "@api/fengqiang";
export default {
    data() {
        return {
            goodsList:JSON.parse(sessionStorage.getItem("fengqiang"))||[],
            id:""
        }
    },
    created() {
        // sessionStorage.setItem("fengqiang",JSON.stringify(goods.data))
    },
    beforeRouteUpdate(to,from,next){
        let {id} = to.params;
        this.id = id;
        // console.log(this.id);
        this.handleSend(this.id);
    },
    methods: {
        async handleSend(cid){
            let goods = await goodsList(cid);
            this.goodsList = goods.data;
            // console.log(cid);
        sessionStorage.setItem("fengqiang",JSON.stringify(goods.data))
        }
    },
    
}
</script>


<style lang="scss">
    // 倒计时
.daojishi{
    height: .35rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .12rem;
    background: #ffebe1;
    span{
    color: #fc4d51;
}
}

// 商品
.goods_content{
li{
    padding: .1rem .1rem .1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #999;
    background: #fff;
    img{
    width: 1.2rem;
    height: 1.2rem;
}
.goods_content-right{
    width: 1.8rem;
    .quanhou{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    i{
    color: #ff2b22;font-size: .12rem;font-style: normal;
}
span{
    color: #ff2b22;
    font-size: .2rem;
    flex: 1;
}
a{
    padding: .03rem .15rem;
    background: linear-gradient(-90deg,rgba(252,77,81,1),rgba(252,63,120,1));
    border-radius: .15rem;
    color: #fff;
}
}
    h4{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .14rem;
    font-weight: normal;
    margin-bottom: .09rem;
}
p{
    width: 100%;
    font-style: .14rem;
    margin-bottom: .1rem;
    span{
    color: #ff7800;
}
i{
    margin-top: .07rem;
    display: block;
    font-style: normal;
    color: #aaa;
    font-size: .12rem;
}
}
}
}
} 
</style>