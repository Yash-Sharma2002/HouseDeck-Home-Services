import axios from 'axios';

// const URL = 'http://localhost:8000';

export const profileUpdate = async (user) => {
    try {
        const response = await axios.post(`/profile-update`, user)
        return response.data
    } catch (error) {
        console.log('error while calling Signup API: ', error);
    }
}
