
import axios from 'axios';



export const getSubscriptionDetails = async (user) => {
    try {
        const bookings = await axios.post(`/get-subscription`, user)
        return bookings.data
    } catch (error) {
        console.log('Error Occured Please Try Again Later.');
    }
}