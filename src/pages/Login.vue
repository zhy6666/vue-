<template>
  <div class="login_wrap">
    <div class="phone_wrap">
      <img src="../assets/images/shouji2.png"/>
      <input placeholder="请输入手机号" v-model="phoneNumber"/>
    </div>
    <div class="phone_wrap">
      <img src="../assets/images/mima2.png"/>
      <input placeholder="请输入密码" v-model="password"/>
    </div>
    <button :class="sure?'btnBlue':''">登录</button>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        sure:false,
        phoneNumber:'',
        password:''
      }
    },
    watch:{
      password:function (val,oldval) {
       if(/^1[0345678]\d{9}$/.test(this.phoneNumber)){
         if(this.password.length>=6){
           this.sure=true
         }
       }
      },
      phoneNumber:function (val,oldval) {

      },


    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.login_wrap
  width 100%
  height 100%
  text-align center
  padding-top 200px
  .phone_wrap
   width 100%
   text-align center
   img
    width 25px
    height 25px
    vertical-align middle
   input
     width 70%
     margin-left 10px
     vertical-align middle
     padding-bottom 5px
     border-bottom 1px solid #e6e6e6
  .phone_wrap:nth-child(2)
   margin-top 10px
  button
   width 80%
   height 50px
   margin-top 100px
   border-radius 40px
   border: 1px solid transparent
   outline: none;
   color #fff
   background-color #c9dfff
  .btnBlue
    background-color #4e97ff
</style>
