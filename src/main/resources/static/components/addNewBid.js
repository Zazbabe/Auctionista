
export default {
    props: ['auction'],
   
    template: `
   

  <form @submit.prevent = "addNewBid">
  <label>Bid here: </label>
  <input v-model = "bid" type="double" placeholder="add higher bid.."input>
  <button>Add bid</button>
  </form>
  <!-- <p>You bid: {{bid.bid}}</p> -->
  `,

data() {



    

        
        return {

        bid: '',
        bidder: '',
        bid_time: ''
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

            let result = await fetch('/rest/bids', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(NewBid)
            })
            result = await result.json()

            this.auction.highestBid = this.bid
            
            this.bid = ''
            this.bidder = ''
            this.bid_time = ''
         

        },

      



        



   



    }


            
              





}



