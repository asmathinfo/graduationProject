<template>
  <div class="wrap">
    <homeNav></homeNav>
    <router-view></router-view>
    <homeSlide class="slide"></homeSlide>
    <foot></foot>
  </div>
</template>

<script>
  import homeNav from './nav.vue'
  import homeSlide from './slide.vue'
  import foot from './foot.vue'

  export default {
    components: {
      homeNav,
      homeSlide,
      foot
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .wrap {
    background-color: rgb(227, 238, 236);
    position: relative;
    min-width: 1200px;
    .slide {
      position: absolute;
      left: 0;
      top: 120px;
    }
  }
</style>
