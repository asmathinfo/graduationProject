<template>
  <div>
    <!--<router-link :to="{path: '/home/publish'}"></router-link>-->
    <a @click="publish"></a>
  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
  a {
    display: inline-block;
    background-image: url('/static/images/publish-btn.png');
    background-repeat: no-repeat;
    height: 52px;
    width: 140px;
    cursor: pointer;
    &:hover {
       background-image: url('/static/images/publish-btn-hover.png');
     }
  }
</style>

<script type="text/ecmascript-6">
  export default {
    methods: {
      // 如果还没登录，跳转登录
      publish () {
        this.$http.get('/api/judgePublish')
          .then(res => {
            if (res.data.state === '0') {
              this.$message({
                message: res.data.msg,
                type: 'warning'
              })
            }
            this.$router.push({path: res.data.url})
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>
