export default {
    template: `
    <ul> 
        <li v-for="auction of auctions"
        :key="auction.id"
        class="auction-card"> 
            <div class="auction-card-photo" style="background-image: url('https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?cs=srgb&dl=shallow-focus-photography-of-blue-alpine-car-1592384.jpg&fm=jpg');"> </div>  
                Title: {{ auction.title }} <br>
                Ending: {{ auction.end_time }} <br>
                Seller: {{ auction.seller }} 
        </li>
     </ul>
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
            return this.$store.state.auctions
        }
    },
    methods: {}
}


// bids must be joined in to be able to see current bid. 
// Later feature