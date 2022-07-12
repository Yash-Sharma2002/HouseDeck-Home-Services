
import axios from 'axios';

// const URL = 'http://localhost:8000';


export const getSubscriptionDetails = async (user) => {
    try {
        const bookings = await axios.post(`/get-subscription`, user)
        return bookings.data
    } catch (error) {
        console.log('error while calling bookings API: ', error);

    }
}