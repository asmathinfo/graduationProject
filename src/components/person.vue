<template>
  <div class="person-wrap">
    <el-tabs type="border-card">
      <el-tab-pane label="个人中心">
        <div class="person-div">
          <p>基本信息</p>
          <div class="person-item">
            <span>昵称</span>
            <span>访客</span>
          </div>
          <div class="person-item">
            <span>头像</span>
            <el-upload
              class="person-head"
              action="#"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <img v-else src="static/images/nav/logo.png">
            </el-upload>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="发布的商品">
        <ul class="had-published">
          <li>
            <span>欧派电动车</span>
            <span>¥</span>
            <span>2500</span>
          </li>
          <li>
            <span>欧派电动车</span>
            <span>¥</span>
            <span>2500</span>
          </li>
          <li>
            <span>欧派电动车</span>
            <span>¥</span>
            <span>2500</span>
          </li>
          <li>
            <span>欧派电动车</span>
            <span>¥</span>
            <span>2500</span>
          </li>
          <li>
            <span>欧派电动车</span>
            <span>¥</span>
            <span>2500</span>
          </li>
          <li>
            <span>欧派电动车</span>
            <span>¥</span>
            <span>2500</span>
          </li>
          <li>
            <span>欧派电动车</span>
            <span>¥</span>
            <span>2500</span>
          </li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
  $theme-color: rgb(100, 203, 177);
  .person-wrap {
    width: 850px;
    margin: 0 auto;
    margin-top: 40px;
    .person-div {
      padding: 30px 300px 30px 30px;
      p {
        color: $theme-color;
        padding-bottom: 10px;
        border-bottom: 1px solid $theme-color;
      }
      .person-item {
        margin-top: 30px;
        span {
          display: inline-block;
          width: 130px;
          vertical-align: top;
        }
        .person-head {
          display: inline-block;
          img {
            height: 80px;
            width: 80px;
          }
        }
      }
    }
    .had-published {
      margin-top: 10px;
      li {
        padding: 15px;
        border-bottom: 1px solid #E3EEEC;
        cursor: pointer;
        span:first-child {
          display: inline-block;
          margin-right: 100px;
        }
      }
    }
  }
</style>
