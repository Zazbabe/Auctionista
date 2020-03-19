import Vue from './libs/vue.esm.browser.js'
import Vuex from './libs/vuex.esm.browser.js'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        users:[],
        actions:[]

    },
    mutations: {
    // USERS 
        setUsers(state, users) {
            state.users = users
        },
        
        appendUser(state, user) {
            state.pets.push(user)
        },
        
    // AUCTIONS
        setAuctions(state, auctions) {
            state.actions = auctions
        },
        appendAuction (state, auction) {
            state.auction.push(auction)
        }

    },
   // actions: {}
})