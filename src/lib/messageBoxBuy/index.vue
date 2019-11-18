<template>
    <div class="alert">
        <div class="tab_word">复制淘口令购买</div>
        <div class="cente-text">
            复制框内整段文字，打开【手-机-淘-宝】即可领券购买。$OTGVYvNTuRX$
        </div>
        <p>长按文字区域手动复制淘口令</p>
        <v-touch class="copy" tag="div" @tap="handleOk()">一键复制</v-touch>
        <v-touch tag="div" class="close" @tap="handleClose()">X</v-touch>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .alert{
        width: 2.62rem;
        height: 2.4rem;
        background: #fff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        margin: auto;
        z-index: 30;
        border-radius: .1rem;
    }
    .tab_word{
        text-align: center;
        color: #666;
        font-size: 16px;
        padding: 5px 0;
        line-height: .36rem;
        background: #fff;
        border-radius: .1rem;
    }
    .cente-text{
        padding: 10px;
        margin:0 .1rem;
        background: #F1F1F1;
        color: #333;
        font-size: 14px;
        line-height: 24px;
        min-height: 100px;
        max-height: 220px;
        border-radius: 4px;
    }
    .alert p{
        line-height: 28px;
        color: #AAA;
        font-size: 12px;
        padding-bottom: 10px;
        margin-left: .1rem;
        padding-bottom: .04rem;
    }
    .copy{
        background: linear-gradient(to left,#FE9F69 0,#FB85F7 100%);
        display: block;
        border-radius: 50px;
        line-height: 40px;
        height: 40px;
        text-align: center;
        color: #fff;
        font-size: 16px;
        margin: 0 .12rem;
    }
    .close{
        position: absolute;
        left: 1.1rem;
        top: 2.6rem;
        width: .35rem;
        height: 35px;
        border-radius: 50%;
        background: #fff;
        font-size: .24rem;
        text-align: center;
        color: #333;
        line-height: .35rem;
    }
</style>