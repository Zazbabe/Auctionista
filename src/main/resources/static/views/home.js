import getUsersButton from '../components/getUsersButton.js'
import userList from '../components/userList.js'
import addNewUser from '../components/addNewUser.js'

export default {
    components: {
        getUsersButton,
        userList,
        addNewUser
    },
    template: `
        <div>
            <h2> Home </h2>
            <getUsersButton />
            <userList />
            <addNewUser />

        </div>
    `
}
