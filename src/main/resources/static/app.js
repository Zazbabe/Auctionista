//import { createNamespacedHelpers } from "./libs/vuex.esm.browser"
import login from './components/login.js'

export default {
    components: {
      login
    },
    template: `
      <div id="app">
        <nav class="navbar-top">
        
          <router-link to="/">Home</router-link>
          <router-link to="/register">Register</router-link>
          <router-link to="/addAuction">Add Auction</router-link>

          <login @click="showLogin"></login>
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
    methods: {
      showLogin() {


      }


    }
}