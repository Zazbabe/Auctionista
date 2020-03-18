export default {
    template: `
        <button @click = "getUsers"> Fetch Users </button>
    `,
    methods: {
        async getUsers() {
            let users = await fetch ('/rest/users')
            users = await users.json()
            console.log(users)
        }
    }
}