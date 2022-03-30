
import axios from 'axios';

const URL = 'http://localhost:8000';


export const authenticateLogin = async (user) => {
    try {
        const Username = await axios.post(`${URL}/login`, user)
        return Username.data
    } catch (error) {
    }
}