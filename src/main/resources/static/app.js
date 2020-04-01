//import { createNamespacedHelpers } from "./libs/vuex.esm.browser"
import navbarLoginComponent from './components/navbarLoginComponent.js'
import navbarLogoutComponent from './components/navbarLogoutComponent.js'

export default {
    components: {
      navbarLoginComponent,
      navbarLogoutComponent
    },
    template: `
      <div id="app">
        <nav class="navbar-top">
        
          <router-link to="/">Home</router-link>
          <router-link v-if="!isLoggedIn" to="/register">Register</router-link>
          <router-link v-if="isLoggedIn" to="/addAuction" >Add Auction</router-link>

          <navbarLogoutComponent v-if="isLoggedIn" />
          <navbarLoginComponent v-else />
        </nav>
        <div class="top-picture">
          <div class="top-picture-text">AUCTIONISTA</div>
        </div>
  
        <main>
          <router-view />
        </main>

        <footer class="footer"> Made by the dev-team at F.A.S.P </footer> 
      </div>
    `,
    async created() {
        let user = await fetch('/auth/whoami')

        try {
          user = await user.json()
          this.$store.commit('setUser', user)
          console.log('Already logged in as...')
          console.log(user);
        } catch {
          console.log('Client not authenticated');
        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.state.user
        }
    }
}