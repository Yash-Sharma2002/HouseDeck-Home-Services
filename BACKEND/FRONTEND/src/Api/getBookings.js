
import axios from 'axios';

// const URL = 'http://localhost:8000';


export const getDraftBookingsAPI = async (user) => {
    try {
        const bookings = await axios.post(`/my-bookings-draft`, user)
        return bookings.data
    } catch (error) {
        console.log('error while calling bookings API: ', error);

    }
}

export const getPaidBookingsAPI = async (user) => {
    try {
        const bookings = await axios.post(`/my-bookings-paid`, user)
        return bookings.data
    } catch (error) {
        console.log('error while calling bookings API: ', error);

    }
}

export const deletDraftBookingsAPI = async (user) => {
    try {
        const bookings = await axios.post(`/delete-draft`, user)
        return bookings.data
    } catch (error) {
        console.log('error while calling bookings API: ', error);

    }
}