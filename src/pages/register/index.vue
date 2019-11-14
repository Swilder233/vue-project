<template>
  <div class="hgroup">
    <div class="header">
      <v-touch tag="i" @tap="back()" class="iconfont">&#xe605;</v-touch>
      <span>注册</span>
    </div>
    <form action>
      <div class="col-mar form_input_item">
        <i class="iconfont tab_fl">
          <img class="icon-phone" src="@assets/img/phone.png" alt />
        </i>
        <div class="inputtext">
          <input type="text" placeholder="手机号码" maxlength="11" name="phone" v-model="username" />
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
          <input type="text" placeholder="密码" maxlength="11" name="phone" v-model="password" />
          <i class="icon_font">
            <img class="eye" src="@assets/img/eye.png" alt />
          </i>
        </div>
        <p class="input_msg">密码格式</p>
      </div>
      <div class="col-mar login_submit">
        <v-touch
          tag="input"
          class="btn btn-default btn-block btn-max"
          value="注册"
          @tap="register($event)"
        />
      </div>
    </form>

    <p>
      已有账号？点击
      <router-link to="/login" tag="span" class="col-link">登录</router-link>
    </p>

    <footer class="login_footer text-center">
      <a href="#">验证码登录</a>
      <i class="fenge"></i>
      <a href="#">找回密码</a>
    </footer>
  </div>
</template>
<script>
// import { userInfoList } from "@api/register";
// import {mapState,mapActions,mapMutations} from 'vuex'
// import server from "@utils/request";
import axios from "axios";
import Qs from "qs";

export default {
  name: "register",
  data() {
    return {
      username: "",
      password: "",
      tishi: "",
      showTishi: "",
      storage:" "
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    // register(e) {
    //   if (this.username == "" || this.password == "") {
    //     alert("请输入用户名或密码");
    //   } else {
    //     axios({
    //       method: "post",
    //       url: "http://localhost:3000/list",
    //       data: {
    //         username: this.username,
    //         password: this.password
    //       },
    //       transformRequest: [
    //         function(data) {
    //           // 对 data 进行任意转换处理
    //           return Qs.stringify(data);
    //         }
    //       ],
    //       headers: {
    //         deviceCode: "A95ZEF1-47B5-AC90BF3"
    //       }
    //       // headers: { "Content-Type": "application/x-www-form-urlencoded" }
    //       // Content-Type':'application/x-www-form-urlencoded',
    //     })
    //       .then(res => {
    //         console.log(123);
    //         if (res.data == -1) {
    //           this.tishi = "该账号已存在";
    //           this.showTishi = true;
    //           this.username = "";
    //           this.password = "";
    //         } else if (res.status == 200) {
    //           this.tishi = "注册成功";
    //           this.showTishi = true;
    //           this.username = "";
    //           this.password = "";
    //           /*注册成功之后再跳回登录页*/
    //           setTimeout(
    //             function() {
    //               this.showRegister = false;
    //               this.showLogin = true;
    //               this.showTishi = false;
    //             }.bind(this),
    //             2000
    //           );
    //         }
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       });
    //   }
    // }
       register(e){
     e.preventDefault();
       var obj={};
       obj.name=this.username;
       obj.password=this.password;
       console.log(obj);
              // this.storage=null;
            //获取
                // this.storage=window.localStorage.getItem("user");
            //  if(!this.storage){
            //      this.storage=[];
            //  }else{
            //     this.storage=JSON.parse(this.storage);
            //  }
        localStorage.setItem("user",JSON.stringify(obj))
     }
  }
  //  loginUser(e){
  //    e.preventDefault();
  //      var obj={};
  //      obj.name="this.username";
  //      obj.password="this.password";
  //      console.log(obj);
  //      sessionStorage.setItem("user",JSON.stringify(obj))

  // created() {
  //     server({
  //       method:"post",
  //       url:"/ajax/filterCinemas",
  //       data:{
  //         movieId:1250952,
  //         day:"2019-11-05"
  //       }
  //     }).then((data)=>{
  //       console.log(data,1111);
  //     }).catch((err)=>{
  //       console.log(err);
  //     }),

  //注册
};

//   //  ...mapMutations({
//   //    handleName:"register/handleName"
//   //  })
// };
//  computed:{
//    ...mapState({
//      username:state=>state.register.username,
//      password:state=>state.register.password
//    })
//  },

//  created(){
//    this.$store.register.dispatch("registerUser")
//  }
</script>
<style lang="scss">
.hgroup {
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
  font-size: 0.18rem;
}
form {
  width: 100%;
  height: 1.83rem;
  background: white;
  margin-top: 0.1rem;
}
.form_input_item {
  margin: 0 0.28rem;
  margin-bottom: 0.4rem;
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
  padding: 0.02rem;
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
  left: 0.3rem;
  position: absolute;
  height: 0.25rem;
}
.input_msg {
  height: 0.25rem;
  text-indent: 0.25rem;
  margin-top: 0.4rem;
  z-index: 1;
  font-size: 0.14rem;
  color: #fc3f78;
  // opacity: 0;
  transition: all 0.4s ease-out 0s;
  -o-transition: all 0.4s ease-out 0s;
  -moz-transition: all 0.4s ease-out 0s;
  -webkit-transition: all 0.4s ease-out 0s;
  transform-origin: center;
  -webkit-transform: translateY(-0.1rem) translateX(0);
  transform: translateY(-0.1rem) translateX(0);
  /* line-height: 1.8rem; */
}
.inputtext input {
  outline: none;
  margin-top: -0.05rem;
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
  margin-top: 0.25rem;
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