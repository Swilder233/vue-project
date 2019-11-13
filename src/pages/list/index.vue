<template>
    <div class="top">
        <div class="header">
            <div class="back"></div>
                <div class="title">畅享音界</div>
            <div class="icon iconfont">&#xe708;</div>
        </div>
        <!-- nav -->
        <div class="nav">
            <ul>
                <li>人气</li>
                <li>最新</li>
                <li>销量</li>
                <li>价格</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"List",
    
    
}
</script>
<style>
    .top{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }

    /* 头部 */
    .header{
        background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
        border-bottom-color: transparent;
        padding: .08rem .1rem;
        box-sizing: border-box;
        height: .44rem;
        display: flex;
        font-size: .17rem;
        justify-content: space-between;
        align-items: center;
        color: #ffffff;
    }
    .nav{
        width: 100%;
        height: .5rem;
        box-sizing: border-box;
    }
    .nav ul{
        width: 100%;
        display: flex;
        align-items: center;
        height: .5rem;
    }
    .nav ul li{
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: .5rem;
        font-size: .15rem;
    }
    /* 点击边框 */
    .activeList{
        border-bottom: 1px solid #fe4a65;
    }
</style>