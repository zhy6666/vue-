<template>
  <div class="footer">
    <div v-for='(item,index) of items' :class='{on:index === footerCurrent}' @click="changeColors(index)" :key="index">
      <img :src="index===footerCurrent?item.iconSelect:item.icon">
      <p :class="{on:index===footerCurrent}" >{{item.name}}</p>
    </div>
  </div>
</template>

<script type="text/javascript">
  import {mapActions,mapGetters} from 'vuex'
  export default{
    data(){
      return {
        items:[
          {
            name:"首页",
            push:'/home/msite',
            icon:require('../../assets/images/shouye-hui.png'),
            iconSelect:require('../../assets/images/shouye-lan.png')
          },
          {
            name:"业绩",
            push:'/home/performance',
            icon:require('../../assets/images/yeji-hui.png'),
            iconSelect:require('../../assets/images/yeji-lan.png')
          },
          {
            name:"我的",
            push:"/home/personnal",
            icon:require('../../assets/images/wode-hui.png'),
            iconSelect:require('../../assets/images/wode-lan.png')
          }
        ]
      }
    },
    computed:{
      ...mapGetters(['footerCurrent']),

    },
    methods:{
      ...mapActions(['saveFooterCurrent']),
      changeColors(index){
        this.saveFooterCurrent(index)
        this.$router.push(this.items[index].push)
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    height: 54px;
    background #ffffff
    width: 100%
    border-top 0.5px solid #f1f1f1
    div
      text-align center
      flex: 1;
      img
        width: 21px;
        height: 20px;
        -webkit-margin-before: 11px;
        -webkit-margin-after: 0em;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
      p
       color #29354D
       font-size 10px
       -webkit-margin-before: 5px;
       -webkit-margin-after: 0em;
       -webkit-margin-start: 0px;
       -webkit-margin-end: 0px;
    .on
      color #4E97FF


</style>
