export default {
    props: [
        'auction'
    ],
    template: `
        <li
            @click="showAuctionDetails(auction.id)"
            class="auction-card">
                <div class="auction-card-photo" :style="{'background-image': 'url(' + auction.main_image + ')'}">
                </div>
                    Title: {{ auction.title }} <br>
                    Ending: {{ auction.end_time }} <br>
                    Seller: {{ auction.sellerUsername }} <br/>
                    Highest bid: {{auction.highest_bid || '-'}}
        </li>
    `,
    computed: {
        auctions() {
            return this.$store.state.auctions
        }
    },
    methods: {
        showAuctionDetails(id) {
            this.$router.push('/auctions/' + id)
        }
    }
}
