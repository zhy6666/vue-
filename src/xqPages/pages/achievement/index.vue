<template>
    <div>业绩</div>
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

<style scoped>

</style>
