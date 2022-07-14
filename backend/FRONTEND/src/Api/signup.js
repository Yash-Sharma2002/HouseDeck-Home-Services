import axios from 'axios';

// const URL = 'http://localhost:8000';

export const authenticateSignup = async (user) => {
    try {
        const response =  await axios.post(`/signup`, user)
        return response
    } catch (error) {
        console.log('Error Occured Please Try Again Later.');
        
    }
}
