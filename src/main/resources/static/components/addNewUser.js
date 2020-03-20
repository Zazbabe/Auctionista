export default {
    template: `
        <form @submit.prevent = "registerNewUser">
            <input v-model = "username" type = "text"
            placeholder = "Enter username">
            <button>Register<button>
        
        </form>
    `,
    data() {
        return {
            username: '',
            firstname: '',
            lastname: ''
        }
    },
    methods: {
        async registerNewUser() {
            let user = {
                username = this.username,
                first_name = this.firstname,
                last_name = this.lastname
            }
            let result = await fetch('/rest/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            result = await result.json()
            this.$store.commit('appendUser', result)

            this.userName = ''
        }
    }
}