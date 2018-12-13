import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import filters from './utils/filters'
//组件
import todaySituation from './components/todaySituation'
Vue.component('today_situation',todaySituation)
//引入echart
import echarts from 'echarts'
Vue.use(echarts)
import 'echarts/lib/chart/bar'
//引入mint-ui
import MintUi from 'mint-ui'
import {Swipe,SwipeItem} from 'mint-ui'
Vue.use(MintUi)
Vue.component('my-swipe',Swipe)
Vue.component('my-swipe-item',SwipeItem)

//注册全局过滤器
for (let key in filters){
  Vue.filter(key,filters[key])
}


new Vue({
  el:'#app',
  components:{App},
  template:'<App/>',
  router,
  store
})

