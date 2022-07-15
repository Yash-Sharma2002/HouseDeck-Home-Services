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
        var otp = String(parseInt(Math.floor(100000 + Math.random() * 900000)))
        console.log(typeof(otp));
        const message = {
            to: req.body.Email,
            cc: '',
            bcc: '',
            from: 'homeservices@housedeck.in',
            subject: 'HouseDeck - Email Verification',
            text: `${otp} is your One Time Password (OTP) for email verification on HouseDeck - India's Largest Home Products & Services Platform`,
            html: ` <div style="text-align: center;">
            <img src="https://img.freepik.com/premium-vector/two-step-authentication-vector-illustration_100456-2148.jpg?w=740" alt="Image">
            <p style="font-weight: 700;font-variant-caps: titling-caps;font-size: 30px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">Two Factor Verification</p>
            <p style="font-size: 20px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;width: 80%;margin: auto;">Verification code for HouseDeck Home Services Email Validation is:</p>
            <div style="display:flex;margin:10px auto;width:88%;">
            <p style="border:1px solid red;padding:10px;font-size:20px;font-weight:800;border-radius: 8px;margin:0px 8px;">${otp.slice(0,1)}</p>
            <p style="border:1px solid red;padding:10px;font-size:20px;font-weight:800;border-radius: 8px;margin:0px 8px;">${otp.slice(1,2)}</p>
            <p style="border:1px solid red;padding:10px;font-size:20px;font-weight:800;border-radius: 8px;margin:0px 8px;">${otp.slice(2,3)}</p>
            <p style="border:1px solid red;padding:10px;font-size:20px;font-weight:800;border-radius: 8px;margin:0px 8px;">${otp.slice(3,4)}</p>
            <p style="border:1px solid red;padding:10px;font-size:20px;font-weight:800;border-radius: 8px;margin:0px 8px;">${otp.slice(4,5)}</p>
            <p style="border:1px solid red;padding:10px;font-size:20px;font-weight:800;border-radius: 8px;margin:0px 8px;">${otp.slice(5,6)}</p>
            </div>
            <p style="text-align:start;font-size:15px;">Regards,</p>
            <p style="text-align:start;font-size:15px;">HouseDeck Team</p>
        </div>`,
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
        console.log(error);
        return res.status(500).json('failed');
    }

}


