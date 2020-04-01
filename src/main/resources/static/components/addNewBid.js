export default {
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
        // lägg till att hitta inloggad
        bid: '',
        bidder: '',
        bid_time: '',
        auction_id: '',
    }
    },

    methods: {
        async addNewBid() {

            // LÄGG TILL FÖR KORT LÖSEN MM
            let NewBid = {
                bid: this.bid,
                bidder: this.$store.state.user.id,
                bid_time: this.bid_time,
                // auction_id: this.$store.state.auctions.id

            }
            let result = await fetch('/rest/bids', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(NewBid)
            })
            result = await result.json()
            this.$store.commit('appendBid', result)

        }
            
              





}


}
