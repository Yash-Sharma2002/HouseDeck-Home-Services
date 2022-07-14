
import axios from 'axios';

const URL = 'http://localhost:80';


export const promocodeFetch = async (user) => {
    try {
        const response = await axios.post(`${URL}/promocode`, user)
        return response.data
    } catch (error) {
        console.log('Error Occured Please Try Again Later.');
    }
}

export const promocodeStore = async (user) => {
    try {
        const response = await axios.post(`${URL}/promocode-save`, user)
        return response.data
    } catch (error) {
        console.log('Error Occured Please Try Again Later.');
    }
}