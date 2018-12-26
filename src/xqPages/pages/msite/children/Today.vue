<template>
  <div class="today_wrap">
    <common-header :activedId="0"></common-header>
    <look-lend-money :nearlySeven="nearlySeven" :tagType="true"></look-lend-money>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import commonHeader from '../../../components/commonHeader'
  import LookLendMoney from "../../../components/lookLendMoney";
  export default {
    data(){
      return{
        nearlySeven:{}
      }
    },
    created(){
      this.saveFooterCurrent(0)
      this.battleList()
    },

    methods:{
      ...mapActions(['saveFooterCurrent']),
      battleList(){

        //订阅接口
        this.$ajax({
          method: 'post',
          url: '/saasbi/cockpit/xiangqian/list',
          dataType: 'json',
          headers: { 'Content-Type': 'application/json;charset=UTF-8' },
          data: JSON.stringify({
            token: "06EA5CD81FB14A869D25628DF4D72CD9",
            subjectId: '403',
            // subjectId: this.timeBattleHomeNavs[0].id,
            masterNo: '04'
          })
        })
        //type 0 第一次进入  1刷新   2循环器
          .then(res => {

              // 请求成功
              if (res.data.code == 200) {
              this.nearlySeven=res.data.data[1].datas[0]

              }



            },)
          .catch(err => {

            // 请求失败
            console.log(err)

          })
      }
    },
    components:{
      LookLendMoney,
      commonHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
