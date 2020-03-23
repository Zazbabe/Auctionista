export default {
    template: `
    <form @submit.prevent = "login"> 

        <input v-model = "userName" type = "text"
        placeholder = "Enter username">
        <input v-model = "passWord" type = "password"
        placeholder = "Enter password">

    </<form>
`,
    data() {
        return {
            userName: '',
            passWord: ''
        }
    },

    methods: {
        login() {
            let users = $this.store.state.users
            for (let index = 0; index < users.length; index++) {
                if (users[index].username == this.userName &&
                    users[index].password == this.passWord) {
                    console.log(users[index])
                    //return users[index]
                } else {
                    console.log("Wrong username or password")
                }
            }
        }
    }



}