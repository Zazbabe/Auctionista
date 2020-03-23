export default {
    template: `
    <form @submit.prevent = "login"> 

        <input v-model = "userName" type = "text"
        placeholder = "Enter username">
        <input v-model = "passWord" type = "password"
        @keyup.enter.prevent placeholder = "Enter password">
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
                } else {
                    console.log("Wrong password")
                }

            });
           // this.userName = '',
           // this.passWord = ''
        }
    },
}