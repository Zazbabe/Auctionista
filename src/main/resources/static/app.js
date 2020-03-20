//import { createNamespacedHelpers } from "./libs/vuex.esm.browser"

export default {
    template: `
      <div id="app">
        <nav class="navbar-top">
        
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </nav>
        <div class="top-picture">
          <div class="top-picture-text">AUCTIONISTA</div>
        </div>
  
        <main>
          <router-view />
        </main>
      </div>
    `,
}