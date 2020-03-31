import Vue from './libs/vue.esm.browser.js'
import VueRouter from './libs/vue-router.esm.browser.js'
Vue.use(VueRouter)

import home from './views/home.js'
import register from './views/register.js'
import auctionDetails from './views/auctionDetails.js'
import addAuction from './views/addAuction.js'

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name:"home",
      path: '/', 
      component: home
    },
    {
      name: "register",
      path: '/register', 
      component: register
    },
    {
      name: "auctionDetails",
      path: '/auctions/:id',
      component: auctionDetails
    },
    {
      name: "addAuction",
      path: '/addAuction',
      component: addAuction
    }
  ]
});