<template>
  <div>
    <div class="list-wrap">
      <div class="read-first">
        <div class="read-first-title"><i class="el-icon-information"></i>推荐阅读</div>
        <div class="read-first-content">
          <a>商品发布规则</a>
          <a>购买二手iphone等数码产品注意事项</a>
        </div>
      </div>
      <ul class="list-content">
        <li v-for="item in commodityItems">
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
        commodityItems: [
          {
            img: 'static/images/list/phone.jpg',
            name: '欧派电动车',
            owner: {
              info: '通信13级',
              name: '张三'
            },
            price: 2500
          },
          {
            img: 'static/images/list/phone.jpg',
            name: '欧派电动车',
            owner: {
              info: '通信13级',
              name: '张三'
            },
            price: 2500
          },
          {
            img: 'static/images/list/phone.jpg',
            name: '欧派电动车',
            owner: {
              info: '通信13级',
              name: '张三'
            },
            price: 2500
          },
          {
            img: 'static/images/list/phone.jpg',
            name: '欧派电动车',
            owner: {
              info: '通信13级',
              name: '张三'
            },
            price: 2500
          },
          {
            img: 'static/images/list/phone.jpg',
            name: '欧派电动车',
            owner: {
              info: '通信13级',
              name: '张三'
            },
            price: 2500
          },
          {
            img: 'static/images/list/phone.jpg',
            name: '欧派电动车',
            owner: {
              info: '通信13级',
              name: '张三'
            },
            price: 2500
          },
          {
            img: 'static/images/list/phone.jpg',
            name: '欧派电动车',
            owner: {
              info: '通信13级',
              name: '张三'
            },
            price: 25
          },
          {
            img: 'static/images/list/phone.jpg',
            name: '欧派电动车',
            owner: {
              info: '通信13级',
              name: '张三'
            },
            price: 2500
          }
        ]
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

  &
  :hover {
    color: rgb(100, 203, 177);
  }

  }
  }
  }
  .list-content {
    margin-top: 40px;
    border-top: 1px dashed rgb(100, 203, 177);
    padding: 40px 0;
    width: 100%;

  li {
    display: inline-block;
    width: 200px;
    margin-left: 10px;
    margin-bottom: 20px;
    background-color: white;
    position: relative;

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
  }

  }
  }
  }
  }

</style>
