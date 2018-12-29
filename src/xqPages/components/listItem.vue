<template>
    <div class="item_wrap">
      <ul v-for="(item,index) in bottomList">
        <li v-for="(item1,index1) in item.list">
          <div :class="index1==0?'cart':''"></div>
          <div class="item_top" >
            <span>{{item1.name}}</span>
          </div>
          <div class="item_bottom">
            <div class="num_wrap">
              <span class="number">{{item1.value}}</span>
            </div>
            <div class="compare">
              <img src="../../assets/images/compare_up.png"/>
              <span>222</span>
            </div>
          </div>
          <div :class="item.list.length-1==index1?'':'line'"></div>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    props:{
      bottomList:Array
    },
    mounted(){
      console.log(this.bottomList)
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.item_wrap
  background-color #f6f8f9
  padding-top 10px
  padding-left 5%
  padding-right 5%
  padding-bottom 54px
  ul
   width 100%
   margin-top 10px
   li
     height 100px
     background-color #fff
     padding-left 17px
     position relative
     .cart
      position absolute
      top 0
      left 0
      height 40px
      width 4px
      background-color #3c763d
     .item_top
      height 55px
      line-height 55px
      span
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #A6A6A6;
     .item_bottom
      height 45px
      display flex
      .num_wrap
       width 50%
       position relative
       .number
        font-family: CenturyGothic;
        font-size: 24px;
        color: #010E4F;
      .num_wrap:after
       content ''
       display block
       position absolute
       right 0px
       bottom 20px
       width 1px
       height 25px
       border 1px dashed #e6e6e6
      .compare
        flex 1
        text-align right
        padding-top 8px
        padding-right 10px
        img
         width 10px
         height 10px
        span
          font-family: PingFangSC-Light;
          font-size: 16px;
          color: #FF6666;
     .line
       position absolute
       right 0px
       bottom 0px
       width 100%
       height 1px
       border 1px dashed #e6e6e6
   li:first-child
    border-top-left-radius 10px
    border-top-right-radius 10px
   li:last-child
    border-bottom-left-radius 10px
    border-bottom-right-radius 10px

</style>
