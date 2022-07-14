import twilio from 'twilio'
import dotenv from 'dotenv'
import sgmail from '@sendgrid/mail'

dotenv.config({ path: './config.env' })
sgmail.setApiKey(process.env.SENDGRID_API_KEY)
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)



export const otpSend = async (req, res) => {
    try {
        var otp = parseInt(Math.floor(100000 + Math.random() * 900000))
        await client.messages.create({
            to: req.body.Number,
            from: process.env.TWILIO_APP_NUMBER,
            channel: 'sms',
            body: `${otp} is your One Time Password (OTP) for phone no. verification on HouseDeck - India's Largest Home Products & Services Platform.`
        }).then((response) => {
            if (response.errorCode == null) {
                return res.send(otp + 'this is otp')
            } else {
                return res.status(500).json('failed');
            }
        })

    } catch (error) {
        console.log('Error: from otp controller ', error);
        return res.send(error)

    }

}


export const mailVerification = async (req, res) => {
    try {
        var otp = parseInt(Math.floor(100000 + Math.random() * 900000))
        const message = {
            to: req.body.Email,
            cc: '',
            bcc: '',
            from: 'homeservices@housedeck.in',
            subject: 'HouseDeck - Email Verification',
            text: `${otp} is your One Time Password (OTP) for email verification on HouseDeck - India's Largest Home Products & Services Platform`,
            html: `<h3 style="color:white;text-align:center;">Your One Time Password (OTP) for email verification on HouseDeck - India\'s Largest Home Products & Services Platform </h3> <br> <p style="text-decoration:underline;text-align:center;font-size:2rem;color:yellow;border:2px solid orange;border-radius:20px;width:fit-content;padding:10px;margin:0px auto;">${otp}</p>
            <br> <p style="text-align:center;font-size:18pxrem;color:white;">This is a system generated mail. Please do not reply to this mail.</p>
            <br> <p style="text-align:start;font-size:15pxrem;color:white;">Regards,<br>HouseDeck Team</p>`,

        }
        await sgmail.send(message)
        .then((response) => {
            if (response.errorCode == null) {
                return res.send(otp + 'this is otp')
            } else {
                return res.status(500).json('failed');
            }
        })

    } catch (error) {
        return res.status(500).json('failed');
    }

}


