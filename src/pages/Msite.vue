<template>
   <div class="tab_wrap">
     <div class="title_wrap"><p>全国</p><img src="../assets/images/xiaoxi.png"></div>
     <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img class="content" src="../assets/images/bannertu.jpg"/></div>
      </div>
    </div>
     <today-situation></today-situation>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import todaySituation from '../components/todaySituation'
  export default {
    data(){
      return{
        widthData:'3.33rem',
      }
    },
    mounted(){
      var s=this
     this.mySwiper=new Swiper('.swiper-container',{
       observer:true,
       observerParents:true,
            on:{
              slideChangeTransitionEnd:function(){
                s.currentIndex=this.activeIndex
              }
            }
      })
    },
    methods:{

    },
    components:{todaySituation}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .tab_wrap
   position absolute
   top 0
   left 0
   right 0
   bottom 54px
   background-color #f6f8f9
   .title_wrap
    width 100%
    height 50px
    line-height 40px
    text-align center
    padding-top 10px
    position relative
    p
     font-size 16px
    img
     position absolute
     right 10px
     width 20px
     height 20px
     top 20px
   .content
    width 100%
    height 150px

</style>
