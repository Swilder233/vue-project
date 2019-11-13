<template>
  <div class="user_center_info">
    <div class="info">
      <div class="user_avatar">
        <img
          src="https://cmsstatic.ffquan.cn//wap_new/user/images/integral/user.png?v=201801221043"
          alt
        />
      </div>
      <div class="user_type">
        <span class="user_login" id="user_login">
          <a href="#">登录</a>
          /
          <a href="#">注册</a>
        </span>
      </div>
      <div class="else">
        <a href="#">
          <img
            src="https://cmsstatic.ffquan.cn//wap_new/user/images/icon/user_icon_set.svg?v=201911081848"
            alt
          />
        </a>
      </div>
    </div>
    <div class="user_main">
      <div class="user_me">
        <div class="my_favorite">
          <a href="#">
            <img
              src="https://cmsstatic.ffquan.cn//wap_new/user/images/integral/love.png?v=201801221043"
              alt
            />
            <span>我的收藏</span>
          </a>
        </div>
        <div class="my_footprint">
          <a href="#">
            <img
              src="https://cmsstatic.ffquan.cn//wap_new/user/images/integral/foot.png?v=201801221043"
              alt
            />
            <span>我的足迹</span>
          </a>
        </div>
      </div>
      <div class="common_tools card">
        <p class="title">常用工具</p>
        <ul class="content tools row-s">
          <li class="col-12-3">
            <img
              src="https://cmsstatic.ffquan.cn//wap_new/user/images/integral/tools1.png?v=201801221043"
              alt
            />
            <span>领券帮助</span>
          </li>

          <li class="col-12-3">
            <img
              src="https://cmsstatic.ffquan.cn//wap_new/user/images/integral/tools4.png?v=201801221043"
              alt
            />
            <span>意见反馈</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "mine",
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.user_center_info {
  height: 3.66rem;
  background: url("https://cmsstatic.ffquan.cn//wap_new/user/images/user_bg.png?v=2019-11-10")
    no-repeat #f6f6f6;
  -webkit-background-size: 100% 195px;
  -moz-background-size: 100% 195px;
  background-size: 100% 195px;
  overflow: hidden;
}
.info {
  width: 100%;
  height: 0.66rem;
  box-sizing: border-box;
  padding-left: 0.15rem;
  margin-top: 0.16rem;
  position: relative;
}
.user_avatar {
  display: inline-block;
  height: 0.66rem;
  width: 0.66rem;
  position: absolute;
  top: 0;
}
.user_avatar img {
  height: 0.66rem;
  width: 0.66rem;
}
.user_type {
  position: absolute;
  color: white;
  display: inline-block;
  height: 100%;
  line-height: 0.66rem;
  left: 0.9rem;
}
.user_type a {
  color: white;
  color: #fff;
  font-weight: 500;
  font-size: 0.2rem;
  font-family: PingFangSC-Medium;
}
.user_main {
  height: 100%;
  background: 0 0;
  margin: 0.24rem 0.1rem;
  /* background: white; */
}
.user_me {
  height: 0.93rem;
  background: #fff;
  border-radius: 0.1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
}
.user_me > div a {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.user_me > div a img {
  width: 0.34rem;
  height: 0.34rem;
}
.user_me > div a span {
  width: 0.54rem;
  height: 0.18rem;
  font-size: 0.13rem;
  font-family: PingFangSC-Light;
  font-weight: 300;
  color: #666;
  line-height: 0.18rem;
  display: block;
  text-align: left;
}
.user_center_info .user_main .common_tools {
  background: #fff;
  box-shadow: 0 0 0.06rem -1px rgba(0, 0, 0, 0.09);
  border-radius: 0.06rem;
  margin-top: 0.15rem;
}
.user_center_info .user_main .card .title {
  height: 0.35rem;
  border-bottom: 1px solid #eee;
  line-height: 0.35rem;
  padding-left: 0.15rem;
  box-sizing: border-box;
  font-size: 0.14rem;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: #333;
}
.user_center_info .user_main .card .row-s {
  display: flex;
  padding: 0.13rem 0;
}
.user_center_info .user_main .card .row-s li {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 0.67rem;
  width: 0.75rem;
  text-align: center;
}
.user_center_info .user_main .card .content.tools li img {
  width: 0.29rem;
  height: 0.29rem;
  display: block;
}
.user_center_info .user_main .card .content.tools li span {
  width: 0.54rem;
  height: 0.18rem;
  font-size: 0.13rem;
  font-family: PingFangSC-Light;
  font-weight: 300;
  color: #666;
  line-height: 0.18rem;
  display: block;
  margin-top: 0.06rem;
}
.else {
  position: absolute;
  right: 0.15rem;
}
</style>
