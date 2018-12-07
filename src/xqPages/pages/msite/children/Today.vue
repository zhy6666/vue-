<template>
  <div class="today_wrap">
    <common-header :activedId="0"></common-header>
    <look-lend-money></look-lend-money>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import commonHeader from '../../../components/commonHeader'
  import LookLendMoney from "../../../components/lookLendMoney";
  export default {
    data(){
      return{

      }
    },
    created(){
      this.saveFooterCurrent(0)
    },

    methods:{
      ...mapActions(['saveFooterCurrent']),
    },
    components:{
      LookLendMoney,
      commonHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
