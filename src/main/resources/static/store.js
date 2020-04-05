import Vue from './libs/vue.esm.browser.js'
import Vuex from './libs/vuex.esm.browser.js'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
       
        user: null, // currently logged-in user
        auctions: [],
         bid: [],
         bidder: null,
    },
    mutations: {
        // USER
        setUser(state, user) {
            state.user = user
        },
        // AUCTIONS
        setAuctions(state, auctions) {
            state.auctions = auctions
        },
        appendAuction (state, auction) {
            state.auctions.push(auction)
        },


    //   BIDS

      setBid(state, bid) {
        state.bid = bid
    },

    setBidder(state, bidder) {
        state.bidder = bidder
    },

    appendBid (state, bid) {
        state.bid.push(bid)
    }
  
    }
   // actions: {}
})

export default store