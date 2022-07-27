import api from 'api'
import dotenv from 'dotenv'
import { ServiceAsPaid } from '../model/serviceSchema.js'
import { Subscriptions } from '../model/subscriptionSchema.js'
import bizSdk from 'facebook-nodejs-business-sdk'
import sgmail from '@sendgrid/mail'



const Content = bizSdk.Content;
const CustomData = bizSdk.CustomData;
const DeliveryCategory = bizSdk.DeliveryCategory;
const EventRequest = bizSdk.EventRequest;
const UserData = bizSdk.UserData;
const ServerEvent = bizSdk.ServerEvent;


const access_token = 'EAAUjOBHpKPgBADozKt8UUbwYD9fkpM00u79IojQmGjoXkaTwjTMLSn3WQ6hxinrGNBgHCcUVAkYwXCoqEx9hqRb4LlE90nxHMKe1yy2e8002ivFVvAegaBNOQiywsCYJ4auArPTNVeTjMH5u1STWzVwW8eaFIEEILAR67JPZBtAwYMqxpCVwZC0tqZCPW8ZD';
const pixel_id = '820907902616795';
const apiFacebook = bizSdk.FacebookAdsApi.init(access_token);
let current_timestamp = Math.floor(new Date() / 1000);

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
                        const service = req.body;
                        const newService = new ServiceAsPaid(service);
                        await newService.save();


                        // sending order details to email
                        const message = {
                            to: req.body.Customer_Details.Customer_Email,
                            cc: '',
                            bcc: 'homeservices@housedeck.in',
                            from: 'homeservices@housedeck.in',
                            subject: 'HouseDeck Home Services Booking Confirmation',
                            text:
                                `Thank you for placing an order in HouseDeck Home Services.\nYour Order Has Been Placed Successfully.\n\n`
                                + `Service Details:\n\n`
                                + `\tService Type: ${req.body.Order_Details.Category.replace(/_/g, " ")}\n`
                                + `\tOrder ID: ${req.body.Order_Details.Order_Id}\n`
                                + `\tBooking Date: ${req.body.Order_Details.Order_Date}\n`
                                + `\tBooking Time: ${req.body.Order_Details.Order_Time}\n`
                                + `\tBooking Status:\n\tPaid: ${req.body.Payment_Details.Paid}\n\n`
                                + `By User:\nName: ${req.body.Customer_Details.Customer_Id}\n`
                                + `Phone: ${req.body.Customer_Details.Customer_Phone}\n`
                                + `Email: ${req.body.Customer_Details.Customer_Email}\n\n`
                                + `Order_Details:\n`
                                + req.body.Order_Details.Services.map((data) => `${data.Service}` + "\t" + `Rs.${data.Price}.00\n`)
                                + `\nTotal: Rs.${req.body.Order_Details.Order_Amount}\n\n`
                                + `Appointment Details:\n`
                                + `Address: ${req.body.Order_Details.Appointment_Location}\n`
                                + `Date: ${req.body.Order_Details.Appointment_Date}\n`
                                + `Time: ${req.body.Order_Details.Appointment_Time}\n\n`
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
                                    ${req.body.Order_Details.Category.replace(/_/g, " ")}</span></p>
                            <p style="text-align: start;font-weight: 800;padding-left: 30px;">Order Id: <span style="font-weight: 500;">
                                    ${req.body.Order_Details.Order_Id}</span></p>
                            <p style="text-align: start;font-weight: 800;padding-left: 30px;">Booking Date: <span style="font-weight: 500;">
                                    ${req.body.Order_Details.Order_Date}</span></p>
                            <p style="text-align: start;font-weight: 800;padding-left: 30px;">Booking Time: <span style="font-weight: 500;">
                                    ${req.body.Order_Details.Order_Time}</span></p>
                            <p style="text-align: start;font-weight: 800;padding-left: 30px;">Booking Status: </p>
                            <p style="text-align: start;font-weight: 800;padding-left: 60px;">Paid: <span
                                    style="font-weight: 500;">${req.body.Payment_Details.Paid}</span></p><br>
                            <p style="text-align: start;font-weight: 800;">By User:</p>
                            <p style="text-align: start;font-weight: 800;padding-left: 30px;">Name: <span style="font-weight: 500;">
                                    ${req.body.Customer_Details.Customer_Id}</span></p>
                            <p style="text-align: start;font-weight: 800;padding-left: 30px;">Phone: <span style="font-weight: 500;">
                                    ${req.body.Customer_Details.Customer_Phone}</span></p>
                            <p style="text-align: start;font-weight: 800;padding-left: 30px;">Email: <span style="font-weight: 500;">
                                    ${req.body.Customer_Details.Customer_Email}</span></p><br>
                            <p style="text-align: start;font-weight: 800;">Order Details :</p>
                    
                            <div style="display: flex;justify-content:space-between;align-items:center;">
                                <div style="width: 50%;">
                                    <p style="text-align: start;font-weight: 800;">Service</p>
                                </div>
                                <div style="width: 50%;">
                                    <p style="text-align: start;font-weight: 800;">Price</p>
                                </div>
                            </div>`
                                + req.body.Order_Details.Services.map((data) => `<div style="display: flex;justify-content:space-between;align-items:center;">
                                <div style="width: 50%;">
                                    <p style="text-align: start;font-weight: 800;">`+ data.Service + `</p></div>`
                                    + `<div style="width: 50%;">
                            <p style="text-align: start;font-weight: 800;">Rs.`+ data.Price + `.00</p>
                            </div></div>`) +
                                `<div style="display: flex;justify-content:space-between;align-items:center;">
                                <div style="width: 50%;"><p style="text-align: start;font-weight: 800;">Total Price</p></div>`
                                + `<div style="width: 50%;">
                                <p style="text-align: start;font-weight: 800;">Rs.${req.body.Order_Details.Order_Amount}</p>
                                </div></div>`
                                +
                                `<p style="text-align: start;font-weight: 800;">Appointment Details:</p>
                            <p style="text-align: start;font-weight: 800;padding-left: 30px;">Appointment Date: <span
                                    style="font-weight: 500;">
                                    ${req.body.Order_Details.Appointment_Date}</span></p>
                            <p style="text-align: start;font-weight: 800;padding-left: 30px;">Appointment Time: <span
                                    style="font-weight: 500;">
                                    ${req.body.Order_Details.Appointment_Time}</span></p>
                            <p style="text-align: start;font-weight: 800;padding-left: 30px;">Appointment Location: <span
                                    style="font-weight: 500;">
                                    ${req.body.Order_Details.Appointment_Location}</span></p> <br><br>
                                    <p style="text-align: start;font-weight: 800">If there is something wrong with your order, please contact us at homeservices@housedeck.in or call us at our toll free number 18003096606.</p>
                                    <p style="text-align: start;font-weight: 800">We look forward to serving you again.</p>
                                    <p style="text-align: start;font-weight: 800">Regards,<br> HouseDeck Home Services.</p>
                    
                        </div>`
                            ,
                        }
                        await sgmail.send(message)





                        // sending data to facebook business
                        // const userData = (new UserData())
                        //     .setEmails([req.body.Customer_Details.Customer_Email])
                        //     .setPhones([req.body.Customer_Details.Customer_Phone])
                        //     // It is recommended to send Client IP and User Agent for Conversions API Events.
                        //     .setClientIpAddress(req.connection.remoteAddress)
                        //     .setClientUserAgent(req.headers['user-agent'])
                        //     .setFbp('fb.1.1558571054389.1098115397')
                        //     .setFbc('fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890');

                        // const content = (new Content())
                        //     .setId(req.body.Order_Details.Order_Id)
                        //     .setQuantity(req.body.Order_Details.Services.length)

                        // const customData = (new CustomData())
                        //     .setContents(req.body.Order_Details.Services)
                        //     .setCurrency('inr')
                        //     .setValue(req.body.Order_Details.Order_Amount);

                        // const serverEvent = (new ServerEvent())
                        //     .setEventName('Purchase')
                        //     .setEventTime(current_timestamp)
                        //     .setUserData(userData)
                        //     .setCustomData(customData)
                        //     .setEventSourceUrl(`http://housedeckhomeservices.in/service${req.body.Order_Details.Category.replace(/_/g, " ")}`)
                        //     .setActionSource('website');



                        // const eventsData = [serverEvent];
                        // const eventRequest = (new EventRequest(access_token, pixel_id))
                        //     .setEvents(eventsData);


                        // eventRequest.execute().then(
                        //     response => {
                        //         console.log('Response: ', response);
                        //     },
                        //     err => {
                        //         console.error('Error: ', err);
                        //     }
                        // );



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


