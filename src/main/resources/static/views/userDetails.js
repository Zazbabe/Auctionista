export default {
    template: `
    <div>
        <h1>User details</h1>
        <p>Username: {{ user.username }}</p>
    </div>
    `,

    data() {
        return {
            user: {}
        }
    },

    async created() {
        let user = await fetch('/rest/users/' + this.$route.params.id)
        user = await user.json()
        this.user = user
    }
}