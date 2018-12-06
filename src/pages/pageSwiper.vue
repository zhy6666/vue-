 <template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in newArr" ref="mtItem">
        <img src="../assets/images/left@2x.png"  class="img_left" @click="prev"/>
        <img src="../assets/images/left@2x.png"  class="img_right" @click="next"/>
        <ul>
          <li v-for="(item1,index1) in item">
            <div class="one">
              <div class="one_top">
                <span>{{item1.value}}</span>
              </div>
              <div class="one_bottom">
                <span class="jsl">{{item1.name}}</span>
                <span class="pencil">{{item1.unit}}</span></div>
              <div class="line"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
    export default {
    data(){
      return{
        datas:[{value:'10',name:'哈哈',unit:'笔'},{value:'10',name:'哈哈',unit:'笔'},{value:'10',name:'哈哈',unit:'笔'},{value:'10',name:'哈哈',unit:'笔'},{value:'10',name:'哈哈',unit:'笔'},{value:'10',name:'哈哈',unit:'笔'},{value:'10',name:'哈哈',unit:'笔'},{value:'10',name:'哈哈',unit:'笔'},{value:'10',name:'哈哈',unit:'笔'}],
        newArr:[],
      }
    },
    mounted(){
      var mySwiper = new Swiper('.swiper-container', {
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
        autoplayDisableOnInteraction: false,
        pagination: {
          el: '.swiper-pagination',
        },
      })
      this.newArr=this.chunk(this.datas,3)
    },
    methods:{
      chunk(arr, num){
        num = num*1 || 1;
        var ret = [];
        arr.forEach(function(item, i){
          if(i % num === 0){
            ret.push([]);
          }
          ret[ret.length - 1].push(item);
        });
        return ret;
      },
      prev(){
      },
      next(){
      }
    }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.swiper-container
 width 100%
 height 100%
 .swiper-wrapper
  .swiper-slide
   width 100%
   height 100px
   .img_left
    width 25px
    position absolute
    top 30%
   .img_right
    width 25px
    position absolute
    right 0
    top 30%
    transform rotateZ(180deg)
   ul
    font-size 0
    margin 0
    padding 0
    height 95px
    -webkit-overflow-scrolling touch
    li
      float left
      width 33.3%
      .one
        text-align center
        position relative
        height 96px
        .one_top
          padding-top 22px
          span
            font-family DINCondensed-Bold
            font-size 38px
            color #4E97FF
        .one_bottom
          .jsl
            ont-family PingFangSC-Light
            font-size 14px
            color #29354D
            letter-spacing 0
            text-align center
          .pencil
            font-family PingFangSC-Light
            font-size 10px
            color #909090
            letter-spacing 0
            margin-left 4px
        .line
          width 1px
          position absolute
          right 0px
          top 25px
          bottom 16px
          background #F1F3F8

</style>
