<template>
    <div class="bottom">
			<router-link 
			v-for="(item,index) in tabbars" 
			:key="index"
			tag="a"
			:to="item.path">
				<span class="iconfont" v-html="item.icon"></span>
				<i>{{item.text}}</i>
			</router-link>
		</div>

</template>

<script>
export default {
    name:"TabBar",
    data(){
        return {
            tabbars:[
                {
                    text:"首页",
                    icon:"&#xe602;",
					path:"/home"
                },
                {
                    text:"9.9包邮",
                    icon:"&#xe601;",
					path:"/freeshipping"
                },
                {
                    text:"分类",
                    icon:"&#xe61d;",
					path:"fenlei"
                },
                {
                    text:"收藏",
                    icon:"&#xe609;",
					path:"shoucang"
                },
                {
                    text:"我的",
                    icon:"&#xe611;",
					path:"/mine"
                }
            ]
        }
    }
}
</script>

<style>
	.bottom{
	position: fixed;
	bottom: 0;
	left: 0;
	height: .5rem;
	width: 100%;
	border-bottom: 1px solid #999;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background:#fff;
	z-index: 100;
}
.bottom a{
	width: 100%;
	height: 100%;
	flex-direction: column;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #333;
}
.bottom a span{
	color: #666;
	margin-bottom: .05rem;
}
.bottom a i{
	font-style:normal;
	font-size: .12rem;
}
.bottom .router-link-active{
	color: #fd575c;
}
.bottom .router-link-active span{
	color: #fd575c;
}
</style>