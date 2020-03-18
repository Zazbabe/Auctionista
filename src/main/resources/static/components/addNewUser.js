export default {
    template: `
        <form @submit.prevent = "registerNewUser">
            <input type = "text"
            placeholder = "Enter username">
            <button>Register<button>
        
        </form>
    `,
    data() {
        return {
            userName: '',
            firstName: '',
            lastName: ''
        }
    },
    methods: {
        async registerNewUser() {
            let user = {
                username = this.userName,
                first_name = this.firstName,
                last_name = this.lastName
            }
            let result = await fetch('/rest/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })

            return = await result.json()
        }

    }

}