<template>
    <div class="footer_wrap">
      <div class="footer_item" v-for="(item,index) in tabs" @click="go(index)">
        <img :src="index==footerCurrent?item.iconSelect:item.icon">
        <p :class="index==footerCurrent?'on':''">{{item.name}}</p>
      </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data(){
      return{
        tabs:[
          {
            id:0,
            name:'首页',
            path:'/msite',
            icon:require('../../assets/images/shouye-hui.png'),
            iconSelect:require('../../assets/images/shouye-lan.png')
          },
          {
            id:1,
            name:'业绩',
            path:'/achievement',
            icon:require('../../assets/images/yeji-hui.png'),
            iconSelect:require('../../assets/images/yeji-lan.png')
          },
          {
            id:2,
            name:'我的',
            path:'/personal',
            icon:require('../../assets/images/wode-hui.png'),
            iconSelect:require('../../assets/images/wode-lan.png')
          },
        ]
      }
    },
    computed:{
      ...mapGetters(['footerCurrent'])
    },
    methods:{
      go(index){
        this.$router.push(this.tabs[index].path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.footer_wrap
  position fixed
  left 0px
  right 0px
  bottom 0px
  height 54px
  display flex
  align-items center
  background-color #fff
  .footer_item
   flex 1
   text-align center
   img
    width 20px
    height 20px
   p
    padding-top 3px
    font-size 10px
    color #29354D
   .on
     color #4E97FF


</style>
