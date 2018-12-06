 <template>
    <div class="performance_wrap">
       <div class="title_wrap"><span>全国</span></div>
       <ul>
        <li v-for="(item,index) in datas" :key="index" @click="qiehuan(index)">
          <div class="item_wrap">
            <span class="text">{{item}}</span>
            <span class="line" v-show='currentIndex==index'></span>
          </div>
        </li>
      </ul>
       <div class="echart1">
          <div class="echat_title">
            <span>任务达成</span>
            <img src="../assets/images/xiala.png">
            <img src="../assets/images/biaoge.png">
          </div>
          <div class="line"></div>
          <div id="echart_tu" style="height:200px"></div>
       </div>
    </div>
</template>

<script>
  import echarts from 'echarts'
    export default {
    data(){
      return{
        datas:['中国','北京','吉林','沈阳'],
        currentIndex:0
      }
    },
      mounted(){
         var myChart=document.getElementById('echart_tu');
         var resizeWorldMapContainer = function () {
           myChart.style.width = window.innerWidth+'px';
           // myChart.style.height = window.innerHeight+'px';
         };
         resizeWorldMapContainer();

         var myChartTu = echarts.init(myChart);
         var option = {
           title: {
             text: 'ECharts 入门示例'
           },
           tooltip: {},
           legend: {
             data:['销量'],
             height: myChart.style.height,
             width: myChart.style.width
           },
           xAxis: {
             data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
             axisLabel:{
               interval:0
             }
           },
           yAxis: {},
           series: [{
             name: '销量',
             type: 'bar',
             data: [5, 20, 36, 10, 10, 20]
           }],
         };
         // 使用刚指定的配置项和数据显示图表。
         myChartTu.setOption(option);
         window.onresize = function () {
           //重置容器高宽
           resizeWorldMapContainer();
           myChartTu.resize();
         };

       },
      methods:{
        qiehuan(index){
          this.currentIndex=index

        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 .performance_wrap
  position absolute
  top 0
  left 0
  right 0
  bottom 54px
  .title_wrap
   width 100%
   height 40px
   line-height 40px
   text-align center
   border-bottom 1px solid #e4e4e4
  ul
   list-style none
   padding 0
   margin 0
   display flex
   li
     flex 1
     text-align center
     .item_wrap
       .text
         display block
         height 40px
         line-height 40px
       .line
         display block
         width 20px
         margin-left 38px
         height 2px
         background-color black
  .echart1
   width 100%
   .echat_title
    width 100%
    height 50px
    line-height 50px
    span
     font-size 18px
     padding-left 10px
    img
     float right
     width 25px
     height 25px
     margin-top 12px
     margin-right 10px

   .line
    width 100%
    height 1px
    background-color #e6e6e6
</style>
