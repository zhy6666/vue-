<template>
    <div>
      <div class="title_wrap">
        <span>业绩标题</span>
      </div>
    <div class="tab_wrap">
      <ul>
        <li><span>tab1</span></li>
        <li><span>tab1</span></li>
        <li><span>tab1</span></li>
         <li><span>tab1</span></li>
          <li><span>tab1</span></li>
           <li><span>tab1</span></li>
      </ul>
    </div>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
   created(){
     this.saveFooterCurrent(1)
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
  height 50px
  background-color #f2d7a8
  ul 
   list-style none
   height 100%
   display flex
   justify-content center
   align-items center
   li 
    flex 1
    height 100%
    line-height 50px
    text-align center
  
 

    




</style>
