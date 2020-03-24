import listAllAuctions from '../components/auctionSummaryList.js'

export default {
    components: {
        listAllAuctions
    },
    
    template: `
        <div class="main-listing">
            <listAllAuctions />

        </div>
    `,

    async created() {

        let auctions = await fetch('/rest/auctions')
        auctions = await auctions.json()
        console.log(auctions)
  
        this.$store.commit('setAuctions', auctions)
      }
}
