import { ServiceAsDraft, ServiceAsPaid } from "../model/serviceSchema.js";
import { Subscriptions } from "../model/subscriptionSchema.js";


export const sendService = async (req, res) => {
    try {
        const service = req.body;
        const newService = new ServiceAsDraft(service);
        await newService.save();
        return res.status(200).json('success');
    } catch (error) {
        console.log('Error: from service controller ', error);
        return res.status(500).json('failed');

    }
}


export const getDraftBookings = async (req, res) => {
    try {
        const user = await ServiceAsDraft.find({ "Customer_Details.Customer_Email": req.body.Email }, { "Order_Details": 1, "Draft": 1, "Payment_Details": 1 });
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
        const user = await ServiceAsPaid.find({ "Customer_Details.Customer_Email": req.body.Email }, { "Order_Details": 1, "Draft": 1, "Payment_Details": 1 });
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
        const user = await Subscriptions.find({ "Customer_Details.Customer_Email": req.body.Email }, { "Order_Details": 1, "Subscription": 1, "Payment_Details": 1 });
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

export const deleteDraftBookings = async (req, res) => {
    try {
        await ServiceAsDraft.deleteOne({ "Customer_Details.Customer_Email": req.body.Email, _id: req.body._id });
        return res.status(200).json('success');

    } catch (error) {
        console.log(error)
        return res.status(500).json('failed');
    }
}