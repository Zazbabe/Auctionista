export default {
    template: `
    <form @submit.prevent = "login"> 

        <input v-model = "userName" type = "text"
        placeholder = "Enter username">
        <input v-model = "passWord" type = "password"
        placeholder = "Enter password">
        <button>Login</button>
    </form>
`,
    async created() {
        let users = await fetch('/rest/users')
        users = await users.json()
        this.users = users
    },

    data() {
        users: []
        return {
            userName: '',
            passWord: ''
        }
    },

    methods: {
        login() {
            this.users.forEach(user => {
                if(user.username === this.userName &&
                    user.password === this.passWord) {
                    console.log(user)
                    this.$store.commit('setActiveUser', user)
                    console.log(this.$store.state.activeUser)
                } else if (user.username != this.userName) {
                    console.log("Wrong Username")
                } else {
                    console.log("Wrong Password")
                }

            });
           this.userName = '',
           this.passWord = ''
        }
    }
}