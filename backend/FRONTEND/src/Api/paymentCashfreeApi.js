
import axios from 'axios';


const URL = 'http://localhost:80';

export const makePayments = async (orderInfo) => {
    try {
        const response = await axios.post(`${URL}/create-order`, orderInfo)
        return response
    } catch (error) {
        console.log('Error Occured Please Try Again Later.');
    }
}

export const checkPaymentStatus = async (orderInfo) => {
    try {
        const response = await axios.post(`${URL}/check-payment`, orderInfo)
        return response.data
    } catch (error) {
        console.log('Error Occured Please Try Again Later.');
    }
}

export const checkSubscriptionStatus = async (orderInfo) => {
    try {
        const response = await axios.post(`${URL}/check-subscription`, orderInfo)
        return response.data
    } catch (error) {
        console.log('Error Occured Please Try Again Later.');
    }
}