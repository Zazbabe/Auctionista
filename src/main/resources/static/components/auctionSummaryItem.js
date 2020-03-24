export default {
    props: [
        'id'
    ],
    template: `
    <div "> 
        <textarea> 
            {{ auctions[{{ id }}].description }}
        </textarea>
     </div>
    `,
    computed: {
        auctions() {
            return this.$store.state.auctions
        }
    },
    methods: {
    }
}
