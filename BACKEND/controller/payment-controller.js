import fetch from "node-fetch";
import dotenv from 'dotenv'
import { ServiceAsPaid } from '../model/serviceSchema.js'

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

export const checkPaymentStatus = async (req, res) => {
    try {
        const postParams = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'order_id': req.body.Order_Details.Order_Id,
                'x-client-id': process.env.API_APP_ID,
                'x-client-secret': process.env.API_APP_SECRET_KEY,
                'x-api-version': '2022-01-01',
            },
        }
        await fetch(`${process.env.API_APP_ENV_URL}/${req.body.Order_Details.Order_Id}`, postParams)
            .then((response) => {
                return response.json()
            })
            .then(async (data) => {
                if (!(data.order_amount === parseFloat(req.body.Order_Details.Order_Amount))) {
                    res.sendStatus(500)
                } else if (data.order_status === 'PAID') {
                    try {
                        const service = req.body;
                        const newService = new ServiceAsPaid(service);
                        await newService.save();
                        return res.send(data)
                    } catch (error) {
                        res.send(500 + ' Error occured');
                        console.log('Error: from service controller ', error);
                    }
                }
            })

    } catch (error) {
        res.send(500 + ' Error occured');
        console.log('Error: from payment controller ', error);
    }
}
