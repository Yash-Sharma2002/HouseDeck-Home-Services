
import axios from 'axios';

const URL = 'http://localhost:8000';


export const getBookings = async (user) => {
    try {
        const bookings = await axios.post(`${URL}/my-bookings`, user)
        return bookings.data
    } catch (error) {
        console.log('error while calling bookings API: ', error);

    }
}