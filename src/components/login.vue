<template>
  <div class="wrap">
    <p class="welcome">欢迎</p>
    <div class="login-content">
      <div class="title"><span :class="{ select : isLoginIn }" @click="loginIn">登录</span> · <span :class="{ select : isLoginUp }" @click="loginUp">注册</span></div>
      <form class="login-form" v-if="isLoginIn">
        <el-input placeholder="邮箱" class="form-item" type="text"></el-input>
        <el-input placeholder="密码" class="form-item" type="password"></el-input>
        <el-button class="form-item login-btn">登录</el-button>
        <el-button class="form-item">暂不登录，进入首页</el-button>
      </form>
      <form class="login-form" v-if="isLoginUp">
        <el-input placeholder="邮箱" class="form-item" type="text"></el-input>
        <el-input placeholder="密码" class="form-item" type="password"></el-input>
        <el-input placeholder="确认密码" class="form-item" type="password"></el-input>
        <el-button class="form-item login-btn">注册</el-button>
      </form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        isLoginIn: true,
        isLoginUp: false
      }
    },
    methods: {
      loginIn: function () {
        this.isLoginIn = true
        this.isLoginUp = false
      },
      loginUp: function () {
        this.isLoginIn = false
        this.isLoginUp = true
      }
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
