import auctionSummaryItem from './auctionSummaryItem.js'

export default {
    components: {
        auctionSummaryItem
    },
    data(){
     return {
         search:"",
     }

    },
   
   template: ` 
   <div>
   <div class="search-wrapper">
        <label>Search title:</label>
    <input type="text" v-model="search" placeholder="Search title.."/>
    </div>
    <ul>
        <auctionSummaryItem v-for="auction of auctions" :key="auction.id" :auction="auction"
        v-if="Date.now() >= Date.parse(auction.start_time) && Date.now() < Date.parse(auction.end_time)" />
     </ul>
     </div>
    `,
   async created() {
            //console.log('Adding setInterval...')
            this.fetchInterval = setInterval(async () => {
                let auction_ids = this.$store.state.auctions.map(auction => auction.id.toString())
                let auctions_query_string = auction_ids.join(',')
                let bids = await fetch('/rest/bids/highest?auctions=' + auctions_query_string)
                bids = await bids.json()
                //console.log('bids...', bids)
            	this.$store.commit('updateHighestBids', bids)
            }, 1000)
    },
    beforeDestroy() {
        //console.log('Removing setInterval...')
        clearInterval(this.fetchInterval)
    },
    computed: {
        auctions() {
            return this.$store.state.auctions.filter((auction) => {
                return auction.title.toLowerCase().match(this.search.toLowerCase());
            })
        }

        
    },
    methods: {

    }
}


// bids must be joined in to be able to see current bid. 
// Later feature