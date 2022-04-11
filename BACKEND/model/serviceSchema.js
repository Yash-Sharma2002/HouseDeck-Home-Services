import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
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
        Services: [{
            Service: {
                type: String,
                trim: true,
            },
            Price: {
                type: String,
                trim: true,
            },
            _id: 0
        }],
        Order_Amount: {
            type: String,
            required: true,
        },
        Appointment_Location: {
            type: String,
            required: true,
        },
        Appointment_Date: {
            type: String,
            required: true,
        },
        Appointment_Time: {
            type: String,
            required: true,
        },
    },
    Draft: {
        type: String,
        required: true,
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

export const ServiceAsDraft = mongoose.model('Shortlisted_Services', serviceSchema);
export const ServiceAsPaid = mongoose.model('Booked_Services', serviceSchema);

