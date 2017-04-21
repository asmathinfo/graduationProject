<template id="homeContent">
  <div>
    <div class="list-wrap">
      <div class="read-first">
        <div class="read-first-title"><i class="el-icon-information"></i>推荐阅读</div>
        <div class="read-first-content">
          <!--<router-link :to="{ path: '/home/attention' }" @click="attentionRule">商品发布规则</router-link>-->
          <!--<router-link :to="{ path: '/home/attention' }" @click="attentionRead">购买二手iphone等数码产品注意事项</router-link>-->
          <a @click="attentionRule">商品发布规则</a>
          <a @click="attentionRead">购买二手iphone等数码产品注意事项</a>
        </div>
      </div>
      <ul class="list-content">
        <li v-for="item in commodityItems" @click="showDetail">
          <img src="static/images/list/phone.jpg" alt="">
          <div class="item-name">{{ item.name }}</div>
          <div class="item-info"><span>{{ item.owner.info }}</span><span>{{ item.owner.name }}</span></div>
          <div class="item-price">¥ <span>{{ item.price }}</span></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data () {
      return {
        commodityItems: []
      }
    },
    mounted: function () {
      this.$http.get('/api/list')
        .then(res => {
          console.dir(res.data)
          this.commodityItems = res.data
        })
        .catch(function (res) {
          console.log(res)
        })
    },
    methods: {
      showDetail: function () {
        this.$router.push({path: '/home/detail'})
      },
      attentionRule: function () {
        // 提交vuex的mutation，type是vuex对应的mutation函数
        this.$store.commit({
          'type': 'selectAttention',
          'attentionRead': false,
          'attentionRule': true
        })
        this.$router.push({ path: '/home/attention' })
      },
      attentionRead: function () {
        this.$store.commit({
          'type': 'selectAttention',
          'attentionRead': true,
          'attentionRule': false
        })
        this.$router.push({ path: '/home/attention' })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .list-wrap {
    width: 850px;
    margin: 0 auto;

    .read-first {
      background-color: white;
      margin-top: 40px;
      padding: 20px;

      .read-first-title {
        color: rgb(100, 203, 177);
        font-size: 20px;
        margin-bottom: 20px;

        i {
          display: inline-block;
          margin-right: 10px;
        }

      }
      .read-first-content {
        color: gray;
        font-size: 14px;

        a {
          margin-right: 60px;
          cursor: pointer;
          display: inline-block;

          &:hover {
            color: rgb(100, 203, 177);
          }

        }
      }
    }
    .list-content {
      margin-top: 40px;
      border-top: 1px dashed rgb(100, 203, 177);
      padding-top: 40px;
      width: 100%;

      li {
        display: inline-block;
        width: 200px;
        margin-left: 10px;
        margin-bottom: 20px;
        background-color: white;
        position: relative;
        cursor: pointer;

        img {
          width: 200px;
          height: 200px;
        }

        .item-name {
          color: rgb(100, 203, 177);
          font-size: 16px;
          margin-top: 10px;
          padding: 7px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .item-info {
          color: #333;
          font-size: 14px;
          padding: 7px;
          color: gray;

          span:last-child {
            float: right;
            display: inline-block;
          }

        }
        .item-price {
          position: absolute;
          top: 3px;
          right: -3px;
          min-width: 60px;
          height: 30px;
          line-height: 30px;
          background-color: rgb(235, 80, 85);
          color: white;
          padding: 0 5px;

          span {
            display: inline-block;
            float: right;
            color: white;
          }

        }
      }
    }
  }

</style>
