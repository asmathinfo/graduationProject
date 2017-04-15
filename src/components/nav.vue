<template>
  <div>
    <ul class="nav">
      <li class="home-icon"><img src="static/images/nav/logo.png" alt="首页"></li>
      <li class="home-title">
        <div>
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
        <!--<el-dropdown class="dropdown">-->
          <!--<div class="el-dropdown-link">-->
            <!--<img src="static/images/nav/100.png" alt="">-->
            <!--<span>访客</span>-->
          <!--</div>-->
          <!--<el-dropdown-menu class="dropdown-menu">-->
            <!--<el-dropdown-item class="dropdown-item">嗨，访客</el-dropdown-item>-->
            <!--<el-dropdown-item class="dropdown-item">个人中心</el-dropdown-item>-->
            <!--<el-dropdown-item class="dropdown-item">我的收藏</el-dropdown-item>-->
            <!--<el-dropdown-item class="dropdown-item">退出登录</el-dropdown-item>-->
          <!--</el-dropdown-menu>-->
        <!--</el-dropdown>-->
        <div class="login-div">
          <router-link :to="{path: '/login'}" class="login-button">登录</router-link>
          <router-link :to="{path: '/login'}" class="login-button">注册</router-link>
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
      img {
        height: 100%;
      }
    }
    .home-title {
      flex: 1;
      text-align: center;
      margin-top: 30px;
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
      .dropdown {
        height: 50px;
        cursor: pointer;
        .el-dropdown-link {
          overflow: hidden;
          height: 50px;
          min-width: 170px;
        }
        img {
          width: 50px;
          height: 50px;
          border-radius: 25px;
        }
        span {
          height: 50px;
          display: inline-block;
          line-height: 50px;
          vertical-align: top;
          color: rgb(100, 203, 177);
          text-indent: 10px;
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

</script>
