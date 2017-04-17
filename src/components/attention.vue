<template>
  <div>
    <div class="read-wrap" v-if="attentionRead">
      <h3>购买二手iphone注意事项</h3>
      <div class="read-content">
        <p>
          先付款后快递的都是骗子，一定不要自己作死。
        </p>
        <p>
          不要贪图小便宜，800块钱转让给iPhone5S，这种标题看到就知道东西是假的。买之前，先查一下新品的市场价格，然后再来 理性地看待二手手机的价格。一定不要贪图小便宜，买到假货的绝大多数都是因为贪小便宜。
        </p>
        <p class="read-step">
          验机步骤：
        </p>
        <ol>
          <li>“抹掉所有内容”，点：设置——通用——还原——抹掉所有内容和设置！注意，别选错了，要选第2个“抹掉所有内容”的那个，而不是第1个还原所有设置！这样所有的靠越狱改序列号的翻新机器就会重启不能！（也就是白苹果）如果不做第一步，接下来的步骤都白做了。如果需要密码或网络，就让卖家给密码，找网络的地方，这一步千万不能省。如果不让还原，肯定心虚有诈，你就别买了。</li>
          <li>判断是否是5改成5S 如果能成功抹掉并重启，那么接下来看：设置——指纹——新添加指纹，是否好用。 如果不能新增指纹，就是个伪装成5S的5，这种机器也算是翻新机改装机了，千万不能买。</li>
          <li>点击：设置——通用——关于本机。首先看型号来辨别产地，例如 MD999CH/A，如果CH位置的两个字母是CH，那么是国行；如果是ZP，港行；最怕是J，日版有锁机，尤其是运营商那里是日文的。</li>
          <li>查验保修期点击：设置——通用——关于本机。看序列号，然后到苹果官网输入验证。看保修日期是啥时候。是否如卖家所说。</li>
          <li>查看配件是否粗糙、磨损、机器成色等并不是太重要的问题。</li>
        </ol>
      </div>
    </div>
    <div class="rule-wrap" v-if="attentionRule">
      <div>
        <div class="left-triangle"></div>
        <div class="right-triangle"></div>
        <div class="rule-title"></div>
      </div>
      <div class="rule-type">
        <span>发布规则</span>
        <span>惩罚措施</span>
      </div>
      <table>
        <tr>
          <td class="rule-order"><span>1</span></td>
          <td class="rule-content">同一类型的商品不得多次发布，建议发在一个商品当中。每张图片可以对应一件商品，在商品详情中描述每个商品的价格。</td>
          <td class="rule-content">一经发现将删除重复商品，只保留一个</td>
        </tr>
        <tr>
          <td class="rule-order"><span>2</span></td>
          <td class="rule-content">不得在本平台上发布商品图片与实物不一致的商品，若引用网上图片第一张必须为实物拍摄</td>
          <td class="rule-content">一经发现将删除商品</td>
        </tr>
        <tr>
          <td class="rule-order"><span>3</span></td>
          <td class="rule-content">不得在本平台上发布带有虚假诈骗信息的商品</td>
          <td class="rule-content">一经查证将删除发布内容，并且永久封号</td>
        </tr>
        <tr>
          <td class="rule-order"><span>4</span></td>
          <td class="rule-content">不得在本平台上密集发布全新商品</td>
          <td class="rule-content">一经发现将视作广告，删除全部商品并封号</td>
        </tr>
        <tr>
          <td class="rule-order"><span>5</span></td>
          <td class="rule-content">不得在本平台上发布违法商品</td>
          <td class="rule-content">一经查证将删除发布内容，并且永久封号</td>
        </tr>
        <tr>
          <td class="rule-order"><span>6</span></td>
          <td class="rule-content">不得在本平台上发布与商品无关信息</td>
          <td class="rule-content">一经发现将删除发布内容，并且永久封号</td>
        </tr>
        <tr>
          <td class="rule-order"><span>7</span></td>
          <td class="rule-content">发布商品30天后自动下架</td>
          <td class="rule-content">下架后可在个人主页重新上架</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
  .read-wrap {
    $theme-color: rgb(100, 203, 177);
    width: 850px;
    margin: 0 auto;
    background-color: white;
    margin-top: 40px;
    h3 {
      text-align: center;
      padding: 30px 0;
      border-bottom: 1px solid $theme-color;
    }
    .read-content {
      padding: 30px;
      background-color: #f9f9f9;
      text-indent: 20px;
      .read-step {
        margin-top: 20px;
      }
      ol {
        margin-left: 20px;
        text-indent: 0;
        li {
          margin-top: 10px;
        };
      }
    }
  }
  .rule-wrap {
    width: 850px;
    margin: 0 auto;
    margin-top: 40px;
    .left-triangle {
      float: left;
      border-top: 84px solid transparent;
      border-left: 64px solid transparent;
      border-bottom: 84px solid #00ad90;
      border-right: 64px solid #00ad90;
    }
    .right-triangle {
      float: right;
      border-top: 84px solid transparent;
      border-left: 64px solid #00ad90;
      border-bottom: 84px solid #00ad90;
      border-right: 64px solid transparent;
    }
    .rule-title {
      margin: 0 128px;
      height: 168px;
      background-color: #00ad90;
      color: white;
      background-image: url('/static/images/pubrule-hd.png');
      background-repeat: no-repeat;
      background-position: center;
    }
    .rule-type {
      background-color: #44c1a5;
      span {
        display: inline-block;
        width: 420px;
        text-align: center;
        height: 60px;
        line-height: 60px;
        color: white;
        font-size: 18px;
      }
    }
    table {
      background-color: white;
      position: relative;
      border-collapse: separate;
      text-align: center;
      border-bottom: 3px solid #00ad90;
      tr {
        height: 60px;
        .rule-content {
          width: 50%;
          padding: 15px;
          font-size: 14px;
        }
        .rule-order {
          position: absolute;
          width: 10px;
          left: 420px;
          margin-left: -8px;
          span {
            margin-top: 15px;
            height: 30px;
            width: 30px;
            background-color: #44c1a5;
            border-radius: 15px;
            color: white;
            display: inline-block;
            line-height: 30px;
          }
        }
      }
      tr:nth-child(2n) {
        background-color: rgb(246, 249, 249);
      }
    }
  }
</style>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState([
        'attentionRead',
        'attentionRule'
      ])
    }
  }
</script>
