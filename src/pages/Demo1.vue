<template>
  <div class="wrap">
    <div class="box1" v-show="showBox1"></div>
    <p>{{msg}}</p>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        showBox1:true,
        msg:'痕迹'
      }
    },
    mounted(){


    },
    methods:{
    },
    watch:{
      $route(to,from){
        if(to.path=='/demo1'){
          this.msg='加油'
        }
      }
    }

  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  .wrap
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    .box1
      width 100%
      height 200px
      background-color #31b0d5


</style>
