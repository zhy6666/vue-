 <template>
    <div class="personal_wrap">
      <div class="title">我</div>
      <div class="img_wrap">
        <div class="img_left"><img src="../assets/images/morentouxiang.png"/></div>
        <div class="img_right">
          <div class="text_wrap">
            <p>you know</p>
            <p>微信号：beandfjiewan</p>
          </div>
          <img src="../assets/images/youjiantou.png">
        </div>
      </div>
      <div class="money">
        <div class="money_left">
          <img src="../assets/images/qianbao.png"/>
        </div>
        <div class="money_right">
           <span>钱包</span>
           <img src="../assets/images/youjiantou.png">
        </div>
      </div>
      <div class="middle_wrap">
        <div class="shou">
          <div class="money_left">
            <img src="../assets/images/shoucang.png"/>
          </div>
          <div class="money_right">
            <span>收藏</span>
            <img src="../assets/images/youjiantou.png">
          </div>
        </div>
        <div class="line"></div>
        <div class="phone">
        <div class="money_left">
          <img src="../assets/images/qianbao.png"/>
        </div>
        <div class="money_right">
          <span>钱包</span>
          <img src="../assets/images/youjiantou.png">
        </div>
      </div>
      </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 .personal_wrap
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  background-color #f0eff5
  .title
   width 100%
   height 50px
   line-height 50px
   color #fff
   text-align center
   background-color #38373d
  .img_wrap
   width 100%
   background-color #fff
   display flex
   padding-top 13px
   margin-top 15px
   padding-bottom 13px
   .img_left
    width 101px
    padding-left 17px
    img
     width 83px
     height 83px
     border-radius 10%


   .img_right
    flex 1
    padding-left 15px
    position relative
    .text_wrap
     height 83px
     p
      padding-top 18px


    img
     width 20px
     height 20px
     position absolute
     top 32px
     right 10px

  .money
   width 100%
   background-color #fff
   margin-top 15px
   padding-left 10px
   padding-top 10px
   padding-bottom 10px
   line-height 30px
   display flex
   .money_left
    width 50px
    height 30px
    img
     width 30px
     height 30px
   .money_right
    flex 1
    height 30px
    position relative
    span
     font-size 20px
    img
     width 20px
     height 20px
     position absolute
     top 6px
     right  10px



  .middle_wrap
   width 100%
   background-color #fff
   .shou
    width 100%
    background-color #fff
    margin-top 15px
    padding-left 10px
    padding-top 10px
    padding-bottom 10px
    line-height 30px
    display flex
    .money_left
     width 50px
     height 30px
     img
      width 30px
      height 30px
    .money_right
     flex 1
     height 30px
     position relative
     span
      font-size 20px
     img
      width 20px
      height 20px
      position absolute
      top 6px
      right  10px



   .line
    width 95%
    margin-left 5%
    height 1px
    background-color #e6e6e6
   .phone
    width 100%
    background-color #fff
    padding-left 10px
    padding-top 10px
    padding-bottom 10px
    line-height 30px
    display flex
    .money_left
     width 50px
     height 30px
     img
      width 30px
      height 30px
    .money_right
     flex 1
     height 30px
     position relative
     span
      font-size 20px
     img
      width 20px
      height 20px
      position absolute
      top 6px
      right  10px



</style>
