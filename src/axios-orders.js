import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-5c0e0-default-rtdb.europe-west1.firebasedatabase.app/'
})

export default instance