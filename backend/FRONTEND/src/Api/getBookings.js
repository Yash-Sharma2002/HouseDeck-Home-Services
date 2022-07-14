
import axios from 'axios';

const URL = 'http://localhost:80';


export const getDraftBookingsAPI = async (user) => {
    try {
        const bookings = await axios.post(`${URL}/my-bookings-draft`, user)
        return bookings.data
    } catch (error) {
        // console.log('error while calling bookings API: ', error);

    }
}

export const getPaidBookingsAPI = async (user) => {
    try {
        const bookings = await axios.post(`${URL}/my-bookings-paid`, user)
        return bookings.data
    } catch (error) {
        console.log('Error Occured Please Try Again Later.');

    }
}

export const deletDraftBookingsAPI = async (user) => {
    try {
        const bookings = await axios.post(`${URL}/delete-draft`, user)
        return bookings.data
    } catch (error) {
        console.log('Error Occured Please Try Again Later.');

    }
}