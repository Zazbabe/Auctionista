export default {
    template: `
    <div>
        <form @submit.prevent = "registerNewUser" class = "registerform">
            <label>Username: <input v-model="username" type="text" placeholder="Enter username" required></label><br/>
            <label>Password: <input v-model="password" type="password" placeholder="Enter password" required></label><br/>
            <label>First name: <input v-model="firstName" type="text" placeholder="Enter first name" required></label><br/>
            <label>Last name: <input v-model="lastName" type="text" placeholder="Enter last name" required></label><br/>
            <label>Email: <input v-model="email" type="email" placeholder="Enter email" required></label><br/>
            <label>Address: <input v-model="address" type="text" placeholder="Enter address" required></label><br/>
            <label>Phone: <input v-model="phone" type="text" placeholder="Enter phonenumber" required></label><br/>
            <button>Register</button>
        </form>
    </div>
    `,
    //         <p v-if="registrationError" id="registrationErrorMessage">There was an error during registration, please try again!</p>

    data() {
        return {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            phone: '',
            registrationError: false
        }
    },
    methods: {
        async registerNewUser() {
            this.registrationError = false

            // LÄGG TILL FÖR KORT LÖSEN MM
            let user = {
                username: this.username,
                password: this.password,
                first_name: this.firstName,
                last_name: this.lastName,
                email: this.email,
                address: this.address,
                phone: this.phone
            }

            let result = await fetch('/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })

            try {
                result = await result.json()
            }
            catch(e) {
                this.registrationError = true
                console.log(e)
            }

            // Login new user...

            const credentials = 'username=' +
              encodeURIComponent(this.username)
              + '&password=' +
              encodeURIComponent(this.password)

              let response = await fetch("/login", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: credentials
              });

              if(response.url.includes('error')) {
                console.log('Wrong username/password')
                alert("There was an error during registration, please try again!");
              } else {
                    console.log("Logged in successfully!")
                    this.userName = ''
                    this.passWord = ''

                    let user = await fetch('/auth/whoami')
                    user = await user.json()
                    console.log(user)
                    this.$store.commit('setUser', user)

                    // clear form-data
                    this.username = ''
                    this.password = ''
                    this.firstName = ''
                    this.lastName = ''
                    this.email = ''
                    this.address = ''
                    this.phone = ''


                    // redirect logged-in user to front-page...
                    this.$router.push('/')
            }
        }
    }
}