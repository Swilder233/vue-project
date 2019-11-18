<template>
    <div>
        <input type="checkbox" :checked="selectAll" @change="handleSelectAll()" class="input">
        <!-- header -->
        <div class="cart_top"> 
            <div class="cart_header">
                <h2>购物车</h2>
                <h3>管理</h3> 
            </div>
           
            <label for="">全选</label>
            <p>共{{price.num}}件宝贝</p>
             
        </div>
        <!-- main -->
        <div class="cart_main">
            <li v-for="(item,index) in cartList" :key="index" >
                <div class="name">
                    <span>店名</span>
                    <h5>领券</h5>
                </div>
                <div class="content">
                    <input type="checkbox" :checked="item.flag" @change="handleDanxuan(index)">
                    <div class="img">
                        <img :src="item.pic" alt="">
                    </div>
                    <div class="right">
                        <p>{{item.title}}</p>
                        <span class="size">规格</span>
                        <v-touch tag="span" @tap="handleDel(index,item.id)">删除</v-touch>
                        <div class="price">
                            <strong>￥{{item.jiage}}</strong>
                            <div class="count">
                                <v-touch tag="span" @tap="handleReduce(index)">-</v-touch>
                                <input type="text" :value="item.count">
                                <v-touch tag="span" @tap="handleAdd(index)">+</v-touch>
                            </div> 
                        </div>
                    </div>
                </div>
            </li>
        </div>
        <!-- 结算 -->
        <div class="footer">
            <label for=""><input type="checkbox" >全选</label>
            <div>合计：<strong>￥{{price.allPrice}}</strong><span>结算</span></div>
        </div>
    </div>
</template>
<script>

export default {
    name:"mycart",
    data(){
        return {
            cartList:[],
            selectAll:true,
            list:[]
            
        }
    },
     created() {  

        let cart=JSON.parse(localStorage.getItem("cart"));
        console.log(this.cartList);
        if(cart){
            cart.forEach(item => {
                item.flag = true;
            });
            this.cartList=cart;
            // console.log(this.cartList[1].flag)
        }

    },
    methods: {
        // 全选
        handleSelectAll(){
            this.selectAll=!this.selectAll;
            this.cartList.forEach(item=>{
                item.flag=this.selectAll;
            })
        },
        // 单选
        handleDanxuan(index){
            this.cartList[index].flag=!this.cartList[index].flag;

            let stop=true;

            for(var i=0;i<this.cartList.length;i++){
                if(!this.cartList[index].flag){
                    stop=false;
                }
            }

            this.selectAll=stop;
        },
        handleAdd(index){
            this.cartList[index].count++;
        },
        handleReduce(index){
            if(this.cartList[index].count<=1){
                this.cartList[index].count = 1;
            }else{
                this.cartList[index].count--
            }
        },
        

        handleDel(index,id){
            this.cartList.splice(index,1);
            this.list=JSON.parse(localStorage.getItem("cart"));
            for(var i=0;i<this.list.length;i++){
                if(this.list[i].id==id){
                    this.list.splice(i,1);
                    break;
                }
            }
            localStorage.setItem("cart",JSON.stringify(this.list));
        }
    },
    computed: {
        price(){
            let allPrice=0;
            let num=0;
            for(var i=0;i<this.cartList.length;i++){
                if(this.cartList[i].flag){
                    num+=this.cartList[i].count;
                    allPrice+=this.cartList[i].jiage*this.cartList[i].count;
                }
            }
            allPrice = Number(allPrice).toFixed(2);
            return {
                allPrice,
                num
            }
        }
    },
}
</script>
<style scoped>
    body{
        background: #eee;
    }
    .cart_top{
        height: 1.77rem;
        width: 100%;
        background-image: linear-gradient(-90deg, #FF5000 0%, #FF8400 100%);
        position: absolute;
        left: 0;
        top: 0;
        padding: 0 .12rem;
        z-index: 0 
    }
    .cart_header{
        height: .52rem;
        width: 100%;
        font-size: .16rem;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
     
    }
    .cart_header h3{
        font-weight: normal;
        font-size: .15rem;
    }
    .cart_top label{
        margin-left: .2rem;
    }
    .cart_top p{
        float: right;
    }
    .input{
        /* width: .2rem;
        height: .2rem; */
        outline: none;
        border-radius: 50%;
        margin-right: .1rem;
        position: absolute;
        top: .53rem;
        left: .08rem;
        z-index: 50

    }
    /* main */
    .cart_main{
        margin-top: .76rem;
        /* height: 100%; */
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        padding-bottom: .54rem;
        width: 100%;
        overflow: scroll;
    }
    .name{
        width: 100%;
        height: .44rem;
        padding: 0 .1rem 0 .4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #000;
    }
    .name h5{
        color: #999;
        font-weight: normal;
    }
    .cart_main li{
        height: 1.68rem;
        background: #fff;
        border-radius: .1rem;
        margin-top: .2rem;
    }
    .content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .1rem;
        margin-top: .05rem;
    }
    .content .img{
        width: 1.2rem;
        height: .9rem;
        margin: 0 .1rem;
    }
    .img img{height: 100%}
    .right p{
        font-size: .14rem;
        color: #333;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        line-height: 17px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .right .size{
        padding: 0 .06rem;
        display: inline-block;
        background: #eee;
        border-radius: .04rem;
        text-align: center;
        line-height: 0.24rem;
        font-size: .13rem;
        margin: .1rem 0;
        margin-right: .8rem;
    }
    .right strong{
        font-weight: normal;
        color: rgb(255, 85, 0);
    }

    .price span{
        width: .27rem;
        height: .27rem;
        line-height: 0.26rem;
        text-align: center;
        display: inline-block;
        border: .01rem solid #999;
        background: #eee;
        border-radius: .04rem 0 0 .04rem;
        float: left;
    }
    .price span:nth-of-type(2){
        border-radius: 0 0.04rem 0.04rem 0;
    }
    .price input{
        width: .4rem;
        height: .27rem;
        text-align: center;
        font-size: .14rem;
        color: #333;
        outline: none;
        border: none;
        border-top: .01rem solid #999;
        border-bottom: .01rem solid #999;
        float: left;
    }
    .count{
        float: right;
        outline: none;

    }
    /* 结算 */
    .footer{
        height: .54rem;
        padding: 0 .12rem;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #666;
    }
    .footer strong{
        color: #FF5000;
    }

    .footer span{
        background-image: linear-gradient(90deg, #FF9000 0%, #FF5000 98%);
        font-size: 15px;
        line-height: 15px;
        padding: 8px 18px;
        text-align: center;
        border-radius: 80px;
        color: #FFFFFF;
        white-space: nowrap;
        margin-left: 10px;
    }
</style>
