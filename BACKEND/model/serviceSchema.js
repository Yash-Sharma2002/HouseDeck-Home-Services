import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
Contact_Number_Of_User:{
    type: String,
    required: true,
},
    Services: [{
        Services_Chosen_By_User: {
            type: String,
            trim: true,
        },
        Price_For_Chosen_Services: {
            type: String,
            trim: true,
        },
        _id: 0
    }],
    Total_Price: {
        type: String,
        required: true,
    },
    Location_Chosen_For_Service: {
        type: String,
        required: true,
    },
    Date_Chose_For_Service: {
        type: String,
        // required: true,
    },
    Time_Chose_For_Service: {
        type: String,
        // required: true,
    },
    Service_Chosen_Date:{
        type: String,
        // required: true,
    },
    Service_Chosen_Time:{
        type: String,
        // required: true,
    },

});

const Service = mongoose.model('service', serviceSchema);

export default Service;