import getUsersButton from '../components/getUsersButton.js'
import userList from '../components/userList.js'
// import addNewUser from '../components/addNewUser.js'
import listAllAuctions from '../components/auctionSummaryList.js'

export default {
    components: {
        //getUsersButton,
       // userList,
        //addNewUser,
        listAllAuctions
    },
    
    template: `
        <div class="main-listing">
            <listAllAuctions />

        </div>
    `,

    async created() {

        let auctions = await fetch('/rest/auctions')
        auctions = await auctions.json()
        console.log(auctions)
  
        this.$store.commit('setAuctions', auctions)
      }
}
