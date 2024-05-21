import api from 'api'
import dotenv from 'dotenv'
import { ServiceAsPaid } from '../model/serviceSchema.js'
import { Subscriptions } from '../model/subscriptionSchema.js'
import sgmail from '@sendgrid/mail'


dotenv.config({ path: './config.env' })

sgmail.setApiKey(process.env.SENDGRID_API_KEY)
const sdk = api('@cashfreedocs-new/v2#3pc871dl45p0wi3');
sdk.server(process.env.API_APP_ENV_URL);

export const getBearerToken = async () => {
    try {
        
        const response = await axios.post(process.env.PAYPAL_BEARER_URL, {
            grant_type: "client_credentials"
        }, {
            auth: {
                username: process.env.PAYPAL_CLIENT_KEY,
                password: process.env.PAYPAL_SECRET_ID
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
        }).then((response) => {
            return response.data
        })
        return response.token_type + " " + response.access_token
    }
    catch (error) {
        return ''
    }
}

export const createOrder = async (req, res) => {
    try {
        let token = await getBearerToken()
        if(token === ''){
            return res.status(500).json('failed');
        }
        console.log(token)

        const data = {
            "intent": "CAPTURE",
            "purchase_units": [
                {
                    "amount": {
                        "currency_code": req.body.order_currency,
                        "value": `${req.body.order_currency}.00`
                    }
                }
            ],
            "payment_source": {
                "paypal": {
                    "experience_context": {
                        "payment_method_preference": "IMMEDIATE_PAYMENT_REQUIRED",
                        "payment_method_selected": "PAYPAL",
                        "brand_name": req.body.order_id,
                        "locale": "en-US",
                        "landing_page": "NO_PREFERENCE",
                        "user_action": "PAY_NOW",
                        // later to add real website url
                        "return_url": "https://vapormop-7545a1f9a84d.herokuapp.com/",
                        // later to add real website url
                        "cancel_url": "https://vapormop-7545a1f9a84d.herokuapp.com/"
                    }
                }
            }
        }

        const headers = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
                "PayPal-Request-Id": req.body.order_id,
            }
        }

        const response = await axios.post(process.env.PAYPAL_ORDER_URL , data, headers).then((response) => {
            return response.data
        })
        res.status(200).send(response)

    } catch (error) {
        
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
                        // saving data to database
                        const service =
                        {
                            Order_Details: {
                                Order_Id: req.body.Order_Details.Order_Id,
                                Order_Date: req.body.Order_Details.Order_Date,
                                Order_Time: req.body.Order_Details.Order_Time,
                                Category: req.body.Order_Details.Category,
                                Services: req.body.Order_Details.Services,
                                Order_Amount: req.body.Order_Details.Order_Amount,
                                Appointment_Location: req.body.Order_Details.Appointment_Location,
                                Appointment_Date: req.body.Order_Details.Appointment_Date,
                                Appointment_Time: req.body.Order_Details.Appointment_Time,
                            },
                            Draft: req.body.Draft,
                            Payment_Details: {
                                Paid: req.body.Payment_Details.Paid,
                            },
                            Customer_Details: {
                                Customer_Id: req.body.Customer_Details.Customer_Id,
                                Customer_Email: req.body.Customer_Details.Customer_Email,
                                Customer_Phone: req.body.Customer_Details.Customer_Phone,
                            },
                        }
                        const newService = new ServiceAsPaid(service);
                        await newService.save();
                        // sending order details to email
                        const message = {
                            to: service.Customer_Details.Customer_Email,
                            cc: 'homeservices@housedeck.in',
                            bcc: '',
                            from: 'homeservices@housedeck.in',
                            subject: 'HouseDeck Home Services Booking Confirmation',
                            text:
                                `Thank you for placing an order in HouseDeck Home Services.\nYour Order Has Been Placed Successfully.\n\n`
                                + `Service Details:\n\n`
                                + `\tService Type: ${service.Order_Details.Category.replace(/_/g, " ")}\n`
                                + `\tOrder ID: ${service.Order_Details.Order_Id}\n`
                                + `\tBooking Date: ${service.Order_Details.Order_Date}\n`
                                + `\tBooking Time: ${service.Order_Details.Order_Time}\n`
                                + `\tBooking Status:\n\tPaid: ${service.Payment_Details.Paid}\n\n`
                                + `By User:\nName: ${service.Customer_Details.Customer_Id}\n`
                                + `Phone: ${service.Customer_Details.Customer_Phone}\n`
                                + `Email: ${service.Customer_Details.Customer_Email}\n\n`
                                + `Order_Details:\n`
                                + service.Order_Details.Services.map((data) => `${data.Service}` + "\t" + `Rs.${data.Price}.00\n`)
                                + `\nTotal: Rs.${service.Order_Details.Order_Amount}\n\n`
                                + `Appointment Details:\n`
                                + `Address: ${service.Order_Details.Appointment_Location}\n`
                                + `Date: ${service.Order_Details.Appointment_Date}\n`
                                + `Time: ${service.Order_Details.Appointment_Time}\n\n`
                                + `If there is something wrong with your order, please contact us at homeservices@housedeck.in or call us at our toll free number 18003096606.\n`
                                + `We look forward to serving you again.\n\n`
                                + `Regards,\nHouseDeck Home Services\n\n`,
                            html:
                                `<div
                            style="text-align: center;background-color:white;margin:0px auto;color:black;font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;background-color: #fff;">
                            <p style="text-align: center;font-size: 18px;font-weight: 600;">Thank you for placing an order in HouseDeck Home
                                Services.</p><br><br>
                            <img src="https://img.freepik.com/premium-vector/made-with-love-sticker-isolated-white-thank-you-order-vector-illustration_547674-485.jpg?size=338&ext=jpg&ga=GA1.2.278715099.1643443898"
                                alt="Thanks Image">
                            <p style="text-align: center;font-size: 16px;font-weight: 600;">Your Order Has Been Placed Successfully.</p>
                            <br><br>
                            <p style="text-align: start;font-weight: 800;">Service Details</p>
                            <p style="text-align: start;font-weight: 800;padding-left: 30px;">Service Type: <span style="font-weight: 500;">
                                    ${service.Order_Details.Category.replace(/_/g, " ")}</span></p>
                            <p style="text-align: start;font-weight: 800;padding-left: 30px;">Order Id: <span style="font-weight: 500;">
                                    ${service.Order_Details.Order_Id}</span></p>
                            <p style="text-align: start;font-weight: 800;padding-left: 30px;">Booking Date: <span style="font-weight: 500;">
                                    ${service.Order_Details.Order_Date}</span></p>
                            <p style="text-align: start;font-weight: 800;padding-left: 30px;">Booking Time: <span style="font-weight: 500;">
                                    ${service.Order_Details.Order_Time}</span></p>
                            <p style="text-align: start;font-weight: 800;padding-left: 30px;">Booking Status: </p>
                            <p style="text-align: start;font-weight: 800;padding-left: 60px;">Paid: <span
                                    style="font-weight: 500;">${service.Payment_Details.Paid}</span></p><br>
                            <p style="text-align: start;font-weight: 800;">By User:</p>
                            <p style="text-align: start;font-weight: 800;padding-left: 30px;">Name: <span style="font-weight: 500;">
                                    ${service.Customer_Details.Customer_Id}</span></p>
                            <p style="text-align: start;font-weight: 800;padding-left: 30px;">Phone: <span style="font-weight: 500;">
                                    ${service.Customer_Details.Customer_Phone}</span></p>
                            <p style="text-align: start;font-weight: 800;padding-left: 30px;">Email: <span style="font-weight: 500;">
                                    ${service.Customer_Details.Customer_Email}</span></p><br>
                            <p style="text-align: start;font-weight: 800;">Order Details :</p>
                    
                            <div style="display: flex;justify-content:space-between;align-items:center;">
                                <div style="width: 50%;">
                                    <p style="text-align: start;font-weight: 800;">Service</p>
                                </div>
                                <div style="width: 50%;">
                                    <p style="text-align: start;font-weight: 800;">Price</p>
                                </div>
                            </div>`
                                + service.Order_Details.Services.map((data) => `<div style="display: flex;justify-content:space-between;align-items:center;">
                                <div style="width: 50%;">
                                    <p style="text-align: start;font-weight: 800;">`+ data.Service + `</p></div>`
                                    + `<div style="width: 50%;">
                            <p style="text-align: start;font-weight: 800;">Rs.`+ data.Price + `.00</p>
                            </div></div>`) +
                                `<div style="display: flex;justify-content:space-between;align-items:center;">
                                <div style="width: 50%;"><p style="text-align: start;font-weight: 800;">Total Price</p></div>`
                                + `<div style="width: 50%;">
                                <p style="text-align: start;font-weight: 800;">Rs.${service.Order_Details.Order_Amount}</p>
                                </div></div>`
                                +
                                `<p style="text-align: start;font-weight: 800;">Appointment Details:</p>
                            <p style="text-align: start;font-weight: 800;padding-left: 30px;">Appointment Date: <span
                                    style="font-weight: 500;">
                                    ${service.Order_Details.Appointment_Date}</span></p>
                            <p style="text-align: start;font-weight: 800;padding-left: 30px;">Appointment Time: <span
                                    style="font-weight: 500;">
                                    ${service.Order_Details.Appointment_Time}</span></p>
                            <p style="text-align: start;font-weight: 800;padding-left: 30px;">Appointment Location: <span
                                    style="font-weight: 500;">
                                    ${service.Order_Details.Appointment_Location}</span></p> <br><br>
                                    <p style="text-align: start;font-weight: 800">If there is something wrong with your order, please contact us at homeservices@housedeck.in or call us at our toll free number 18003096606.</p>
                                    <p style="text-align: start;font-weight: 800">We look forward to serving you again.</p>
                                    <p style="text-align: start;font-weight: 800">Regards,<br> HouseDeck Home Services.</p>
                    
                        </div>`
                            ,
                        }
                        await sgmail.send(message)
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
        return res.status(500).json('failed');
    }
}


