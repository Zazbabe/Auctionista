import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import {
    store
} from './store.js'
import {
    router
} from './router.js'
import app from './app.js'

new Vue({
    store,
    router,
    render: h => h(app)
}).$mount('#app');


async function getAllUsers() {
    let users = await fetch('/rest/users')
    users = await users.json()
    console.log(users)
}

getAllUsers()

async function getUserById(id) {
    let user = await fetch('/rest/users' + id)
    user = await user.json()
    console.log(user)
}

getUserById(1)

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