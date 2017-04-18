<template>
  <div class="wrap">
    <homeNav></homeNav>
    <router-view></router-view>
    <homeSlide class="slide"></homeSlide>
    <foot></foot>
    <publish class="publish"></publish>
  </div>
</template>

<script>
  import homeNav from './nav.vue'
  import homeSlide from './slide.vue'
  import foot from './foot.vue'
  import publish from './publish.vue'

  export default {
    components: {
      homeNav,
      homeSlide,
      foot,
      publish
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
    .publish {
      position: absolute;
      right: 30px;
      top: 160px;
    }
  }
</style>
