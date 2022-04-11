
import axios from 'axios';

const URL = 'http://localhost:8000';


export const makePayments = async (orderInfo) => {
    try {
        const response = await axios.post(`${URL}/create-order`, orderInfo)
        return response
    } catch (error) {
        console.log('Error while calling Payment');
    }
}

export const checkPaymentStatus = async (orderInfo) => {
    try {
        const response = await axios.post(`${URL}/check-payment`, orderInfo)
        return response.data
    } catch (error) {
        console.log('Error while calling Payment'+error);
    }
}

export const checkSubscriptionStatus = async (orderInfo) => {
    try {
        const response = await axios.post(`${URL}/check-subscription`, orderInfo)
        return response.data
    } catch (error) {
        console.log('Error while calling Payment'+error);
    }
}