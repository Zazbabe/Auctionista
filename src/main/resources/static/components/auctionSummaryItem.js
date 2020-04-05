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
            @click="showAuctionDetails(auction.id)"
            class="auction-card">
                <div class="auction-card-photo" :style="{'background-image': 'url(' + auction.main_image + ')'}">
                </div>
                    Title: {{ auction.title }} <br>
                    Ending: {{ auction.end_time }} <br>
                    Highest bid: {{ auction.highestBid }} <br>
                    Seller: {{ auction.sellerUsername }} <br/>
                   
                   
        </li>

        <addNewBid :auction="auction" v-if="this.$store.state.user && this.$store.state.user.id !== auction.seller"/>
                   

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
