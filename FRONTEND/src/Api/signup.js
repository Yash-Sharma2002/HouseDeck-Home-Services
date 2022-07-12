import axios from 'axios';

// const URL = 'http://localhost:8000';

export const authenticateSignup = async (user) => {
    try {
        const response =  await axios.post(`/signup`, user)
        console.log(response);
        return response
    } catch (error) {
        console.log('error while calling Signup API: ', error);
    }
}
