<template>
    <!-- 列表 -->
        <div class="list">
            <ul>
                <li v-for="(item,index) in pinList" :key="index">
                    <img :src="item.pic" alt="">
                    <div class="goods_title"><span>天猫</span>{{item.d_title}}</div>
                    <div class="goods_price">卷后<span>￥{{item.jiage}}</span></div>
                    <div class="juan"><i>旗舰店</i><strong>卷{{item.quan_jine}}元</strong></div>
                    <div class="sale">已售{{item.xiaoliang}} | 评论{{item.comment}}</div>
                </li>
            </ul>
        </div>
</template>
<script>
import {pinpaiListApi} from "@api/pinpai"
export default {
    name:"pinpai",
    data() {
        return {
            pinList:[]
        }
    },
    async created() {
        let data = await pinpaiListApi();
        console.log(data);
        this.pinList=data.data.content;
    },
    
}
</script>
<style>
    /* 列表 */
.list ul{
    margin-left:.1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.list ul li{
    width:145px;
    height: 2.68rem;
    border-radius: .05rem;
    margin-right: .1rem;
}
.list ul li img{
    width: 100%;
    border-radius: .05rem;
}
.list ul li .goods_title{
    width: 96%;
    font-size: 13px;
    font-weight: 400;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1;
    padding-top: .2rem;
}
.list ul li .goods_price{
    font-size: 10px;
    font-weight: 400;
    color: #666;
    margin: .04rem 0;
}

.list ul li .goods_price span{
    font-size: 19px;
    font-weight: 500;
    color: #FF2B22;
}
.list ul li .juan i{
    height: 8px;
    font-style: normal;
    border-radius: 2px;
    border: 1px solid;
    font-size: 8px;
    font-weight: 400;
    color: #ff0137;
    line-height: 1;
    padding: 0 3px;
    margin-right: 5px;
}
.list ul li .juan strong{
    font-weight: normal;
    background: linear-gradient(90deg,#ff8873 0,#ff4f4f 100%);
    border-radius: 2px;
    padding: 0 5px;
    font-size: 8px;
    font-weight: 400;
    color: #fff;
    line-height: 16px;
}
.list ul li .sale{
    padding-top: .08rem;
    font-size: 9px;
    font-weight: 400;
    color: #888;
}
</style>