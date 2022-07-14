import axios from 'axios';

const URL = 'http://localhost:80';

export const authenticateSignup = async (user) => {
    try {
        const response =  await axios.post(`${URL}/signup`, user)
        return response
    } catch (error) {
        console.log('Error Occured Please Try Again Later.');
        
    }
}
