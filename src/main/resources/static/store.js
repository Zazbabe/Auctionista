import Vue from './libs/vue.esm.browser.js'
import Vuex from './libs/vuex.esm.browser.js'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
       
        user: null, // currently logged-in user
        auctions: []
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
        }

    },
   // actions: {}
})