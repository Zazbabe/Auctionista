export default {
    template: `
    <div class="auction-details">
        <div class="auction-main-picture" :style="{'background-image': 'url(' + auction.main_image + ')'}">
        </div>
        <div>
        <h2>{{auction.title}}</h2>
        <p>Seller: {{auction.sellerUsername}}</p>
        <p>Start time: {{auction.start_time}}</p>
        <p>End time: {{auction.end_time}}</p>
        <p>Highest bid: {{ auction.highestBid }}</p>
        <p class="a-description">Description: {{auction.description}}</p>
        <newBid :auction="auction" v-if="this.$store.state.user && this.$store.state.user.id !== auction.seller"/>
       
        </div>
    </div>
    `,
    data() {
        return {


            
            auction: {
                title: '',
                seller: '',
                start_time: '',
                end_time: '',
                highestBid: '',
                description: ''
            
            }
        }
    },




 





    async created() {
        // all dynamic params
        console.log(this.$route.params)

        let auction = await fetch('/rest/auctions/' + this.$route.params.id)
        auction = await auction.json()
      
       this.auction = auction

     },



}