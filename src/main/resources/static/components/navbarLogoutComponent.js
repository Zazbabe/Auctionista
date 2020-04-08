export default {
    template: `
    <div class="navbarLogoutComponent">
        <span>Logged in as: <strong>{{ $store.state.user.username }}</strong></span>
        <button @click="doLogout">Logout</button>
    </div>
`,
    methods: {
        doLogout() {
            fetch('/logout')
            // reset user on logout
            this.$store.commit('setUser', null)
        }
    }
}