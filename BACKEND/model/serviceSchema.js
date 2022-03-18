import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({

    Service: [{
        ServiceChoseByUser:  {
            type: String,
            trim: true,
        },
        PriceForService:  {
            type: String,
            trim: true,
        },
        _id:0
    }],
    TotalPrice: {
        type: String,
        required: true,
    }
    
});

const Service = mongoose.model('service', serviceSchema);

export default Service;