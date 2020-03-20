export default {
    template: `
    <div>
        <h2> Auction id</h2>
    </div>

    `,
    data() {
        return {
            auction: {
                title: '',
                bids: []
            }
        }
    },

    async created() {
        // all dynamic params
        console.log(this.$route.params)

        let auction = await fetch('/rest/auctions/' + this.$route.params.id)
        auction = await auction.json()
        console.log(auction)

        this.auction = auction
    }
}