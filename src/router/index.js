Vue.use(Router)
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import GameList from '@/page/GameList'
import Promotions from '@/page/Promotions'
import Help from '@/page/Help'

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
      path: '/GameList',
      name: 'GameList',
      component: GameList
    },{
      path: '/Promotions',
      name: 'Promotions',
      component: Promotions
    }
  ]
})
