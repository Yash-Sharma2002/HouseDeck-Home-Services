
import axios from 'axios';

const URL = 'http://localhost:8000';


export const serviceSenderAsDraft = async (service) => {
    try {
        return await axios.post(`${URL}/service`, service)
    } catch (error) {
        console.log('error while calling login API: ', error);
        return false
    }
}