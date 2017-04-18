<template>
  <div>
    <router-link :to="{path: '/home/publish'}"></router-link>
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
</script>
