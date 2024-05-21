import api from 'api'
import dotenv from 'dotenv'
import { ServiceAsPaid } from '../model/serviceSchema.js'
import { Subscriptions } from '../model/subscriptionSchema.js'
import sgmail from '@sendgrid/mail'


dotenv.config({ path: './config.env' })

sgmail.setApiKey(process.env.SENDGRID_API_KEY)
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


