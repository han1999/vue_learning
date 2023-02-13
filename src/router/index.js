import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Goods from '@/components/Goods'
import Comment from '@/components/Comment'
import Seller from '@/components/Seller'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: 'Comment',
      name: 'Comment',
      component: Comment
    },
    {
      path: 'Seller',
      name: 'Seller',
      component: Seller
    }
  ]
})
