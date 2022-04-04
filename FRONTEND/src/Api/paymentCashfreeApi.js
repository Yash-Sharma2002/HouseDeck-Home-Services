
import axios from 'axios';

const URL = 'http://localhost:8000';


export const makePayments = async (orderInfo) => {
    try {
        const response = await axios.post(`${URL}/payment`, orderInfo)
        return response
    } catch (error) {
        console.log('Error while calling Payment');
    }
}