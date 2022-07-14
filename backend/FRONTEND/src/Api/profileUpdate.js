import axios from 'axios';



export const profileUpdate = async (user) => {
    try {
        const response = await axios.post(`/profile-update`, user)
        return response.data
    } catch (error) {
        console.log('Error Occured Please Try Again Later.');
    }
}
