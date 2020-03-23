import newUser from '../components/addNewUser.js'
import login from '../components/login.js'

export default {
    components: {
        newUser,
        login
    },
    template: `
        <div>
            <h2> Register User </h2>
            <newUser> </newUser>
            <login> </login>
        </div>
    `
}
