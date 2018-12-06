<template>
    <div>我的</div>
</template>

<script>
  import {mapActions}from 'vuex'
  export default {
    created(){
      this.saveFooterCurrent(2)
    },
    methods:{
      ...mapActions(['saveFooterCurrent'])
    }
  }
</script>

<style scoped>

</style>
