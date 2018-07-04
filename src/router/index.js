Vue.use(Router)
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Dealer from '@/page/Dealer'
import Promotions from '@/page/Promotions'
import Help from '@/page/Help'
import Lottery from '@/page/Lottery'
import PT from '@/page/PT'
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
      path: '/PT',
      name: 'PT',
      component: PT
    },{
      path: '/Slotmachine',
      name: 'Slotmachine',
      component: Slotmachine
    }
  ]
})
