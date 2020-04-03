import newBid from  '../components/addNewBid.js'


export default {
    components: {
        newBid
    },
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
        <newBid :auction="auction" v-if="not_owner"/>
       
        </div>
    </div>
    `,
    data() {
        return {

            not_owner: 'true',
            
            auction: {
                
                title: '',
                seller: '',
                start_time: '',
                end_time: '',
                highestBid: '',
                description: '',
                
              
            
            }
        }
    },


        computed: {

        

        check_owner: function() {


            if(this.$store.state.user.id != null){

            try {

                    
                            if(this.auction.seller == this.$store.state.user.id) {
                    return this.not_owner = false;
                }}

            catch(error) {
                console.error(error)

            };}
            return this.not_owner = true
        }
  

        }
        
    ,



 





    async created() {


        
        // all dynamic params
        console.log(this.$route.params)

        let auction = await fetch('/rest/auctions/' + this.$route.params.id)
        auction = await auction.json()
      
       this.auction = auction

     },

      updated() {

        this.check_owner;

       
       console.log(this.auction.seller)
       console.log(this.$store.state.user.id)
     },


     beforeUpdate() {


        this.check_owner;

        

       
        console.log(this.auction.seller)
        console.log(this.$store.state.user.id)
      }


}