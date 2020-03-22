export default {
    template: `
    <div>
        <h2>{{auction.title}}</h2>
        <p>Image: {{auction.main_image}}</p>
        <p>Seller: {{auction.seller}}</p>
        <p>Start time: {{auction.start_time}}</p>
        <p>End time: {{auction.end_time}}</p>
        <p>Description: {{auction.description}}</p>
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