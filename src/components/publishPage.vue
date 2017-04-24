<template>
  <div class="publish-wrap">
    <div class="publish-title">
      <img src="static/images/publish-icon.png" alt="">
      <h3>发布商品</h3>
    </div>
    <el-form class="add-photo" enctype="multipart/form-data" method="post">
      <el-upload
        class="head-upload"
        name="headUpload"
        action="/api/upload"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="headUrl" :src="headUrl" class="avatar">
        <div v-else class="no-photo">
          <a></a>
        </div>
      </el-upload>
    </el-form>
    <el-form :model="publishForm" ref="publishForm" label-width="100px" class="publishForm">
      <el-form-item label="商品名称" class="publish-item">
        <el-input v-model="publishForm.name" placeholder="最多25个字"></el-input>
      </el-form-item>
      <el-form-item label="商品详情" class="publish-item">
        <el-input v-model="publishForm.detail" type="textarea" placeholder="建议填写物品用途、新旧程度、原价等信息，至少15个字"></el-input>
      </el-form-item>
      <el-form-item label="交易地点" class="publish-item">
        <el-input v-model="publishForm.place" placeholder="宿舍、教学楼、食堂等"></el-input>
      </el-form-item>
      <el-form-item label="价格" class="publish-item">
        <el-input v-model="publishForm.price" class="short-input"></el-input>
      </el-form-item>
      <el-form-item label="讲价" class="publish-item">
        <el-radio-group v-model="publishForm.bargain">
          <el-radio-button label="可小刀"></el-radio-button>
          <el-radio-button label="不可刀"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <div class="publish-contact">联系方式 <span>（至少选填一项）</span></div>
      <el-form-item label="手机" class="publish-item">
        <el-input v-model="publishForm.tel" class="short-input"></el-input>
      </el-form-item>
      <el-form-item label="QQ" class="publish-item">
        <el-input v-model="publishForm.qq" class="short-input"></el-input>
      </el-form-item>
      <el-form-item class="publish-item">
        <el-button class="publish-submit" @click="submitForm">马上发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
  .publish-wrap {
    width: 850px;
    margin: 0 auto;
    margin-top: 40px;
    .publish-title {
      text-align: center;
      img {
        margin-bottom: 10px;
      }
      h3 {
        color: #000;
        padding: 20px 0 30px 0;
        background-image: url('/static/images/black-wave.png');
        background-repeat: no-repeat;
        background-position: center 0;
      }
    }
    .add-photo {
      background-color: rgb(246, 249, 249);
      padding: 20px 0;
      .head-upload {
        width: 160px;
        height: 160px;
        border-radius: 80px;
        background-image: linear-gradient(rgb(68, 193, 165) 0%, rgb(255, 198, 0) 100%);
        cursor: pointer;
        margin-left: 340px;
        .avatar {
          height: 160px;
          width: 160px;
        }
        .no-photo {
          width: 156px;
          height: 156px;
          border-radius: 78px;
          margin: 2px 0 0 2px;
          background-color: white;
          overflow: hidden;
          text-align: center;
          a {
            display: inline-block;
            background-image: url('/static/images/addPhoto.png');
            background-position: -10px -120px;
            height: 100px;
            width: 80px;
            margin-top: 28px;
            &:hover {
               background-position: -10px -11px;
             }
          }
        }
      }
    }
    .publishForm {
      background-color: white;
      .publish-item {
        padding: 0 240px 0 140px;
        .short-input {
          width: 50%;
        }
      }
      .publish-contact {
        margin: 10px 160px 20px 160px;
        padding-bottom: 10px;
        border-bottom: 1px solid rgb(227, 238, 236);
        span {
          font-size: 14px;
        }
      }
      .publish-submit {
        width: 190px;
        height: 44px;
        border-radius: 22px;
        background-color: rgb(100, 203, 177);
        border: 0;
        margin-bottom: 40px;
        &:hover {
          background-color: rgb(0, 172, 144);
         }
        span {
          color: white;
        }
      }
    }
  }
</style>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        publishForm: {
          name: '',
          detail: '',
          place: '',
          price: '',
          bargain: '',
          tel: '',
          qq: ''
        },
        headUrl: ''
      }
    },
    methods: {
      submitForm () {
        let option = {
          name: this.publishForm.name,
          detail: this.publishForm.detail,
          place: this.publishForm.place,
          price: this.publishForm.price,
          bargain: this.publishForm.bargain,
          tel: this.publishForm.tel,
          qq: this.publishForm.qq,
          headUrl: this.headUrl
        }
        this.$http.post('/api/publish', option)
          .then(res => {
            if (res.data.state === '1') {
              this.$message({
                message: res.data.msg,
                type: 'success'
              })
              this.$router.replace({path: '/'})
            } else {
              this.$message({
                message: res.data.msg,
                type: 'error'
              })
            }
          })
      },
      // 选择图片之后把本机图片位置作为图片的链接
      handleAvatarSuccess (res, file) {
        this.headUrl = res.headUrl
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
      }
    }
  }
</script>
