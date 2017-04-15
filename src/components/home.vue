<template>
  <div class="wrap">
    <homeNav></homeNav>
    <router-view></router-view>
    <homeSlide class="slide"></homeSlide>
  </div>
</template>

<script>
  import homeNav from './nav.vue'
  import homeSlide from './slide.vue'

  export default {
    components: {
      homeNav,
      homeSlide
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .wrap {
    background-color: rgb(227, 238, 236);
    position: relative;
    .slide {
      position: absolute;
      left: 0;
      top: 120px;
    }
  }
</style>
