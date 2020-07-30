
export default {
    props: {
        img1: {
            
            required: true,
        },
        img2: {
            
            required: false,
        },


        
},
    template: `
    
        <div class="lightbox">
        <div class="auction-main-picture" :style="{'background-image': 'url(' + displayPic + ')'}">
        </div>

        <div @click.self.prevent="isDisplayPic(img1)" class="auction-second-picture" :style="{'background-image': 'url(' + img1 + ')'}">
        </div>

        <div div @click.self.prevent="isDisplayPic(img2)" class="auction-second-picture" :style="{'background-image': 'url(' + img2 + ')'}">
        </div>

        </div>


    `,

    data() {
        return {
            displayPic: this.img1
        }

    },

    methods: {
        isDisplayPic(img) {
            this.displayPic = img
        }
    },

    async created() {


        
        // all dynamic params
        //console.log(this.$route.params)

        let auction = await fetch('/rest/auctions/' + this.$route.params.id)
        auction = await auction.json()
      
       this.auction = auction
       let displayPic = this.img1
       this.displayPic = displayPic 

       // console.log('Adding setInterval...')
      
     },

     beforeDestroy() {
        //console.log("Removing setInterval...")
        clearInterval(this.fetchInterval)
     }}