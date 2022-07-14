
import axios from 'axios';

// const URL = 'http://localhost:8000';


export const getPlace = async (user) => {
    try {
        const response = await axios.post(`/places`, user)
        return response.data
    } catch (error) {
        console.log('Error Occured Please Try Again Later.');
    }
}