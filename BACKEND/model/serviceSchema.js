import mongoose from 'mongoose';

const serviceAsDraftSchema = new mongoose.Schema({
    Order_Details:{
        Order_Id:  {
            type: String,
            required: true,
        },
        Order_Date:{
            type: String,
            required: true,
        },
        Order_Time:  {
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
        Total_Price: {
            type: String,
            required: true,
        },
        Appointment_Location: {
            type: String,
            required: true,
        },
        Appointment_Date:{
            type: String,
            required: true,
        },
        Appointment_Time:{
            type: String,
            required: true,
        },
    },
    Draft: {
        type: String,
        required: true,
    },
    Payment_Details:{
        Paid: {
            type: String,
            required: true,
        },
        Payment_Link: {
            type: String,
            required: true,
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

const ServiceAsDraft = mongoose.model('service_as_draft', serviceAsDraftSchema);

export default ServiceAsDraft;