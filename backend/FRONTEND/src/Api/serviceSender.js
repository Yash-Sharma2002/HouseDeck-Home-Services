
import axios from 'axios';




export const serviceSenderAsDraft = async (service) => {
    try {
        return await axios.post(`/service`, service)
    } catch (error) {
        console.log('Error Occured Please Try Again Later.')
        return false
    }
}