
import axios from 'axios';

const URL = 'http://localhost:8000';


export const promocodeFetch = async (user) => {
    try {
        const response = await axios.post(`${URL}/promocode`, user)
        return response.data
    } catch (error) {
    }
}

export const promocodeStore = async (user) => {
    try {
        const response = await axios.post(`${URL}/promocode-save`, user)
        return response.data
    } catch (error) {
    }
}