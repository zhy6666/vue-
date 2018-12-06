<template>
  <div class="today_wrap">
    <div class="tab">
      <div class="tab_item" v-for="(item,index) in tabs" @click="go(index)"><span :class="activedId==item.id?'active':''">{{item.name}}</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
         tabs:[
           {
             id:0,
             name:'今日',
             path:'/msite/today'
           },
           {
             id:1,
             name:'本月',
             path:'/msite/month'
           },
           {
             id:2,
             name:'历史',
             path:'/msite/history'
           },
         ]
      }
    },
    props:{
      activedId:{
        default:1
      }
    },
    methods:{
      go(index){
        this.$router.push(this.tabs[index].path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .tab
    width 100%
    height 30px
    display flex
    background-image url("../../assets/images/bj2.png")
    background-size 100% 100%
    background-repeat no-repeat
    align-items center
    justify-content center
    .tab_item
      float left
      margin-left 44px
      span
        color #d0ecff
        font-size 16px
        font-family PingFangSC-Semibold
      .active
        color #fff
        padding-bottom 3px
        border-bottom 2px solid #fff

    .tab_item:nth-child(1)
     margin-left 0px
</style>
