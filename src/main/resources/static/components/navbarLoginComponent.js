export default {
    template: `
    <form @submit.prevent = "doLogin">
        <fieldset>
            <legend>Login</legend>
            <input v-model="username" type="text" required
                placeholder = "Enter username">
            <input v-model="password" type="password" required
                placeholder = "Enter password">
            <button>Login</button>
            <span v-if="errorLogin" id="errorLoginMessage">Wrong username or password!</span>
        </fieldset>
    </form>
`,
    async created() {
        /*
        let users = await fetch('/rest/users')
        users = await users.json()
        this.users = users
        */
    },

    data() {
        /*users: []*/
        return {
            username: '',
            password: '',
            errorLogin: false
        }
    },

    methods: {
        async doLogin() {
            this.errorLogin = false
            const credentials = 'username=' +
              encodeURIComponent(this.username)
              + '&password=' +
              encodeURIComponent(this.password)

              console.log(credentials);

              let response = await fetch("/login", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: credentials
              });

              if(response.url.includes('error')) {
                console.log('Wrong username/password');
                this.errorLogin = true
              } else {
                console.log("Logged in successfully!")
                this.userName = ''
                this.passWord = ''

                let user = await fetch('/auth/whoami')
                user = await user.json()
                console.log(user)
                this.$store.commit('setUser', user)
                this.$router.push('/')
              }
        }
    }
}