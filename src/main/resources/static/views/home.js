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
        // let bids = await fetch('/rest/current_bid')
        // bids = await bids.json()
        // bids.forEach(bid => {
        //     const auction = auctions.find(auction => auction.id === bid.auction_id)
        //     if(auction) {
        //         auction.highest_bid = bid.max_bid
        //     }
        // })
        // //console.log(bids)
        // //console.log(auctions)

        this.$store.commit('setAuctions', auctions)
      }
}
