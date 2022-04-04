import fetch from "node-fetch";
import dotenv from 'dotenv'

dotenv.config({ path: './data.env' })

export const makePayments = async (req, res) => {
    try {
        const postParams = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-client-id': process.env.API_APP_ID,
                'x-client-secret': process.env.API_APP_SECRET_KEY,
                'x-api-version': '2022-01-01',
            },
            body: JSON.stringify(req.body),
        }
        await fetch(process.env.API_APP_ENV_URL, postParams)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                if (data.status === 'ERROR') {
                    console.log(`Error (code: ${data.subCode}, message: ${data.message})`,);
                    console.log('Please check the apiKey and apiSecret credentials and the environment',);
                    return;
                } else {
                    return res.send(data)
                }
            })

    } catch (error) {
        res.send(500 + ' Error occured');
        console.log('Error: from payment controller ', error);
    }
}

