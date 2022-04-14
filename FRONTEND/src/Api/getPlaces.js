
import axios from 'axios';

const URL = 'http://localhost:8000';


export const getPlace = async (user) => {
    try {
        const response = await axios.post(`${URL}/places`, user)
        return response.data
    } catch (error) {
    }
}