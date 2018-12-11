<template>
    <div class="wrap">
      <div class="top_content"></div>
      <div class="bottom_content"></div>
      <div class="ceng_content">
       <div class="ceng_top">
         <p>今日出借(万元)</p>
         <div class="compare">
           <div class="compare-top">
             <img src="../../assets/images/compare_up.png">
             <span>1</span>
           </div>
           <span class="jiao">较上次</span>
         </div>
       </div>
       <div class="money">
         <span class="money_fu">￥</span>
         <span class="number">1222222</span>
       </div>
       <div class="ceng_bottom">
         <img src="../../assets/images/time.png">
         <span>最近刷新时间 12:22:33</span>
       </div>
      </div>
    </div>
</template>

<script>
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.wrap
  width 100%
  height 200px
  position relative
  .top_content
   width 100%
   height 150px
   background-color #5b96ff
  .bottom_content
   width 100%
   height 50px
   background url("../../assets/images/background@2x_02.png") no-repeat bottom
   background-size 100% 50px
  .ceng_content
   position absolute
   top 5px
   left 4%
   right 4%
   width 92%
   height 190px
   background-color #fff
   border-radius 8px
   .ceng_top
    width 100%
    height 80px
    padding-left 3%
    padding-right 3%
    background url("../../assets/images/disecopy@2x.png") no-repeat top
    background-size 100% 30px
    p
     float left
     padding-top 14px
     font-family PingFangSC-Regular
     font-size 16px
     color #010E4F
    .compare
     float right
     padding-top 14px
     text-align right
     .compare-top
      padding-bottom 2px
      img
       width 10px
       height 10px
      span
       font-family PingFangSC-Regular
       font-size 16px
       color #010E4F
     .jiao
      font-family PingFangSC-Regular
      font-size 14px
      color #8D92A9
      padding 0
      margin 0
   .money
     width 100%
     text-align center
     .money_fu
      font-family PingFangSC-Medium
      font-size 24px
      color #010E4F
     .number
      font-family CenturyGothic-Bold
      font-size 36px
      color #010E4F
   .ceng_bottom
    width 100%
    margin-top 40px
    text-align center
    img
     width 12px
     height 12px
    span
     font-family PingFangSC-Regular
     font-size 14px
     color #8D92A9
</style>
、
