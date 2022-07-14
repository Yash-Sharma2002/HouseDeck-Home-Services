
import axios from 'axios';



export const authenticateLogin = async (user) => {
    try {
        const response = await axios.post(`/login`, user)
        return response.data
    } catch (error) {
        console.log('Error Occured Please Try Again Later.');
    }
}