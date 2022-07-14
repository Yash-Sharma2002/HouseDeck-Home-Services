import axios from 'axios';

const URL = 'http://localhost:80';


export const sendOTP = async (num) => {
  try {
    const response = await axios.post(`${URL}/send-otp`, num)
    return response.data
  } catch (error) {
    console.log('Error Occured Please Try Again Later.');
  }
}

export const mailVerification = async (mailId) => {
  try {
    const response = await axios.post(`${URL}/send-mail`, mailId)
    return response.data
  } catch (error) {
    console.log('Error Occured Please Try Again Later.');
  }
}