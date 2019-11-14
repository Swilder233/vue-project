<template>
<van-swipe vertical :autoplay="3000" class=".msg_item">
  <van-swipe-item>
    <span>尖货新品</span>
							负担发发的发的反对法发发的答复发的
  </van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
</template>

<script>
// import Icons from "@/components/home-components/Icon.vue";
export default {
  name: 'swiper',
}
</script>
<style lang="scss" scoped>
.msg_item{
	flex: 1;
	width: 2.04rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: .12rem;
    margin-left: .09rem;
    span{
	background: #ff7913;
	color: #fff;
	border-radius: .08rem;
	padding: 0 .05rem;
}
}
</style>
