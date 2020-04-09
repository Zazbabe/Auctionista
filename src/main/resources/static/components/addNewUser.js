export default {
    template: `
        <form @submit.prevent = "registerNewUser" class = "registerform">
            <input v-model = "userName" type = "text"
            placeholder = "Enter username">
              <input v-model = "password" type = "password"
              placeholder = "Enter password">
                <input v-model = "firstName" type = "text"
                placeholder = "Enter first name">
                  <input v-model = "lastName" type = "text"
                  placeholder = "Enter last name">
                    <input v-model = "email" type = "text"
                    placeholder = "Enter email">
                      <input v-model = "address" type = "text"
                      placeholder = "Enter address">
                        <input v-model = "phone" type = "text"
                        placeholder = "Enter phonenumber">
            
            
            <button>Register</button>
        
        </form>
    `,
    data() {
        return {
            userName: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            phone: ''
        }
    },
    methods: {
        async registerNewUser() {

            // LÄGG TILL FÖR KORT LÖSEN MM
            let user = {
                username: this.userName,
                password: this.password,
                first_name: this.firstName,
                last_name: this.lastName,
                email: this.email,
                address: this.address,
                phone: this.phone
            }
            let result = await fetch('/rest/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            result = await result.json()
            this.$store.commit('appendUser', result)

            this.userName = ''
            this.password = ''
            this.firstName = ''
            this.lastName = ''
            this.email = ''
            this.address = ''
            this.phone = ''
        }
    }
}