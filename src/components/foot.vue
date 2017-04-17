<template>
  <div class="wrap">
    <img src="static/images/footer-tri.png" alt="">
    <a href="https://github.com/lo56ve" class="github">github</a>
    <a href="https://lo56ve.github.io" class="blog">blog</a>

  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
  .wrap {
    background-image: url('/static/images/footer-bg.png');
    background-size: cover;
    background-position: bottom center;
    width: 100%;
    padding-bottom: 30px;
    text-align: center;
    margin-top: 40px;
    img {
      width: 100%;
    }
    .github,.blog {
      display: inline-block;
      margin: 10px 30px 0 0;
      &:hover {
         color: rgb(100, 203, 177);
       }
    }
  }
</style>
