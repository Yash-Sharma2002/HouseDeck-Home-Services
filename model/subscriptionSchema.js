import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
    Order_Details: {
        Order_Id: {
            type: String,
            required: true,
        },
        Order_Date: {
            type: String,
            required: true,
        },
        Order_Time: {
            type: String,
            required: true,
        },
        Subscription: {
            Name: {
                type: String,
                // required: true,
            },
            Price: {
                type: String,
                // required: true,
            }
        },
        Order_Amount: {
            type: String,
            required: true,
        },
    },
    Payment_Details: {
        Paid: {
            type: String,
            required: true,
        },
        Payment_Link: {
            type: String,
        },
    },
    Customer_Details: {

        Customer_Id: {
            type: String,
            required: true,
            trim: true,
        },
        Customer_Email: {
            type: String,
            required: true,
            trim: true,
        },
        Customer_Phone: {
            type: String,
            required: true,
            trim: true,
        },
    },
});

export const Subscriptions = mongoose.model('Subscriptions', subscriptionSchema);

