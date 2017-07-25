import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import News from '@/pages/News'
import Games from '@/pages/Games'
import Buycar from '@/pages/Buycar'
import GamesDetail from '@/pages/GamesDetail'
import NewsDetail from '@/pages/NewsDetail'

import User from '@/pages/User'
import UserData from '@/pages/user/Data'
import UserGbi from '@/pages/user/Gbi'
import Userwallet from '@/pages/user/Wallet'
import UserRecord from '@/pages/user/Record'
import UserGame from '@/pages/user/Game'
import UserVip from '@/pages/user/Vip'
import UserAddr from '@/pages/user/Addr'
import UserRule from '@/pages/user/Rule'
import UserIssue from '@/pages/user/Issue'
import UserCall from '@/pages/user/Call'

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
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      children: [
        {  path: '', component: UserData },
        {  path: 'gbi',  component: UserGbi},
        {  path: 'wallet', component: Userwallet },
        {  path: 'record',  component: UserRecord},
        {  path: 'game', component: UserGame },
        {  path: 'vip',  component: UserVip},
        {  path: 'addr', component: UserAddr },
        {  path: 'rule',  component: UserRule},
        {  path: 'issue', component: UserIssue },
        {  path: 'call',  component: UserCall},
      ]
    }
  ]
})
