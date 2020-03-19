export default {
    template: `
    <ul> 
        <li v-for="user of users"
        :key="user.id"> 
            username: {{ user.username }} <br>
            first name: {{ user.first_name }} <br>
            last name: {{ user.last_name }}
            <hr>
        </li>
     </ul>
    `,
    computed: {
        users() {
            return this.$store.state.users
        }
    },
    methods: {
    }
}