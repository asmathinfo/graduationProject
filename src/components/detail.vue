<template>
  <div>
    <div class="commdity-wrap">
      <div class="commodity-content">
        <div class="commdity-img"><img :src="commodityHeadUrl" alt="哎呀，图片走丢了"></div>
        <div class="commdity-description">
          <div class="commdity-info">
            <p class="commdity-title">{{this.commodityDetail.name}}</p>
            <div class="commdity-price">
              <span>¥&nbsp;&nbsp;{{this.commodityDetail.price}}</span>
              <span>{{this.commodityDetail.bargain}}</span>
            </div>
            <div class="commdity-visit">浏览了86次</div>
          </div>
          <ul class="commdity-trading">
            <li>
              <div class="commdity-trading-item">交易地点</div>
              <span>{{this.commodityDetail.place}}</span>
            </li>
            <li>
              <div class="commdity-trading-item">卖家</div>
              <span>{{this.commodityDetail.poster}}</span>
            </li>
            <!--<li>-->
              <!--<div class="commdity-trading-item">专业</div>-->
              <!--<span>13级通信</span>-->
            <!--</li>-->
            <li>
              <div class="commdity-trading-item">手机</div>
              <span>{{this.commodityDetail.tel}}</span>
            </li>
            <li>
              <div class="commdity-trading-item">QQ</div>
              <span>{{this.commodityDetail.qq}}</span>
            </li>
            <li>
              <div class="commdity-trading-item">发布时间</div>
              <span>{{this.creatDate}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="commdity-note">
        <img :src="commodityDetail.posterUrl" alt="">
        <div>{{this.commodityDetail.detail}}</div>
      </div>
      <div class="commdity-comment">
        <span class="commdity-comment-title">评论</span>
        <ul>
          <li v-for="item in commentItems">
            <img :src="item.headUrl" alt="">
            <div class="commdity-comment-item">
              <div class="commdity-comment-user">{{item.name}}</div>
              <p>{{item.commentContent}}</p>
              <div class="commodity-time">{{item.created_at}}</div>
            </div>
          </li>
          <div class="commdity-comment-self">
            <img :src="headUrl" alt="" v-if="headUrl">
            <img src="static/images/nav/logo.png" alt="" v-else>
            <div class="self-content">
              <el-input
                type="textarea"
                :rows="2"
                v-model="commentContent"
              ></el-input>
              <el-button class="self-content-submit" @click="publishComment">评论</el-button>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'

  export default {
    data () {
      return {
        creatDate: '',
        commodityHeadUrl: '',         // 商品的图片
        id: '',
        commentContent: '',
        commentItems: []              // 评论列表
      }
    },
    computed: {
      ...mapState([
        'commodityDetail',
        'name',
        'headUrl'                     // 当前登录用户的头像
      ])
    },
    mounted () {
      console.log(this.commodityDetail)
      let year = new Date(this.commodityDetail.created_at).getFullYear()
      let month = new Date(this.commodityDetail.created_at).getMonth() + 1
      let date = new Date(this.commodityDetail.created_at).getDate()
      this.creatDate = year + '.' + month + '.' + date
      this.commodityHeadUrl = this.commodityDetail.headUrl
      this.id = this.commodityDetail.id
      this.$http.post('/api/commentList', {id: this.id})
        .then(res => {
          console.log(res)
          if (res.data.state === '1') {
            this.commentItems = res.data.commentItems
            // 对数据库的时间进行格式化
            this.commentItems.forEach(item => {
              item.created_at = this.timeFormat(new Date(item.created_at))
            })
          } else {
            this.$message({
              message: res.data.msg,
              type: 'warning'
            })
          }
        })
    },
    methods: {
      // 格式化时间
      timeFormat (time) {
        let year = time.getFullYear()
        let month = time.getMonth() + 1
        let date = time.getDate()
        let created = year + '.' + month + '.' + date
        return created
      },
      // 发表评论
      publishComment () {
        this.$http.post('/api/comment', {id: this.id, content: this.commentContent})
          .then(res => {
            if (res.data.state === '1') {
              this.$message({
                message: res.data.msg,
                type: 'success'
              })
              let time = new Date()
              let created = this.timeFormat(time)
              this.commentItems.push({name: this.name, headUrl: this.headUrl, commentContent: this.commentContent, created_at: created})
              this.commentContent = ''
            } else {
              this.$message({
                message: res.data.msg,
                type: 'warning'
              })
              this.$router.push({path: '/login'})
            }
          })
          .catch(res => {
            this.$message({
              message: res.data.msg,
              type: 'error'
            })
          })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $theme-color: rgb(100, 203, 177);
  .commdity-wrap {
    width: 920px;
    margin: 0 auto;
    margin-top: 50px;
    .commodity-content {
      background-color: white;
      position: relative;
      .commdity-img {
        width: 560px;
        height: 560px;
        position: absolute;
        left: 0;
        top: 0;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .commdity-description {
        margin-left: 560px;
        height: 560px;
        .commdity-info {
          padding: 25px;
          border-bottom: 1px dashed $theme-color;
          position: relative;
          .commdity-title {
            color: $theme-color;
            font-size: 18px;
          }
          .commdity-price {
            margin-top: 15px;
            span:first-child {
              color: rgb(235, 80, 85);
              font-size: 28px;
            }
            span:last-child {
              display: inline-block;
              margin-left: 15px;
            }
          }
          .commdity-visit {
            position: absolute;
            bottom: -10px;
            left: 25px;
            color: #999;
            font-size: 14px;
            display: inline-block;
            min-width: 50px;
            background-color: white;
            padding: 0 10px;
          }
        }
        .commdity-trading {
          padding: 25px;
          li {
            margin-top: 16px;
            .commdity-trading-item {
              width: 80px;
              font-size: 14px;
              display: inline-block;
              margin-right: 20px;
              background-color: $theme-color;
              padding: 10px;
              color: white;
              text-align: center;
            }
          }
        }
      }
    }
    .commdity-note {
      background-color: white;
      background-image: url("/static/images/list/info.png");
      background-repeat: no-repeat;
      background-position: 20px 20px;
      margin-top: 20px;
      padding: 50px 90px 30px 150px;
      position: relative;
      img {
        position: absolute;
        left: 70px;
        top: 50px;
        width: 52px;
        height: 52px;
        border-radius: 26px;
      }
      div {
        min-height: 55px;
        padding-top: 20px;
      }
    }
    .commdity-comment {
      position: relative;
      width: 100%;
      background-color: white;
      padding: 60px 50px 20px 40px;
      margin-top: 20px;
      .commdity-comment-title {
        position: absolute;
        left: -5px;
        top: 4px;
        width: 90px;
        color: white;
        background-color: $theme-color;
        height: 34px;
        line-height: 34px;
        text-align: center;
        margin-bottom: 50px;
      }
      li {
        margin-top: 20px;
        position: relative;
        border-bottom: 1px dashed $theme-color;
        padding-bottom: 10px;
        img {
          box-sizing: border-box;
          position: absolute;
          left: 0;
          top: 0;
          width: 54px;
          height: 54px;
          padding: 2px;
          border: 1px solid $theme-color;
          border-radius: 27px;
        }
        .commdity-comment-item {
          margin-left: 100px;
          .commdity-comment-user {
            margin-bottom: 10px;
            padding-top: 10px;
          }
          .commodity-time {
            text-align: right;
          }
        }
      }
      .commdity-comment-self {
        margin-top: 40px;
        position: relative;
        padding-bottom: 20px;
        img {
          box-sizing: border-box;
          position: absolute;
          left: 0;
          top: 0;
          width: 54px;
          height: 54px;
          padding: 2px;
          border: 1px solid $theme-color;
          border-radius: 27px;
        }
        .self-content {
          margin-left: 100px;
          text-align: right;
          .self-content-submit {
            margin-top: 10px;
          }
        }
      }
    }
  }
</style>
