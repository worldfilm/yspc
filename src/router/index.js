Vue.use(Router)
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Dealer from '@/page/Dealer'
import Promotions from '@/page/Promotions'
import Help from '@/page/Help'
import Lottery from '@/page/Lottery'
import BBIN from '@/page/game/BBIN'
import BS from '@/page/game/BS'
import MG from '@/page/game/MG'
import MW from '@/page/game/MW'
import PNG from '@/page/game/PNG'
import PT from '@/page/game/PT'
import QT from '@/page/game/QT'
import SW from '@/page/game/SW'
import Slotmachine from '@/page/Slotmachine'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/Home',
      name: 'Home',
      component: Home
    },{
      path: '/Help',
      name: 'Help',
      component: Help
    },{
      path: '/Dealer',
      name: 'Dealer',
      component: Dealer
    },{
      path: '/Promotions',
      name: 'Promotions',
      component: Promotions
    },{
      path: '/Lottery',
      name: 'Lottery',
      component: Lottery
    },{
      path: '/BBIN',
      name: 'BBIN',
      component: BBIN
    },{
      path: '/BS',
      name: 'BS',
      component: BS
    },{
      path: '/PT',
      name: 'PT',
      component: PT
    },{
      path: '/MG',
      name: 'MG',
      component: MG
    },{
      path: '/MW',
      name: 'MW',
      component: MW
    },{
      path: '/PNG',
      name: 'PNG',
      component: PNG
    },{
      path: '/PT',
      name: 'PT',
      component: PT
    },{
      path: '/QT',
      name: 'QT',
      component: QT
    },{
      path: '/SW',
      name: 'SW',
      component: SW
    },{
      path: '/Slotmachine',
      name: 'Slotmachine',
      component: Slotmachine
    }
  ]
})
