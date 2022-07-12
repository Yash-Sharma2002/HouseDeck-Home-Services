import mongoose from 'mongoose';

const promocodeSchema = new mongoose.Schema({
    Code: {
        type: String,
        trim: true,
        required: true
    },
    Price_Reduction: {
        type: String,
        trim: true,
        required: true
    },
    Used_By: [{
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
        _id:0
    }],
});

export const PromoCode = mongoose.model('Promocodes', promocodeSchema);

