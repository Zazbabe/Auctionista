import Vue from './libs/vue.esm.browser.js'
import {store} from './store.js'
import {router} from './router.js'
import app from './app.js'

new Vue({
    store,
    router,
    render: h => h(app)
}).$mount('#app');

// USERS
async function getAllUsers() {
    let users = await fetch('/rest/users')
    users = await users.json()
    console.log(users)
}

async function getUserById(id) {
    let user = await fetch('/rest/users' + id)
    user = await user.json()
    console.log(user)
}

async function createNewUser(user) {
    let userFromServer = await fetch('/rest/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    userFromServer = await userFromServer.json()
}


// usern under är bara test för createUser
const user = {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    phone: ''
}

// AUCTIONS
async function getAllAuctions() {
    let auctions = await fetch('/rest/auctions')
    auctions = await auctions.json()
    console.log(auctions)
}

async function getAuctionById(id) {
    let auction = await fetch('/rest/auctions' + id)
    auction = await auction.json()
    console.log(auction)
}

// async function getAuctionByTitle(title) {
//     let auction = await fetch('/rest/auctions' + title)
//     auction = await auction.json()
//     console.log(auction)

/*
async function createNewAuction(auction) {
    let auctionFromServer = await fetch('/rest/auctions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(auction)
    })
    auctionFromServer = await auctionFromServer.json()
}

// FUNCTIONS
    async function login(username, password) {
        let users = $this.store.state.users
        for (let index = 0; index < users.length; index++) {
            if(users[index].username == username &&
                users[index].password == password) {
                    return users[index]
                }
                else {
                    console.log("Wrong username or password")
                }
        }
        
    }
*/