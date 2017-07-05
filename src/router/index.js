import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Rank from '@/components/rank/rank'
import Recommended from '@/components/recommended/recommended'
import Search from '@/components/search/search'
import Singer from '@/components/singer/singer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommended'
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/recommended',
      name: 'Recommended',
      component: Recommended
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    }
  ]
})
