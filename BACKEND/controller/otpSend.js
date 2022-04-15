import twilio from 'twilio'
import dotenv from 'dotenv'

dotenv.config({ path: './data.env' })
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)



export const otpSend = async (req, res) => {
    try {
        var otp = parseInt(Math.random() * 1000000)
        await client.messages.create({
            to: req.body.Number,
            from: process.env.TWILIO_APP_NUMBER,
            channel: 'sms',
            body: `The verification code for housedeck login is ${otp}`
        }).then((response) => {
            if (response.errorCode == null) {
                return res.send(otp + 'this is otp')
            } else {
                return res.status(500).json('failed');
            }
        })

    } catch (error) {
        console.log('Error: from otp controller ', error);
        return res.status(500).json('failed');

    }

}


// only work when integrated
export const mailVerification = async (req, res) => {
    try {
        var otp = parseInt(Math.random() * 1000000)
        await client.messages.create({
            to: 'yashsharmams_cse19@its.edu.in',
            from: 'tech@housedeck.in',
            channel: 'email',
            body: `The verification code for housedeck login is ${otp}`
        }).then((response) => {
            if (response.errorCode == null) {
                return res.send(otp + 'this is otp')
            } else {
                return res.status(500).json('failed');
            }
        })

    } catch (error) {
        console.log('Error: from otp mail controller ', error);
        return res.status(500).json('failed');
    }

}