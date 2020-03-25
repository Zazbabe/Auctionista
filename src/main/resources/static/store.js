import Vue from './libs/vue.esm.browser.js'
import Vuex from './libs/vuex.esm.browser.js'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
       
        users:[],
        auctions:[],
        activeUser: ''
    },
    mutations: {
    // USERS 
        setUsers(state, users) {
            state.users = users
        },
        appendUser(state, user) {
            state.users.push(user)
        },
    // SET ACTIVE USER
        setActiveUser(state, activeUser) {
            state.activeUser = activeUser
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