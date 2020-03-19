//import { createNamespacedHelpers } from "./libs/vuex.esm.browser"

export default {
    template: `
      <div id="app">
        <nav class="navbar-top">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </nav>
  
        <main>
          <router-view />
        </main>
      </div>
    `,
    async created() {

      let auctions = await fetch('/rest/auctions')
      auctions = await auctions.json()
      console.log(auctions)

      this.$store.commit('setAuctions', auctions)


    }

}