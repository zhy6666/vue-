<template>
  <div>
    <div class="title_wrap">
      <div class="main"><img src="../../../assets/images/zbtitle.png"/></div>
      <div class="left"></div>
      <div class="right">
        <img src="../../../assets/images/mesage.png"/>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .title_wrap
    padding 0 50px 0 50px
    height 50px
    width 100%
    background-image url("../../../assets/images/zhanbaotitle.png")
    background-size 100% 100%
    background-repeat no-repeat
    .main,.left,.right
     height 50px
     position relative
     float left
    .left
     width 50px
     left -50px
     margin-left -100%
    .main
     width 100%
     text-align center
     display flex
     justify-content center
     align-items center
     img
      width 180px
      height 18px
    .right
     width 50px
     right -50px
     margin-left -50px
     img
      width 17px
      height 18px
      float right
      margin-top  15px
      margin-right 10px
</style>
