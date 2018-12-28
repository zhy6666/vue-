<template>
  <div class="today_wrap">
    <common-header :activedId="0"></common-header>
    <look-lend-money :nearlySeven="nearlySeven" :tagType="true"></look-lend-money>
    <list-item :bottomList="bottomList"></list-item>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import commonHeader from '../../../components/commonHeader'
  import LookLendMoney from "../../../components/lookLendMoney";
  import listItem from "../../../components/listItem";

  export default {
    data(){
      return{
        nearlySeven:{},
        bottomList:[],//首页下边list
      }
    },
    created(){
      this.saveFooterCurrent(0)
      this.battleList()
    },

    methods:{
      ...mapActions(['saveFooterCurrent']),
      battleList() {

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
              res={
                "data": {
                  "code": 200,
                  "data": [
                    {
                      "datas": [
                        {
                          "itemAlias": "累计申请未完成债权",
                          "list": [
                            {
                              "code": "LC060010",
                              "color": "#4E97FF",
                              "name": "累计申请未完成债权",
                              "unit": "元",
                              "value": "66666611"
                            }
                          ]
                        },
                        {
                          "itemAlias": "净流入金额",
                          "list": [
                            {
                              "code": "LC050020",
                              "color": "#4E97FF",
                              "name": "账户净流入金额",
                              "unit": "元",
                              "value": "66666610"
                            },
                            {
                              "code": "LC050030",
                              "color": "#4E97FF",
                              "name": "净流入金额",
                              "unit": "元",
                              "value": "66666609"
                            },
                            {
                              "code": "LC050010",
                              "color": "#4E97FF",
                              "name": "净流入金额",
                              "unit": "元",
                              "value": "66666608"
                            }
                          ]
                        },
                        {
                          "itemAlias": "实际回款金额",
                          "list": [
                            {
                              "code": "RIS010042",
                              "color": "#4E97FF",
                              "name": "应回款金额",
                              "unit": "元",
                              "value": "66666607"
                            },
                            {
                              "code": "RIS010043",
                              "color": "#4E97FF",
                              "name": "实际回款金额",
                              "unit": "元",
                              "value": "66666606"
                            }
                          ]
                        },
                        {
                          "itemAlias": "实际赎回金额",
                          "list": [
                            {
                              "code": "LC030080",
                              "color": "#4E97FF",
                              "name": "实际紧急赎回金额",
                              "unit": "元",
                              "value": "66666605"
                            },
                            {
                              "code": "LC030070",
                              "color": "#4E97FF",
                              "name": "申请紧急赎回金额",
                              "unit": "元",
                              "value": "66666604"
                            },
                            {
                              "code": "LC030060",
                              "color": "#4E97FF",
                              "name": "到期实际赎回金额",
                              "unit": "元",
                              "value": "66666603"
                            },
                            {
                              "code": "LC030050",
                              "color": "#4E97FF",
                              "name": "到期申请赎回金额",
                              "unit": "元",
                              "value": "66666602"
                            },
                            {
                              "code": "LC030020",
                              "color": "#4E97FF",
                              "name": "实际赎回金额",
                              "unit": "元",
                              "value": "66666601"
                            }
                          ]
                        },
                        {
                          "itemAlias": "今日出借",
                          "list": [
                            {
                              "code": "LC010050",
                              "color": "#4E97FF",
                              "name": "今日出借",
                              "unit": "元",
                              "value": "66666600"
                            }
                          ]
                        }
                      ],
                      "displayMode": "16",
                      "filterList": [],
                      "id": "403",
                      "title": "今日"
                    },
                    {
                      "datas": [
                        {
                          "axisX": {
                            "data": [
                              "21",
                              "22",
                              "23",
                              "24",
                              "25",
                              "26",
                              "27"
                            ]
                          },
                          "axisY": {},
                          "series": [
                            {
                              "areaStyle": "0",
                              "axisType": "0",
                              "color": "#4E97FF",
                              "data": [
                                "8869",
                                "2048",
                                "7124",
                                "4524",
                                "1832",
                                "4879",
                                "854"
                              ],
                              "max": "10643",
                              "min": "0",
                              "name": "出借金额",
                              "scale": 0,
                              "symbolShow": "1",
                              "type": "line",
                              "unit": "万元",
                              "valueShow": "1"
                            }
                          ]
                        }
                      ],
                      "displayMode": "31",
                      "filterList": [],
                      "id": "405",
                      "title": "近7日"
                    }
                  ],
                  "msg": "请求成功",
                  "page": {
                    "currentPage": 1,
                    "pageSize": 6,
                    "totalPages": 1,
                    "totalRecords": 2
                  }
                }
              }
              // 请求成功
              if (res.data.code == 200) {
              this.nearlySeven=res.data.data[1].datas[0]
              this.bottomList=res.data.data[0].datas
                console.log(this.bottomList)
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
      commonHeader,
      listItem
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
