<template>
    <div>
        <div class="header">
        <i class="iconfont">&#xe605;</i>
        <span>商家店铺</span>
    </div>


    <div class="jieshao">
        <div class="goods_shop">
            <div class="info col-mar">
                <img src="https://img.alicdn.com/imgextra//a8/4f/TB1yhi1khn1gK0jSZKPSutvUXXa.jpg" alt="">
            </div>
            <div class="xinxi">
                    <h3 class="name">四合院儿旗舰店</h3>
                    <h3 class="ttm"><img src="@assets/img/tm.png" alt="" class="tm"></h3>
            </div>
            
        </div>
    </div>


    <div class="tab">
        <div>
            <span>宝贝描述：4.8 <img src="@assets/img/gao.png"></span>
            <i></i>
        </div>
        <div>
            <span>宝贝描述：4.8<img src="@assets/img/gao.png"></span>
            <i></i>
        </div>
        <div>
            <span>宝贝描述：4.8<img src="@assets/img/gao.png"></span>
        </div>
    </div>



    <div class="section">
        <ul> 
            <li>    
               <div class="img ui-act-label">
                   <img src="https://img.alicdn.com/imgextra/i4/2201296327637/O1CN018zTJd926HnKAPawiC_!!2201296327637.jpg_310x310.jpg_.webp" alt="">
               </div> 
               <div>
                    <h3 class="product_title">
                            <span class="labelTop tm"></span>
                            <span class="title_text">
                                 【拍4件】四合院儿原生木浆抽纸40包整箱
                            </span>
                    </h3>
                    <h3 class="price">
                            <span>券后&nbsp;</span>
                            <span class="RMB">￥</span>
                            <span class="price_num">18.88</span>
                        </h3>
                        <p class="label_box">
                            <span class="label label2">爆款</span>
                            <span class="juan"><span >券</span>10元</span>
                        </p>
                        <div class="salse">
                            <span>已售364.2万</span>
                            <span>评论18.6万</span>
                        </div>
               </div>
             
            </li>
            <li>    
               <div class="img ui-act-label">
                   <img src="https://img.alicdn.com/imgextra/i4/2201296327637/O1CN018zTJd926HnKAPawiC_!!2201296327637.jpg_310x310.jpg_.webp" alt="">
               </div> 
               <div>
                    <h3 class="product_title">
                            <span class="labelTop tm"></span>
                            <span class="title_text">
                                 【拍4件】四合院儿原生木浆抽纸40包整箱
                            </span>
                    </h3>
                    <h3 class="price">
                            <span>券后&nbsp;</span>
                            <span class="RMB">￥</span>
                            <span class="price_num">18.88</span>
                        </h3>
                        <p class="label_box">
                            <span class="label label2">爆款</span>
                            <span class="juan"><span >券</span>10元</span>
                        </p>
                        <div class="salse">
                            <span>已售364.2万</span>
                            <span>评论18.6万</span>
                        </div>
               </div>
             
            </li>
        </ul>
    </div>
    </div>
</template>
<script>
export default {
    name:"merchant"
}
</script>
<style lang="scss">
    .header{
    height:.45rem;
    background: white;
    text-align: center;
    line-height: .45rem;
    position: relative;
}
.header i{
    position: absolute;
    left: .2rem;
    top: .02rem;
    color: #333;
    font-size: .15rem;
    // color: white;
}
.jieshao{
    width: 100%;
    margin-top: .01rem;
    height: .81rem;
    background: white;
}
.jieshao .goods_shop{
    width: 2.92rem;
    height: .61rem;
    margin: 0px 0.16rem;padding: 0.1rem 0px;
    display: flex;
}
.jieshao .goods_shop .tm{
    width: .82rem;
    margin-top: .2rem;
}
.info{
    width: .6rem;
}
.info img{
    width: .6rem;
}
.jieshao .goods_shop .name{
    font-size: .15rem;
    margin-left: .3rem;
    height: .3rem;
    font-weight: 400;
}
.jieshao .xinxi{
    display: flex;
    flex-direction: column;
}
.jieshao .goods_shop .ttm{
    height: .31rem;
    margin-left: .3rem;
}
.tab{
    margin-top: 1px;
    width: 100%;
    height: .5rem;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
}
.tab div{
    width: 1.06rem;
    color: #555555;
    font-size: .12rem;
    line-height: .5rem;
    text-align: center;
    position: relative;
}
.tab div span img{
    width: .13rem;
    margin-top: -.31rem;
}
.tab div i{
    width: 1px;
    height: .14rem;
    display: inline-block;
    background: #eeeeee;
    position: absolute;
    right: 0;
    top: .19rem;
}
.section{
    width: 100%;
    
    margin-top: .1rem;  
}
.section ul{
    width: 100%;
   
}
.section ul li{
    width: 3.1rem;
    height:1.21rem ;
    padding: .1rem 0 0 .1rem;
    display: flex;
    background: white;
    margin-top: .01rem;
}
.section ul li .img img{
    width: 1.12rem;
    height: 1.12rem;
}
.section ul li .product_title{
    width: 1.74rem;
    padding-right: .1rem;
    height: .4rem;
    font-size: .14rem;
    font-weight: 400;
    color: #333;
    margin-left: .1rem;
}

 .price{
    font-size: .1rem;
    font-weight: 400;
    color: #666;
    margin-bottom: -0.03rem;
    display: flex;
    align-items: baseline;
    vertical-align: text-bottom;
    margin-left: .1rem;
}
.price .RMB{
    font-size: 12px;
    font-weight: 500;
    color: #FF2B22;
    margin-left: 1px;
}
.price .price_num {
    font-size: 19px;
    font-weight: 500;
    color: #FF2B22;
}
.label_box {
    margin-left: .1rem;
}
 .label {
    height: 8px;
    border-radius: 2px;
    border: 1px solid;
    font-size: 8px;
    font-weight: 400;
    color: #ff0137;
    line-height: 1;
    padding: 0 3px;
    margin-right: 5px;
    border-color: #F57223;
    color: #F57223;
}
 .salse{
    margin-left: .1rem;
}
.juan {
    height: .12rem;
    background: linear-gradient(90deg,#ff8873 0,#ff4f4f 100%);
    border-radius: .02rem;
    padding: 0 .05rem 0 .12rem;
    font-size: .08rem;
    font-weight: 400;
    color: #fff;
    line-height: .13rem;
    display: inline-block;
    position: relative;
    z-index: 1;
    zoom: 1;
    top: 0;
}
.salse span {
    font-size: 9px;
    font-weight: 400;
    color: #888;
}
</style>