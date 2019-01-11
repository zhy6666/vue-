<template>
    <div>
      <div class="title_wrap">
        <span>业绩标题</span>
      </div>
    <div class="tab_wrap" ref="tabWrap">
        <ul class="list" ref="picList">
          <li v-for="(item,index) in arrList" :key="index"><span>{{item}}</span></li>
          
        </ul>
      </div>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        arrList:['生活','娱乐','购物','交通','唱歌','游泳','画画','打球']
      }
    },
   created(){
     this.saveFooterCurrent(1)
    
   },
   mounted(){
         this.$nextTick(()=>{
           let itemWidth=25+'%';
           console.log(itemWidth)
           let picwidth = (parseInt(itemWidth/100*(this.arrList.length-1)*100))
         console.log(picwidth)
        
           this.$refs.picList.style.width=picwidth+'%'
           this.BScroll=new BScroll(this.$refs.tabWrap,{
                scrollX:true,
                eventPassthrough:'vertical' //忽略竖直方向的滚动

                })
           })
   },
    methods:{
      ...mapActions(['saveFooterCurrent'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 .title_wrap
   width 100%
   height 50px
   background-color #e6e6e6
   display flex
   justify-content center
   align-items center
   span  
    font-size 18px
 .tab_wrap
  width 100%
  background-color #f2d7a8
  overflow hidden
  white-space nowrap
  ul 
   list-style none
   li 
    width 25%
    height 50px
    display inline-block
    line-height 50px
    text-align center
  
 

    




</style>
