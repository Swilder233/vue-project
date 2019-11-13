<template>
  <div class="hgroup">
    <div class="header">
      <i class="iconfont">&#xe605;</i>
      <span>登录</span>
    </div>

    <form action>
      <div class="col-mar form_input_item">
        <i class="iconfont tab_fl">
          <img class="icon-phone" src="@assets/img/phone.png" alt />
        </i>
        <div class="inputtext">
          <input type="text" placeholder="手机号码" maxlength="11" name="phone" />
          <i class="icon_font">
            <img src="@assets/img/chahao.png" alt />
          </i>
        </div>
        <p class="input_msg">请输入正确11位的手机号码！</p>
      </div>
      <div class="col-mar form_input_item">
        <i class="iconfont tab_fl">
          <img class="icon-phone" src="@assets/img/lock.png" alt />
        </i>
        <div class="inputtext">
          <input type="text" placeholder="密码" maxlength="11" name="phone" />
          <i class="icon_font">
            <img class="eye" src="@assets/img/eye.png" alt />
          </i>
        </div>
        <p class="input_msg">密码格式</p>
      </div>
      <div class="col-mar login_submit">
        <input type="submit" class="btn btn-default btn-block btn-max" value="登录" />
      </div>
    </form>

    <p>
      还没有账号？立即
      <span class="col-link">注册</span>
    </p>

    <footer class="login_footer text-center">
      <a href="#">验证码登录</a>
      <i class="fenge"></i>
      <a href="#">找回密码</a>
    </footer>
  </div>
</template>
<script>
export default {
  name: "login"
};
</script>
<style lang="scss">
.hgroup{
    height: 100%;
    background: white;
}
.header {
  height: 0.45rem;
  background: white;
  text-align: center;
  line-height: 0.45rem;
  position: relative;
  height: 1rem;
}
.header i {
  position: absolute;
  left: 0.2rem;
  top: 0.02rem;
  color: #333;
  font-size: .18rem;
}
form {
  width: 100%;
  height: 1.83rem;
  background: white;
  margin-top: .1rem;
}
.form_input_item {
  margin: 0 0.28rem;
  margin-bottom: .2rem;
  height: 0.25rem;
  border-bottom: solid 1px #eee;
  position: relative;
  z-index: 1;
  zoom: 1;
  padding: 0.1rem 0;
  transition: all 0.4s ease-out 0s;
  -o-transition: all 0.4s ease-out 0s;
  -moz-transition: all 0.4s ease-out 0s;
  -webkit-transition: all 0.4s ease-out 0s;
  transform-origin: center;
   padding:.02rem;
  
}
.form_input_item .iconfont {
  position: absolute;
  z-index: 1;
}
.form_input_item .icon_font {
  position: absolute;
  z-index: 1;
  right: 0;
 
}
.form_input_item .eye {
  position: relative;
  left: 0.15rem;
}
.form_input_item .icon-phone {
  width: 0.15rem;
}
input {
    border: none;
//   margin-left: 0.25rem;
//   margin-top: -0.1rem;
    left: .3rem;
    position: absolute;
     height: .2rem;
}
.input_msg {
  height: 0.25rem;
  text-indent: 0.25rem;
  margin-top: 0.15rem;
  z-index: 1;
  font-size: 0.14rem;
  color: #fc3f78;
  opacity: 0;
  transition: all 0.4s ease-out 0s;
  -o-transition: all 0.4s ease-out 0s;
  -moz-transition: all 0.4s ease-out 0s;
  -webkit-transition: all 0.4s ease-out 0s;
  transform-origin: center;
  -webkit-transform: translateY(-0.1rem) translateX(0);
  transform: translateY(-0.1rem) translateX(0);
  /* line-height: 1.8rem; */
}
.btn.btn-block {
  padding-left: 0;
  padding-right: 0;
  display: block;
  width: 2.62rem;
  height: 0.37rem;
  margin: 0 auto;
  margin-top: 0.3rem;
  border-radius: 0.05rem;
}
.btn.btn-max {
  /* padding: .5rem 1.43rem; */
  font-size: 0.14rem;
}
.btn.btn-default {
  background: #eee;
  color: #666;
  border-color: #eee;
}
p {
  text-indent: 0.3rem;
  background: white;
  font-size: 0.14rem;
  font-family: Arial, Helvetica, sans-serif, "Microsoft YaHei";
}
.col-link {
  color: #1991eb;
}
.login_footer {
  width: 100%;
  height: 0.7rem;
  background: white;
  margin-top: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login_footer .fenge {
  display: inline-block;
  width: 0.02rem;
  background: #aaaaaa;
  margin-left: 0.05rem;
  margin-right: 0.05rem;
}
.login_footer a {
  color: #aaaaaa;
  font-size: 0.14rem;
}
</style>