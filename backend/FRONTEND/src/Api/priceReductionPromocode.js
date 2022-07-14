
import axios from 'axios';

// const URL = 'http://localhost:8000';


export const promocodeFetch = async (user) => {
    try {
        const response = await axios.post(`/promocode`, user)
        return response.data
    } catch (error) {
        console.log('Error Occured Please Try Again Later.');
    }
}

export const promocodeStore = async (user) => {
    try {
        const response = await axios.post(`/promocode-save`, user)
        return response.data
    } catch (error) {
        console.log('Error Occured Please Try Again Later.');
    }
}