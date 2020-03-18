import getUsersButton from '../components/getUsersButton.js'
import userList from '../components/userList.js'

export default {
    components: {
        getUsersButton,
        userList
    },
    template: `
        <div>
            <h2> Home </h2>
            <getUsersButton />
            <userList />

        </div>
    `
}
