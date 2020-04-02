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
        <auctionSummaryItem v-for="auction of auctions" :key="auction.id" :auction="auction"/>
     </ul>
     </div>
    `,
   /* async created() {
        {
            let auctions = await fetch('/rest/auctions')
            auctions = await auctions.json()
            console.log(auctions)

            this.$store.commit('setAuctions', auctions)
        }
    },
*/
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