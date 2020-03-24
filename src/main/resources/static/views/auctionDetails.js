export default {
    template: `
    <div class="auction-details">
        <div class="a-pictures">här är en bild: {{auction.main_image}}</div>
        <h2>{{auction.title}}</h2>
        <p>Seller: {{auction.sellerUsername}}</p>
        <p>Start time: {{auction.start_time}}</p>
        <p>End time: {{auction.end_time}}</p>
        <p class="a-description">Description: {{auction.description}}</p>
    </div>
    `,
    data() {
        return {
            auction: {
                title: '',
                seller: '',
                start_time: '',
                end_time: '',
                description: '',
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