<template>
  <div>
    <ul class="nav">
      <li class="home-icon" @click="turnHome"><img src="static/images/nav/logo.png" alt="首页"></li>
      <li class="home-title">
        <div @click="turnHome">
          <p>校园共享</p>
          <p>享你所享，淘你钟意</p>
        </div>
      </li>
      <li class="hone-search">
        <div class="search-wrap">
          <button class="search-right">搜索</button>
          <div class="search-left">
            <img src="static/images/nav/search-icon.png" alt="">
            <div class="search-input"><input type="text" placeholder="搜索"></div>
          </div>
        </div>
      </li>
      <li class="home-person">
        <div class="owner-div" v-if="this.islogin">
          <img :src="headUrl" alt="" @click="turnPerson">
          <span @click="turnPerson">{{this.name}}</span>
          <!--<router-link :to="{path: '/login'}" class="login-button" @click="loginOut">退出登录</router-link>-->
          <a class="login-button" @click="loginOut">退出登录</a>
        </div>
        <div class="login-div" v-else>
          <!--<router-link :to="{path: '/login'}" class="login-button">登录</router-link>-->
          <!--<router-link :to="{path: '/login'}" class="login-button">注册</router-link>-->
          <a class="login-button" @click="loginIn">登录</a>
          <a class="login-button" @click="loginUp">注册</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
  .nav {
    width: 100%;
    height: 120px;
    display: flex;
    flex-flow: row nowrap;
    background-color: white;
    li {
      float: left;
      display: inline-block;
    }
    .home-icon {
      height: 120px;
      cursor: pointer;
      img {
        height: 100%;
      }
    }
    .home-title {
      flex: 1;
      text-align: center;
      margin-top: 30px;
      cursor: pointer;
      p:first-child {
        color: rgb(100, 203, 279);
        font-size: 26px;
        margin-bottom: 5px;
      }
      p:last-child {
        color: rgb(255, 178, 0);
        font-size: 16px;
      }
    }
    .hone-search {
      width: 640px;
      padding-top: 35px;
      .search-wrap {
        height: 50px;
        border: 1px solid #44C1A5;
        border-radius: 25px;
        color: #4BC0A5;
        overflow: hidden;
        .search-left {
          margin-right: 24%;
          height: 50px;

          img {
            margin: 12px 0 0 20px;
            float: left;
          }
          .search-input {
            padding: 10px;
            height: 100%;
            margin-left: 50px;

            input {
              width: 100%;
              height: 100%;
              border: 0;
              outline: none;
              font-size: 16px;
            }
          }
        }
        .search-right {
          float: right;
          width: 24%;
          height: 50px;
          background-color: rgb(100, 203, 177);
          border: 0;
          color: white;
          font-size: 16px;
          cursor: pointer;
        }
      }
    }
    .home-person {
      flex: 1.5;
      text-indent: 10%;
      margin-top: 35px;
      .owner-div {
        height: 52px;
        margin-left: 20px;
        img {
          height: 46px;
          width: 46px;
          padding: 2px;
          border-radius: 26px;
          border: 1px solid rgb(100, 203, 177);
          cursor: pointer;
        }
        span {
          display: inline-block;
          text-indent: 10px;
          color: rgb(100, 203, 177);
          cursor: pointer;
        }
        .login-button {
          border-radius: 18px;
          display: inline-block;
          text-decoration: none;
          color: gray;
          height: 36px;
          line-height: 36px;
          text-align: center;
          width: 100px;
          border: 1px solid white;
          text-indent: 0;
          margin-left: 30px;
          cursor: pointer;
          &:hover {
           border: 1px solid rgb(100, 203, 177);
           color: rgb(100, 203, 177);
           border-radius: 18px;
          }
        }
      }
      .login-div {
        margin: 7px 0 0 20px;
        .login-button {
          border-radius: 18px;
          display: inline-block;
          text-decoration: none;
          color: gray;
          height: 36px;
          line-height: 36px;
          text-align: center;
          width: 72px;
          border: 1px solid white;
          text-indent: 0;
          cursor: pointer;
          &:hover {
            border: 1px solid rgb(100, 203, 177);
            color: rgb(100, 203, 177);
            border-radius: 18px;
           }
        }
      }
    }
  }
</style>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'

  export default {
    methods: {
      // 跳转首页
      turnHome () {
        this.$router.replace({ path: '/home' })
      },
      // 跳转个人页
      turnPerson () {
        this.$router.push({path: '/home/person'})
      },
      // 退出登录
      loginOut () {
        this.$http.get('/api/loginOut')
          .then(res => {
            this.$message({
              message: res.data.msg,
              type: 'success'
            })
            this.$router.replace({path: '/login'})
          })
      },
      // 登录页面
      loginIn () {
        this.$store.commit({
          'type': 'loginShow',
          'loginInShow': true,
          'loginUpShow': false
        })
        this.$router.push({path: '/login'})
      },
      // 注册页面
      loginUp () {
        this.$store.commit({
          'type': 'loginShow',
          'loginInShow': false,
          'loginUpShow': true
        })
        this.$router.push({path: '/login'})
      }
    },
    computed: {
      ...mapState([
        'name',
        'islogin',
        'headUrl'
      ])
    }
  }
</script>
