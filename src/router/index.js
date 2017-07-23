import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import News from '@/pages/News'
import Games from '@/pages/Games'
import Buycar from '@/pages/Buycar'
import GamesDetail from '@/pages/GamesDetail'
import NewsDetail from '@/pages/NewsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/games',
      name: 'Games',
      component: Games
    },
    {
      path: '/buycar',
      name: 'Buycar',
      component: Buycar
    },
    {
      path: '/gamesdetail',
      name: 'GamesDetail',
      component: GamesDetail
    },
    {
      path: '/newsdetail',
      name: 'NewsDetail',
      component: NewsDetail
    }
  ]
})
