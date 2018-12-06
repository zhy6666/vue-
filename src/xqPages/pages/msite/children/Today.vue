<template>
  <div class="today_wrap">
    <common-header :activedId="0"></common-header>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import commonHeader from '../../../components/commonHeader'
  export default {
    data(){
      return{

      }
    },
    created(){
      this.saveFooterCurrent(0)
    },

    methods:{
      ...mapActions(['saveFooterCurrent'])
    },
    components:{
      commonHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
