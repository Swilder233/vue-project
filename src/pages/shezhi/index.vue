<template>
     <div>
        <div class="header">
            <a href="#" class="iconfont" @click="handleBack()">&#xe605;</a>
            <span>设置</span>
        </div>

        <ul class="footer">
            <li>
                <span>个人信息</span>
                <i class="iconfont">&#xe715;</i>
            </li>
            <li>
                <span>账户与安全</span>
                <i class="iconfont">&#xe715;</i>
            </li>
            <router-link tag="li" to="/yijian">
                <span>意见反馈</span>
                <i class="iconfont">&#xe715;</i>
            </router-link>
              <li>
                <span>退出登录</span>
                <i class="iconfont">&#xe715;</i>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name:"shezhi",
    methods:{
        handleBack(){
            this.$router.push("/mine");
        }
    }
}
</script>


<style scoped> 
.header{
    height: .45rem;
    padding: 0 .1rem;
    background:#fff;
    position: sticky;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    z-index: 33;
    border-bottom: 1px solid #f6f6f6;
}

.header span{
    font-size: .16rem;
}
.header a{
    position: absolute;
    left: .1rem;
}


.footer{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background:#f6f6f6;
    padding-top: .45rem;
    overflow: scroll;
}
.footer li{
    height: .47rem;
    padding: 0 .1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #f6f6f6;
}
.footer li:nth-child(3){
    margin-top: .08rem;
}
.footer li span{
    font-size: .14rem;
}
</style>