
import axios from 'axios';

const URL = 'http://localhost:80';


export const serviceSenderAsDraft = async (service) => {
    try {
        return await axios.post(`${URL}/service`, service)
    } catch (error) {
        console.log('Error Occured Please Try Again Later.')
        return false
    }
}