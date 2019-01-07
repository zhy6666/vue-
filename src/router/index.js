import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/Msite'
import Performance from '../pages/Performance'
import Personnal from '../pages/Personnal'
import Home from '../pages/Home'
import Demo from '../pages/Demo'
import Demo1 from '../pages/Demo1'
import pageSwiper from '../pages/pageSwiper'
import Login from '../pages/Login'
import XQhome from '../xqPages/route'
Vue.use(Router)
export default new Router({
  routes:[
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'/home/msite',
          component:Msite,
          meta:{
            showFooter:true
          }
        },
        {
          path:'/home/performance',
          component:Performance,
          meta:{
            showFooter:true
          }
        },
        {
          path:'/home/personnal',
          component:Personnal,
          meta:{
            showFooter:true
          }
        },
        {
          path: '/home',
          redirect: '/home/msite'
        }
      ]

    },
    {
      path:'/demo',
      component:Demo
    },
    {
      path:'/demo1',
      component:Demo1
    },
    {
      path:'/pageswiper',
      component:pageSwiper
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/',
      redirect:'/login'
    },
    ...XQhome
  ]
})
