import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({

    services: [{
        ServiceChoseByUser: {
            type: String,
            trim: true,
        },
        PriceForService: {
            type: String,
            trim: true,
        },
        _id: 0
    }],
    totalPrice: {
        type: String,
        required: true,
    },
    locationForService: {
        type: String,
        required: true,
    },
    dateForService: {
        type: String,
        // required: true,
    },
    timeForService: {
        type: String,
        // required: true,
    },

});

const Service = mongoose.model('service', serviceSchema);

export default Service;