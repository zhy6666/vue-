<template>
  <div class="today_wrap">
    <div class="wrap" >
      <div class="top_content"></div>
      <div class="bottom_content"></div>
      <div class="ceng_content" v-if="showTodayLoan">
        <div class="ceng_top">
          <p>今日出借(万元)</p>
          <div class="compare">
            <div class="compare-top">
              <img src="../../assets/images/compare_up.png">
              <span>1</span>
            </div>
            <span class="jiao">较上次</span>
          </div>
        </div>
        <div class="money">
          <span class="money_fu">￥</span>
          <span class="number">1222222</span>
        </div>
        <div class="ceng_bottom">
          <img src="../../assets/images/time.png">
          <span>最近刷新时间 12:22:33</span>
        </div>
      </div>
      <div class="echart_ceng" v-show="tagType" v-else="!showTodayLoan">
        <div class="ceng_top">
          <p>今日出借(万元)</p>
        </div>
        <div class="echarts"  id="echa"></div>
      </div>

    </div>

    <div class="look">
      <div class="zuori_loan">
        <p class="money" v-html="showTodayLoan?'昨日出借(万元)':'今日出借(万元)'"></p>
        <p class="number">{{2321321312321|numToThousands}}</p>
      </div>
      <div class="nearlySeven">
        <img :src="showTodayLoan?require('../../assets/images/chart@2x.png'):require('../../assets/images/today.png')">
        <p @click="fanzhuan" v-html="showTodayLoan?'查看近七日':'查看今日'" ></p>
      </div>
    </div>
  </div>

</template>

<script>
  import echarts from '../../utils/echarts'
  export default {
    data(){
      return{
        showTodayLoan:true, //默认显示今日出借
        myCharts:null
      }
    },
    props:{
      nearlySeven:Object,
      tagType:Boolean
    },
    mounted(){

      setTimeout(() => {
        this.setEcharts();
      }, 50);

    },


   watch:{
     nearlySeven:function () {
          this.setEcharts()
     }
   },
    methods:{
      numToThousands(num){
        return num ? num.toString().replace(/(\d{1,3})(?=(\d{3})+$)/g,'$1,') : num;
      },
      fanzhuan(){
        this.showTodayLoan=!this.showTodayLoan
        if(!this.showTodayLoan){

          setTimeout(() => {
            this.setEcharts();
          }, 50);
        }
      },
      setEcharts(){
        let option={
          grid:{
            top:30,
            x:20,
            x2:20,
            y2:30
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['20', '21', '22', '23', '24', '25', '26'],

            axisTick: {
              show: false, //是否显示坐标轴刻度
            },
            axisLine: {
              show: false, //是否显示坐标轴轴线
            },
          },
          yAxis: {
            axisTick: {
              show: false, //是否显示坐标轴刻度
            },
            axisLine: {
              show: false, //是否显示坐标轴轴线
            },
            axisLabel:{
              show:false,
              formatter:'{value}'
            }
          },
          series: [{
            data: [11820, 932, 901, 934, 1290, 1330, 132011],
            type: 'line',
            symbolSize:4,
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#ADDDFF'},
                    {offset: 1, color: '#fff'}
                  ]
                )
              }
            },
            itemStyle:{
              normal:{
                color:"#89C3F4",
                width:2,
                label : {
                  show: true
                }
              }
            }
          }]
        }
        var myCharts = echarts.init(document.getElementById('echa'));
        myCharts.resize();
        myCharts.setOption(option);
      }
    },






  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.today_wrap
  background-color #f6f8f9
  .wrap
    width 100%
    height 200px
    position relative
    .top_content
     width 100%
     height 150px
     background-color #5b96ff
    .bottom_content
     width 100%
     height 50px
     background url("../../assets/images/background@2x_02.png") no-repeat bottom
     background-size 100% 50px
    .ceng_content
     position absolute
     top 5px
     left 4%
     right 4%
     width 92%
     height 195px
     background-color #fff
     border-radius 8px
     box-shadow 0 4px 8px 2px rgba(137,174,240,0.15)
     .ceng_top
      width 100%
      height 80px
      padding-left 3%
      padding-right 3%
      background url("../../assets/images/disecopy@2x.png") no-repeat top
      background-size 100% 30px
      p
       float left
       padding-top 14px
       font-family PingFangSC-Regular
       font-size 16px
       color #010E4F
      .compare
       float right
       padding-top 14px
       text-align right
       .compare-top
        padding-bottom 2px
        img
         width 10px
         height 10px
        span
         font-family PingFangSC-Regular
         font-size 16px
         color #010E4F
       .jiao
        font-family PingFangSC-Regular
        font-size 14px
        color #8D92A9
        padding 0
        margin 0
     .money
       width 100%
       text-align center
       .money_fu
        font-family PingFangSC-Medium
        font-size 24px
        color #010E4F
       .number
        font-family CenturyGothic-Bold
        font-size 36px
        color #010E4F
     .ceng_bottom
      width 100%
      margin-top 40px
      text-align center
      img
       width 12px
       height 12px
      span
       font-family PingFangSC-Regular
       font-size 14px
       color #8D92A9
    .echart_ceng
      position absolute
      top 5px
      left 4%
      right 4%
      width 92%
      height 195px
      background-color #fff
      border-radius 8px
      box-shadow 0 4px 8px 2px rgba(137,174,240,0.15)
      .ceng_top
        width 100%
        height 30px
        padding-left 3%
        padding-right 3%
        background url("../../assets/images/disecopy@2x.png") no-repeat top
        background-size 100% 30px
        p
         padding-top 14px


      .echarts
       height 165px
       margin-left 4%
       margin-right 4%

  .look
    display flex
    width 88%
    height 90px
    margin-left 6%
    margin-right 6%
    background-color #fff
    border-bottom-left-radius 8px
    border-bottom-right-radius 8px
    box-shadow 0 4px 8px 2px rgba(137,174,240,0.15);
    .zuori_loan
     height 100%
     width 70%
     position relative
     .money
      font-family PingFangSC-Regular
      font-size 16px
      color #A6A6A6
      padding-left 20px
      padding-top 20px
     .number
      padding-top 10px
      padding-left 19px
      font-family CenturyGothic
      font-size 24px
      color #010E4F

    .zuori_loan:after
     content ''
     display block
     position absolute
     right 0px
     bottom 20px
     width 1px
     height 50px
     border 1px dashed #e6e6e6
    .nearlySeven
     flex 1
     height 100%
     text-align center
     padding-top 20px
     img
      width 70px
      height 34px
     p
      font-family: PingFangSC-Regular
      font-size: 14px
      padding-top 5px
      color: #4787FB




</style>

