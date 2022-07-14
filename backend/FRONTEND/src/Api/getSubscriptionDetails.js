
import axios from 'axios';

const URL = 'http://localhost:80';


export const getSubscriptionDetails = async (user) => {
    try {
        const bookings = await axios.post(`${URL}/get-subscription`, user)
        return bookings.data
    } catch (error) {
        console.log('Error Occured Please Try Again Later.');
    }
}