export default {
    template: `
    <div class="auction-details">
        <div class="a-pictures">här är en bild: {{auction.main_image}}</div>
        <h2>{{auction.title}}</h2>
        <p>Säljare: {{auction.seller}}</p>
        <p>Startade: {{auction.start_time}}</p>
        <p>Slutar: {{auction.end_time}}</p>
        <p class="a-description">Beskrivnig: {{auction.description}}</p>
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