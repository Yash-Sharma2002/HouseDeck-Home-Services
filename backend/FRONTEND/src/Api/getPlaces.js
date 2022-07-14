
import axios from 'axios';

const URL = 'http://localhost:80';


export const getPlace = async (user) => {
    try {
        const response = await axios.post(`${URL}/places`, user)
        return response.data
    } catch (error) {
        console.log('Error Occured Please Try Again Later.');
    }
}