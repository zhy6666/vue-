 <template>
  <div class="wrap">
     <div class="left"><span>左边</span></div>
     <div class="center"><span>中间</span></div>
     <div class="right"><span>右边s</span></div>
  </div>
</template>

<script>
    export default {
      data(){
        return{
        }
      },
      mounted(){


      },
      methods:{

      }
    }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  .wrap
   width 100%
   height 100px
   background-color #4cae4c
   display flex
   .left
    width 50px
    background-color #31b0d5
    span
     font-size 20px
   .center
    flex 1
    background-color #8a6d3b
    text-align center
    span
     font-size 18px
   .right
    width 50px
    background-color #761c19
    span
     font-size 18px


</style>
