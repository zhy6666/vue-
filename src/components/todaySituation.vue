<template>
 <div class="today_situation_wrap">
   <div class="today_situation_title" @click="isShowContent">
     <span>今日概况</span>
     <img src="../assets/images/xiala.png"/>
   </div>
   <div class="today_situation_content">
     <my-swipe :auto="0" ref="mtSwipe" :continuous="false" :showIndicators="false" @change="handleChange">
       <my-swipe-item v-for="(item,index) in datas" :key="index">
         <img src="../assets/images/left@2x.png" class="arr_left" @click="prev"/>
         <img src="../assets/images/left@2x.png" class="arr_right" @click="next"/>
         <ul>
           <li v-for="(item2,index) in item">
             <div class="li_item">
               <div class="top">
                 <span class="jsl">{{item2.name}}</span>
                 <span class="pencil">{{item2.unit}}</span>
               </div>
               <div class="bottom">
                 <span>{{item2.value}}</span>
               </div>
               <div class="line"></div>
             </div>
           </li>

         </ul>
       </my-swipe-item>
     </my-swipe>
   </div>
 </div>
</template>

<script>
    export default {
      data(){
        return{
          isShowContent:true,
          datas:[[{"name":"进审量","unit":"笔","value":"1111"},{"name":"审批量","unit":"万","value":"2222"},{"name":"进审量","unit":"笔","value":"3333"}],[{"name":"进审量","unit":"笔","value":"4444"},{"name":"审批量","unit":"万","value":"5555"},{"name":"进审量","unit":"笔","value":"6666"}],[{"name":"进审量","unit":"笔","value":"7777"},{"name":"审批量","unit":"万","value":"8888"},{"name":"进审量","unit":"笔","value":"9999"}]],
        }
      },
      mouted(){

      },
      methods:{
        prev:function () {
          this.$refs.mtSwipe.prev()
        },
        next:function () {
          this.$refs.mtSwipe.next()
        }

      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.today_situation_wrap
  margin-top 10px
  background-color #ffffff
  .today_situation_title
   height 51px
   line-height 51px
   border-bottom 1px solid #F1F3F8
   span
    font-family PingFangSC-Medium
    font-size 18px
    margin-left 10px
   img
    width 30px
    height 30px
    float right
    margin-top 10px
    margin-right 10px
  .today_situation_content
   overflow hidden
   width 100%
   height 95px
   white-space nowrap
   -webkit-overflow-scrolling touch
   ul
     overflow hidden
     height 95px
     -webkit-overflow-scrolling touch
     li
      float left
      .li_item
       width 3.33rem
       position relative
       text-align center
       height 96px
       .top
        padding-top 22px
        .jsl
         font-family PingFangSC-Light
         font-size 14px
         color #29354D
        .pencil
         font-family PingFangSC-Light
         font-size 10px
         color #909090
         margin-left 4px
       .bottom
        padding-top 8px
        span
         font-family DINCondensed-Bold
         font-size 30px
         color #4E97FF
       .line
        position absolute
        top 20px
        right 0px
        height 50px
        width 1px
        background-color #7e8c8d

     li:nth-child(3n+0)
       .line
         background transparent
   .arr_left
    position absolute
    top 48%
    left 2px
    width 25px
   .arr_right
    position absolute
    top 48%
    right 2px
    width 25px
    transform rotate(180deg)
</style>
