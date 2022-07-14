
import axios from 'axios';

// const URL = 'http://localhost:8000';


export const authenticateLogin = async (user) => {
    try {
        const response = await axios.post(`/login`, user)
        return response.data
    } catch (error) {
        console.log('Error Occured Please Try Again Later.');
    }
}