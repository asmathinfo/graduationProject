<template>
  <div class="person-wrap">
    <el-tabs type="border-card">
      <el-tab-pane label="个人中心">
        <div class="person-div">
          <p>基本信息</p>
          <div class="person-item">
            <span>昵称</span>
            <span @click="editName" v-if="!showInput">{{this.newName}}</span>
            <span v-if="showInput"><el-input place-holder="请输入昵称" @blur="finishEdit" v-model="newName"></el-input></span>
          </div>
          <div class="person-item">
            <span>头像</span>
            <el-form class="person-head" enctype="multipart/form-data" method="post">
              <el-upload
                class="head-upload"
                name="headUpload"
                action="/api/upload"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="headUrl" :src="headUrl" class="avatar">
                <img v-else src="static/images/nav/logo.png">
              </el-upload>
            </el-form>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="发布的商品">
        <ul class="had-published">
          <li v-for="item in commodityItems" :itemID="item.id"  @click="showDetail(item.id)" v-if="haveCommodity">
            <span>{{item.name}}</span>
            <span>¥</span>
            <span>{{item.price}}</span>
          </li>
          <li v-if="haveCommodity === false">
            <span>你还没发布过任何商品</span>
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
        &:hover {
          background-color: #F8F5F5;
         }
      }
    }
  }
</style>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        commodityItems: '',
        headUrl: '',
        showInput: false,
        newName: '普通用户',
        haveCommodity: false
      }
    },
    methods: {
      // 点击显示商品详情
      showDetail: function (itemID) {
        this.$http.post('/api/detail', {itemID: itemID})
          .then(res => {
            this.$store.commit({
              'type': 'showCommodityDetail',
              'commodityDetail': res.data.commodity
            })
            this.$router.push({path: '/home/detail'})
          })
          .catch(res => {
            this.$message({
              message: res.data.msg,
              type: 'error'
            })
          })
      },
      // 选择图片之后把本机图片位置作为图片的链接
      handleAvatarSuccess (res, file) {
        this.headUrl = res.headUrl
        this.$http.post('/api/editHead', {headUrl: this.headUrl})
          .then(res => {
            if (res.data.state === '1') {
              this.$store.commit({
                'type': 'editHead',
                'headUrl': this.headUrl
              })
              this.$message({
                message: res.data.msg,
                type: 'success'
              })
            } else {
              this.$message({
                message: res.data.msg,
                type: 'error'
              })
            }
          })
        this.$message({
          message: res.msg,
          type: 'success'
        })
      },
      beforeAvatarUpload (file) {
        // 照片不能超过2M
        const isLt2M = file.size / 1024 / 1024 < 2
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        return isLt2M
      },
      // 点击修改名字
      editName () {
        this.showInput = true
      },
      // 修改名字并提交
      finishEdit () {
        this.showInput = false
        this.$http.post('/api/editName', {name: this.newName})
          .then(res => {
            if (res.data.state === '1') {
              this.$store.commit({
                'type': 'editName',
                'name': this.newName
              })
              this.$message({
                message: res.data.msg,
                type: 'success'
              })
            } else {
              this.$message({
                message: res.data.msg,
                type: 'error'
              })
            }
          })
      }
    },
    mounted () {
      this.$http.get('/api/personCommodity')
        .then(res => {
          if (res.data.commodityItems.length > 0) {
            this.commodityItems = res.data.commodityItems
            this.haveCommodity = true
          } else {
            this.haveCommodity = false
          }
        })
      this.$http.get('/api/personInfo')
        .then(res => {
          this.newName = res.data.name
          this.headUrl = res.data.headUrl
        })
    }
  }
</script>
