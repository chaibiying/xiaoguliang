<template>
  <div class="login_main">
    <!-- <h1 class="logo"><img src="../../assets/img/logo.png"></h1>
    <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm" action="http://tws-dev.fangzhengshufa.com/index.php/Users/login" class="demo-ruleForm">
      <el-form-item  prop="mobileNum">
        <el-input type="text" v-model="loginForm.mobileNum" auto-complete="off" placeholder="手机号" class="phone" id="phonenumber"></el-input>
      </el-form-item>
      <el-form-item  prop="password">
        <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码" class="pwd" id="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" @click="submitForm('loginForm',loginForm)" class="adminBtn" id="login">登录</el-button>
      </el-form-item>
    </el-form>
    <p class="deal">登录即同意遵守<a @click="agreement">《方正书法用户协议》</a></p> -->
    <!--<el-button type="text" @click="dialogVisible = true" class="login_forget_password">忘记密码</el-button>
    <el-button type="text" class="login_register" @click="toRegister">注册新用户</el-button>
    <el-dialog title="提示" :visible.sync="dialogVisible">
      <span>忘记密码</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>-->
  </div>

</template>
<script>
// import md5 from "blueimp-md5";
// import { apiLoginByUsername, batchadd } from "@/api/login";
// import axios from "axios";
// import Cookies from 'js-cookie';
// export default {
//   name: "login",
//   data() {
//     var validatemobileNum = (rule, value, callback) => {
//       if (value === "") {
//         callback(new Error("请输入手机号"));
//       } else {
//         callback();
//       }
//     };
//     var validatePassword = (rule, value, callback) => {
//       if (value === "") {
//         callback(new Error("请输入密码"));
//       } else {
//         callback();
//       }
//     };
//     return {
//       loginRules: {
//         mobileNum: [{ validator: validatemobileNum, trigger: "blur" }],
//         password: [{ validator: validatePassword, trigger: "blur" }]
//       },
//       loginForm: {
//         mobileNum: "",
//         password: ""
//       },
//       dialogVisible: false
//     };
//   },
//   mounted: function () {
// //    axios.post("/index.php/Users/login", {
// //      mobileNum: "13011111111",
// //      password: "123456"
// //    }).then(function (response) {
// //      console.info(1, response);
// //    });


//     /*batchadd().then(function (response) {
//       console.info(response.data)
//     });*/
//   },
//   methods: {
//     submitForm(formName) {
//       this.$refs[formName].validate(valid => {
//         if (valid) {
//           var params = {
//             user_type: "1",
//             reg_from: "5",
//             phone: this.loginForm.mobileNum,
//             passwd: md5(this.loginForm.password),
//             device_id: "000",
//             client_sys: "",
//             version: "2.3.0"
//           };
//           apiLoginByUsername(params).then(response => {
//             if(response.data.code == 0) {
// 	          Cookies.set('user_id', response.data.data.id, { expires: 1 });
//             Cookies.set('commonToken', response.data.data.token, { expires: 1 });
//             Cookies.set('vip_date', response.data.data.vip_date, { expires: 1 });
// 	          Cookies.set('to_user_id', response.data.data.id, { expires: 1 });
//               this.$router.push({ name: 'mybook' })
//             }else {
//               this.$message({
//               type: 'error',
//               message: response.data.message
//             });
//             }
//           });
//         } else {
//           console.log("error submit!!");
//           return false;
//         }
//       });
//     },
//     //跳转到注册页面
//     toRegister() {
//       this.$router.push({
//         name: "register"
//       });
//     },
//     //跳转到协议页面
//     agreement: function () {
//         this.$router.push({name: 'agreement'})
//       }
//   }
// };
</script>
<style>
.login_main {
  margin: 160px auto;
  text-align: center;
  width:366px;
  background: #FFFFFF;
  border: 1px solid #CFCFCF;
  box-shadow: 0 2px 4px 0 rgba(207,207,207,0.50);
  border-radius: 8px 8px 4px 4px;
}
.login_main .login_forget_password {
  float: left;
}
.login_main .login_register {
  float: right;
}
.login_main .logo{
  margin-top:-45px;
}
.login_main .logo img{
  width:78px;
  height:85px;
}
.login_main input{
  border:none;
  border-bottom:1px solid #d8d8d8;
  border-radius:none;
}
.deal{
  height:49px;
  line-height:49px;
  margin:0;
  background:#f4f4f4;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #999999;
  letter-spacing: 2px;
  /*padding:12px 16px 15px 34px;*/
}
.deal a{
  color:#b4272d;
  cursor: pointer;
}
.el-form-item__content{
  margin:0 37px;
}
.phone{
  border:none;
}
.pwd{
  border:none;
}
.adminBtn{
  width:294px;
  height:34px;
  background: #B4272D;
  border-radius: 5px;
  line-height: 34px;
  padding: 0;
}
</style>
