import Vue from './libs/vue.esm.browser.js'
import VueRouter from './libs/vue-router.esm.browser.js'
import store from '/store.js'

Vue.use(VueRouter)

import home from './views/home.js'
import register from './views/register.js'
import auctionDetails from './views/auctionDetails.js'
import addAuction from './views/addAuction.js'
import notFound from './views/notFound.js'

const router = new VueRouter({
  mode: "history",
  routes: [{
      name: "home",
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
      component: addAuction,
      meta: {
        reguiresAuth: true
      }
    },
    {
      path: "/404",
      alias: "*",
      name: "notfound",
      component: notFound
    }
  ]
});

router.beforeEach((to, from, next) => {
      if (to.matched.some(record => record.meta.reguiresAuth)) {
        // need login
        if (!store.state.user) {
          next({
            name: "home"
          });
        } else {
          next();
        }
      } else {
        next();
      }
    });


export default router;