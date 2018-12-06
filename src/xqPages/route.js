const msite = r => require.ensure([], () => r(require('@/xqPages/pages/msite/Msite')), 'Msite');
const today = r => require.ensure([], () => r(require('@/xqPages/pages/msite/children/Today')), 'Today');
const month = r => require.ensure([], () => r(require('@/xqPages/pages/msite/children/Month')), 'Month');

const index = r => require.ensure([], () => r(require('@/xqPages/pages/achievement/index')), 'index');
const achievementMonth = r => require.ensure([], () => r(require('@/xqPages/pages/achievement/achievementMonth')), 'achievementMonth');
const achievementToday = r => require.ensure([], () => r(require('@/xqPages/pages/achievement/achievementToday')), 'achievementToday');
const personal = r => require.ensure([], () => r(require('@/xqPages/pages/Personal')), 'Personal');

export default [
  {
    path:'/msite',
    component:msite,
    redirect:'/msite/today',
    children:[
      {
        path:'/msite/today',
        component:today,
        meta:{
          showFooter:true
        }
      },
      {
        path:'/msite/month',
        component:month,
        meta:{
          showFooter:true
        }
      },
      {
        path:'/msite/history',
        component:history,
        meta:{
          showFooter:true
        }
      }
    ]
  },
  {
    path:'/achievement',
    component:index,
    redirect:'/achievement/today',
    children:[
      {
        path:'/achievement/today',
        component:achievementToday,
        meta:{
          showFooter:true
        }
      },
      {
        path:'/achievement/month',
        component:achievementMonth,
        meta:{
          showFooter:true
        }
      },
    ]
  },
  {
    path:'/personal',
    component:personal,
    meta:{
      showFooter:true
    }
  }
]
