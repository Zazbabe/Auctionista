
export default {
    props: ['auction'],
   
    template: `
   

  <form @submit.prevent = "addNewBid">

  <input v-model = "bid" type="text" required placeholder="add higher bid..">
  <button>Add bid</button><br>
  <span>{{ valid }}</span>
  </form>
 
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
            if (isNaN(this.bid) || this.bid <= this.auction.highestBid) {
                return this.valid = "***Error*** invalid bid: add higher bid than current"
       
            }else {
        
             this.auction.highestBid = this.bid
             this.valid = "Successful you bid at: "+ new Date().toLocaleString()
           
            }

            let result = await fetch('/rest/bids', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(NewBid)
            })
            result = await result.json()

            
            
            this.bid = ''
            this.bidder = ''
            this.bid_time = ''
         

        },

      



        



   



    }


            
              





}



