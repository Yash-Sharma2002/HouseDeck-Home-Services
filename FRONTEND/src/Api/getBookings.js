
import axios from 'axios';

const URL = 'http://localhost:8000';


export const getDraftBookingsAPI = async (user) => {
    try {
        const bookings = await axios.post(`${URL}/my-bookings-draft`, user)
        return bookings.data
    } catch (error) {
        console.log('error while calling bookings API: ', error);

    }
}

export const getPaidBookingsAPI = async (user) => {
    try {
        const bookings = await axios.post(`${URL}/my-bookings-paid`, user)
        return bookings.data
    } catch (error) {
        console.log('error while calling bookings API: ', error);

    }
}