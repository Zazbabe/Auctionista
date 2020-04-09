export default {
    template: `
        <form @submit.prevent = "addNewAuction">
              <input required v-model = "title" type = "text"
              placeholder = "Enter title">
                <input required v-model = "description" type = "text-box"
                placeholder = "Enter description">
                  <input required v-model = "reservePrice" type = "text"
                  placeholder = "Enter reserve price">
                    <input required v-model = "startTime" type = "date"
                    placeholder = "Enter start date">
                      <input required v-model = "endTime" type = "date"
                      placeholder = "Enter end date">
                        <input required v-model = "mainImage" type = "text"
                        placeholder = "Enter img-url">
            
            
            <button>Add auction</button><br>
            <p>{{valid}}</p>
        
        </form>
    `,
    data() {
        return {
            // lägg till att hitta inloggad
            seller: '',
            title: '',
            description: '',
            reservePrice: '',
            startTime: '',
            endTime: '',
            mainImage: '',
            valid: ""
        }
    },
    methods: {
        async addNewAuction() {

            // LÄGG TILL FÖR KORT LÖSEN MM
            let auction = {
                seller: this.$store.state.user.id,
                title: this.title,
                description: this.description,
                reserve_price: this.reservePrice,
                start_time: this.startTime,
                end_time: this.endTime,
                main_image: this.mainImage
            }
            if(Date.parse(this.startTime && this.endTime) > Date.now ()){
            let result = await fetch('/rest/auctions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(auction)
            })
            result = await result.json()
            this.$store.commit('appendAuction', result)
        }else {
              return this.valid = "invalid Date, try again"
        }
//clearing the fields
            this.seller = ''
            this.title = ''
            this.description = ''
            this.reservePrice = ''
            this.startTime = ''
            this.endTime = ''
            this.mainImage = ''
        }
        }
    }
