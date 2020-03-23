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
          <login @click="showLogin"></login>
        </nav>
        <div class="top-picture">
          <div class="top-picture-text">AUCTIONISTA</div>
        </div>
  
        <main>
          <router-view />
        </main>

        <footer> Made from hard work</footer> 
      </div>
    `,
    methods: {
      showLogin() {


      }


    }
}