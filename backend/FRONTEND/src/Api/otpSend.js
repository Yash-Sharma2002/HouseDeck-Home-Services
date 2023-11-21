import axios from 'axios';




export const sendOTP = async (num) => {
  try {
    const response = await axios.post(`/send-otp`, num)
    return response.data
  } catch (error) {
    console.log('Error Occured Please Try Again Later.');
  }
}

export const mailVerification = async (mailId) => {
  try {
    const response = await axios.post(`/send-mail`, mailId)
    return response.data
  } catch (error) {
    console.log('Error Occured Please Try Again Later.');
  }
}

export const verifyEmail = async (mailId) => {
  try {
    const response = await axios.post(`/email-verified`, mailId)
    return response.data
  } catch (error) {
    console.log('Error Occured Please Try Again Later.');
  }
}

export const verifyPhone = async (mailId) => {
  try {
    const response = await axios.post(`/phone-verified`, mailId)
    return response.data
  } catch (error) {
    console.log('Error Occured Please Try Again Later.');
  }
}