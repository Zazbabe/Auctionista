import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import Vuex from 'https://cdn.jsdelivr.net/npm/vuex@3.1.2/dist/vuex.esm.browser.js'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        users:[],
        actions:[]

    },
    mutations: {
        setUsers(state, users) {
            state.users = users
        },
        
        appendUser (state, user) {
            state.pets.push(user)
        }

    },
   // actions: {}
})