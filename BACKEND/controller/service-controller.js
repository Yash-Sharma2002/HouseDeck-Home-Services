import { ServiceAsDraft, ServiceAsPaid } from "../model/serviceSchema.js";
import { Subscriptions } from "../model/subscriptionSchema.js";


export const sendService = async (req, res) => {
    try {
        const service = req.body;
        const newService = new ServiceAsDraft(service);
        await newService.save();
        await res.send(200 + 'Service data stored')
    } catch (error) {
        res.send(500 + ' Error occured');
        console.log('Error: from service controller ', error);
    }
}


export const getDraftBookings = async (req, res) => {
    try {
        const user = await ServiceAsDraft.find({  Customer_Details: req.body.Customer_Details }, { _id: 0, "Order_Details": 1, "Draft": 1, "Payment_Details": 1 });
        if (user) {
            return res.send(user)
        }
        else {
            return res.status(300).json('not find');
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json('failed');
    }
}



export const getPaidBookings = async (req, res) => {
    try {
        const user = await ServiceAsPaid.find({ Customer_Details: req.body.Customer_Details }, { _id: 0, "Order_Details": 1, "Draft": 1, "Payment_Details": 1 });
        if (user) {
            return res.send(user)
        }
        else {
            return res.status(500).json('not find');
        }

    } catch (error) {
        console.log(error)

        return res.status(500).json('failed');
    }
}

export const getSubscriptions = async (req, res) => {
    try {
        const user = await Subscriptions.find({  Customer_Details: req.body.Customer_Details }, { _id: 0, "Order_Details": 1, "Subscription": 1, "Payment_Details": 1 });
        if (user) {
            return res.send(user)
        }
        else {
            return res.status(300).json('not find');
        }

    } catch (error) {
        console.log(error)

        return res.status(500).json('failed');
    }
}