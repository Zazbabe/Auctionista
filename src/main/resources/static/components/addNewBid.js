
export default {
    props: ['auction'],
   
    template: `
   

  <form @submit.prevent = "addNewBid">
  <!-- <label>Bid here: </label> -->
  <input v-model = "bid"type="int" required placeholder="add higher bid.." input 
  oninvalid="this.setCustomValidity('Please enter a valid Bid')" >
  <button>Add bid</button><br>
  <span>{{ valid }}</span>
  </form>
  <!-- <p>You bid: {{bid.bid}}</p> -->
  `,

data() {
        
        return {

        bid: '',
        bidder: '',
        bid_time: '',
        valid: ""
      

        }
    },



    methods: {

        async addNewBid() {
            let NewBid = {
                bid: this.bid,
                bidder: this.$store.state.user.id,
                bid_time: new Date(),
                auction_id: this.auction.id  
                
                
            }
            if (this.bid <= this.auction.highestBid) {
                return this.valid = "***Error*** invalid bid: add higher bid than current"
       
            }else {
        
             this.auction.highestBid = this.bid
             this.valid = "Successful you bid at: "+ new Date()
           
            }

            let result = await fetch('/rest/bids', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(NewBid)
            })
            result = await result.json()

            
            
            // this.bid = ''
            // this.bidder = ''
            // this.bid_time = ''
         

        },

      



        



   



    }


            
              





}



