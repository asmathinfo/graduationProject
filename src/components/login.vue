<template>
  <div class="wrap">
    <p class="welcome">欢迎</p>
    <div class="login-content">
      <div class="title"><span :class="{ select : isLoginIn }" @click="loginInDiv">登录</span> · <span :class="{ select : isLoginUp }" @click="loginUpDiv">注册</span></div>
      <form class="loginIn-form" v-if="isLoginIn" :model="loginInForm" ref="loginInForm">
        <el-input placeholder="邮箱" class="form-item" type="text" @blur="emailCheck" v-model="loginInForm.email"></el-input>
        <el-input placeholder="密码" class="form-item" type="password" @blur="pswCheck" v-model="loginInForm.psw"></el-input>
        <el-button class="form-item login-btn" @click="loginIn">登录</el-button>
        <el-button class="form-item" @click="turnHome">暂不登录，进入首页</el-button>
      </form>
      <form class="loginUp-form" v-if="isLoginUp" :model="loginUpForm" ref="loginUpForm">
        <el-input placeholder="邮箱" class="form-item" type="text" @blur="emailCheck" v-model="loginUpForm.email"></el-input>
        <el-input placeholder="密码" class="form-item" type="password" @blur="pswCheck" v-model="loginUpForm.psw"></el-input>
        <el-input placeholder="确认密码" class="form-item" type="password" @blur="pswConfirmCheck" v-model="loginUpForm.pswCheck"></el-input>
        <el-button class="form-item login-btn" @click="loginUp">注册</el-button>
      </form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'

  export default {
    data () {
      return {
        isLoginIn: true,
        isLoginUp: false,
        loginInForm: {
          email: '',
          psw: '',
          emailCorrect: false,
          pswCorrect: false
        },
        loginUpForm: {
          email: '',
          psw: '',
          pswCheck: '',
          emailCorrect: false,
          pswCorrect: false,
          pswCheckCorrect: false
        }
      }
    },
    methods: {
      loginInDiv () {
        this.isLoginIn = true
        this.isLoginUp = false
        this.loginUpForm = {
          email: '',
          psw: '',
          pswCheck: '',
          emailCorrect: false,
          pswCorrect: false,
          pswCheckCorrect: false
        }
      },
      loginUpDiv () {
        this.isLoginIn = false
        this.isLoginUp = true
        this.loginInForm = {
          email: '',
          psw: '',
          emailCorrect: false,
          pswCorrect: false
        }
      },

      // 邮箱校验
      emailCheck () {
        if ((this.isLoginIn && this.loginInForm.email.length === 0) || (this.isLoginUp && this.loginUpForm.email.length === 0)) {
          this.$message({
            message: '邮箱号不能为空',
            type: 'warning'
          })
        } else {
          // 正则匹配邮箱格式
          let email = this.loginInForm.email || this.loginUpForm.email
          let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
          if (reg.test(email) === false) {
            this.$message({
              message: '邮箱格式错误',
              type: 'warning'
            })
          } else {
            if (this.isLoginIn) {
              this.loginInForm.emailCorrect = true
            } else {
              this.loginUpForm.emailCorrect = true
            }
          }
        }
      },

      // 密码校验
      pswCheck () {
        if ((this.isLoginIn && this.loginInForm.psw.length < 8) || (this.isLoginUp && this.loginUpForm.psw.length < 8)) {
          this.$message({
            message: '密码不能少于8位',
            type: 'warning'
          })
        } else {
          if (this.isLoginIn) {
            this.loginInForm.pswCorrect = true
          } else {
            this.loginUpForm.pswCorrect = true
          }
        }
      },

      // 确认密码校验
      pswConfirmCheck () {
        if (this.loginUpForm.pswCheck !== this.loginUpForm.psw) {
          this.$message({
            message: '两次密码输入不一致，请重试',
            type: 'warning'
          })
        } else {
          if (this.isLoginIn) {
            this.loginInForm.pswCheckCorrect = true
          } else {
            this.loginUpForm.pswCheckCorrect = true
          }
        }
      },

      // 不登录，直接进入首页
      turnHome () {
        this.$router.push({path: '/'})
      },

      // 注册账号
      loginUp () {
        this.emailCheck()
        this.pswCheck()
        this.pswConfirmCheck()
        let correct = this.loginUpForm.emailCorrect && this.loginUpForm.pswCorrect && this.loginUpForm.pswCheckCorrect
        if (correct) {
          var loginUpOption = {
            email: this.loginUpForm.email,
            psw: this.loginUpForm.psw
          }
          this.$http.post('/api/loginUp', loginUpOption)
            .then((res) => {
              if (res.data.state === '1') {
                this.$message({
                  message: res.data.msg,
                  type: 'success'
                })
                // 登录成功之后跳转到主页
                this.$router.replace({path: '/'})
              } else {
                this.$message({
                  message: res.data.msg,
                  type: 'error'
                })
              }
            })
            .catch((res) => {
              this.$message({
                message: res.data.msg,
                type: 'error'
              })
            })
        }
      },

      // 账号登录
      loginIn () {
        this.emailCheck()
        this.pswCheck()
        let correct = this.loginInForm.emailCorrect && this.loginInForm.pswCorrect
        if (correct) {
          var loginInOption = {
            email: this.loginInForm.email,
            psw: this.loginInForm.psw
          }
          this.$http.post('/api/loginIn', loginInOption)
            .then((res) => {
              if (res.data.state === '1') {
                this.$message({
                  message: res.data.msg,
                  type: 'success'
                })
                // 登录成功之后跳转到主页
                this.$router.replace({path: '/'})
              } else {
                this.$message({
                  message: res.data.msg,
                  type: 'error'
                })
              }
            })
            .catch((res) => {
              this.$message({
                message: res.data.msg,
                type: 'error'
              })
            })
        }
      }
    },
    computed: {
      ...mapState([
        'loginInShow',
        'loginUpShow'
      ])
    },
    mounted () {
      this.isLoginIn = this.loginInShow
      this.isLoginUp = this.loginUpShow
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .wrap {
    background-color: rgb(250, 251, 252);
    position: relative;
    width: 100vw;
    height: 100vh;
    .welcome {
      color: rgb(100, 203, 177);
      position: relative;
      left: 60px;
      top: 40px;
      font-size: 30px;
      display: inline-block;
    }
    .login-content {
      width: 350px;
      height: 390px;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -175px;
      margin-top: -200px;
      background-color: white;
      padding: 50px;
      box-shadow: 0 0 10px rgba(0, 0, 0, .5);
      border-radius: 5px;
      .title {
        width: 130px;
        margin: 0 auto;
        font-size: 18px;
        margin-bottom: 30px;
        span {
          display: inline-block;
          padding-bottom: 5px;
          cursor: pointer;
        }
        span:first-child {
          margin-right: 20px;
        }
        span:last-child {
          margin-left: 20px;
        }
        .select {
          color: rgb(100, 203, 177);
          border-bottom: 2px solid rgb(100, 203, 177);
        }
      }
      .form-item {
        margin-top: 20px;
        display: block;
        width: 100%;
        margin-left: 0;
      }
      .login-btn {
        margin-top: 40px;
        background-color: rgb(100, 203, 177);
        &:hover {
          color: white;
         }
      }
    }
  }
</style>
