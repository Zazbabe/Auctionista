import addNewBid from './addNewBid.js'

export default {
    components:{
        addNewBid

    },
    props: [
        'auction'
    ],
    template: `
    <div>
        <li
            @click.self="showAuctionDetails(auction.id)"
            class="auction-card">
                <div @click.self="showAuctionDetails(auction.id)" class="auction-card-photo" :style="{'background-image': 'url(' + auction.main_image + ')'}">
                </div>
                    Title: {{ auction.title }} <br>
                    Ending: {{ auction.end_time }} <br>
                    Highest bid: {{ auction.highestBid }} <br>
                    Seller: {{ auction.sellerUsername }} <br/>
                   
            <addNewBid :auction="auction" v-if="Date.parse(this.auction.end_time) > Date.now() && this.$store.state.user && this.$store.state.user.id !== auction.seller"/>
            <span v-else-if= "Date.parse(this.auction.end_time) < Date.now()">***Auction expired***</span>
        </li>
        </div>
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
