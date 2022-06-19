import fetch from "node-fetch";
import api from 'api'
import dotenv from 'dotenv'
import { ServiceAsPaid } from '../model/serviceSchema.js'
import { Subscriptions } from '../model/subscriptionSchema.js'

dotenv.config({ path: './config.env' })

const sdk = api('@cashfreedocs-new/v2#3pc871dl45p0wi3');
sdk.server(process.env.API_APP_ENV_URL);

export const makePayments = async (req, res) => {
    try {
        await sdk.CreateOrder({
            customer_details: {
                customer_id: req.body.customer_details.customer_id,
                customer_email: req.body.customer_details.customer_email,
                customer_phone: req.body.customer_details.customer_phone
            },
            order_id: req.body.order_id,
            order_amount: req.body.order_amount,
            order_currency: 'INR'
        }, {
            'x-client-id': process.env.API_APP_ID,
            'x-client-secret': process.env.API_APP_SECRET_KEY,
            'x-api-version': '2022-01-01'
        })
            .then((response) => {
                if (response.status === 'ERROR') {
                    console.log(`Error (code: ${response.subCode}, message: ${response.message})`,);
                    console.log('Please check the apiKey and apiSecret credentials and the environment',);
                    return;
                } else {
                    return res.send(response)
                }
            })
    } catch (error) {
        console.log('Error: from payment controller ', error);
        return res.status(500).json('failed');
    }
}

export const checkPaymentStatus = async (req, res) => {
    try {
        sdk.GetOrder({
            order_id: req.body.Order_Details.Order_Id,
            'x-client-id': process.env.API_APP_ID,
            'x-client-secret': process.env.API_APP_SECRET_KEY,
            'x-api-version': '2022-01-01'
        })
            .then(async (data) => {
                if (!(data.order_amount === parseFloat(req.body.Order_Details.Order_Amount))) {
                    return res.status(500).json('failed');
                } else if (data.order_status === 'PAID') {
                    try {
                        const service = req.body;
                        const newService = new ServiceAsPaid(service);
                        await newService.save();
                        return res.send(data)
                    } catch (error) {
                        console.log('Error: from service controller ', error);
                        return res.status(500).json('failed');
                    }
                }
            })

    } catch (error) {
        console.log('Error: from payment controller ', error);
        return res.status(500).json('failed');
    }
}


export const checkSubscriptionStatus = async (req, res) => {
    try {
        sdk.GetOrder({
            order_id: req.body.Order_Details.Order_Id,
            'x-client-id': process.env.API_APP_ID,
            'x-client-secret': process.env.API_APP_SECRET_KEY,
            'x-api-version': '2022-01-01'
        })
            .then(async (data) => {
                if (!(data.order_amount === parseFloat(req.body.Order_Details.Order_Amount))) {
                    return res.status(500).json('failed');
                } else if (data.order_status === 'PAID') {
                    try {
                        const subscription = req.body;
                        const newSubscription = new Subscriptions(subscription);
                        await newSubscription.save();
                        return res.send(data)
                    } catch (error) {
                        console.log('Error: from service controller ', error);
                        return res.status(500).json('failed');
                    }
                }
            })

    } catch (error) {
        console.log('Error: from payment controller ', error);
        return res.status(500).json('failed');
    }
}


