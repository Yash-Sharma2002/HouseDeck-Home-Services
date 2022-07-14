
import axios from 'axios';




export const makePayments = async (orderInfo) => {
    try {
        const response = await axios.post(`/create-order`, orderInfo)
        return response
    } catch (error) {
        console.log('Error Occured Please Try Again Later.');
    }
}

export const checkPaymentStatus = async (orderInfo) => {
    try {
        const response = await axios.post(`/check-payment`, orderInfo)
        return response.data
    } catch (error) {
        console.log('Error Occured Please Try Again Later.');
    }
}

export const checkSubscriptionStatus = async (orderInfo) => {
    try {
        const response = await axios.post(`/check-subscription`, orderInfo)
        return response.data
    } catch (error) {
        console.log('Error Occured Please Try Again Later.');
    }
}