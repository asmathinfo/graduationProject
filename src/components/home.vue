<template>
  <div class="wrap">
    <homeNav></homeNav>
    <list></list>
  </div>
</template>

<script>
  import homeNav from './nav.vue'
  import list from './list.vue'

  export default {
    components: {
      homeNav,
      list
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .wrap {
    background-color: rgb(227, 238, 236);
  }
</style>
