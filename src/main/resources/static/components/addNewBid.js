export default {
    template: `
  <form @submit.prevent = "addNewBid">
  <label>Bid here: </label>
  <input type="bid" placeholder="add higher bid.."input>
  <button>Add bid</button>
  </form>
  <p>You bid: {{bid.bid}}</p>
  `,



}