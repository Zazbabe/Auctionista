export default {
    template: `
    <ul> 
        <li v-for="auction of auctions"
        :key="auction.id"> 
            <div style = "background-image": url( {{ auction.main_image }})> 
            title: {{ auction.title }} <br>
            ending: {{ auction.end_time }} <br>
            seller: {{ auction.seller }} 
            <hr>
        </li>
     </ul>
    `,
    computed: {
        auctions() {
            return this.$store.state.auctions
        }
    },
    methods: {
    }
}


// bids must be joined in to be able to see current bid. 
// Later feature