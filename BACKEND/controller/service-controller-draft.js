import ServiceAsDraft from "../model/serviceSchema.js";


export const sendService = async (req, res) => {
    try {
        const service = req.body;
        const newService = new ServiceAsDraft(service);
        await newService.save();
        console.log('Service data stored');
        await res.send(200 + 'Service data stored')
    } catch (error) {
        res.send(500 + ' Error occured');
        console.log('Error: from service controller ', error);
    }
}


export const getDraftBookings = async (req, res) => {
    try {
        const user = await ServiceAsDraft.find({Customer_Phone: req.body.Number }, {_id:0,"Order_Details": 1, "Draft": 1, "Payment_Details": 1 });
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



// export const getpaidBookings = async (req, res) => {
//     try {
//         const user = await Service.find({ Contact_Number_Of_User: req.body.Number }, { "Services": 1, "Order_Id": 0, "Service_Chosen_Date": 1, "Service_Chosen_Time": 1, "Total_Price": 1, "Paid": 1, "Draft": 1, "Payment_Link": 1 });
//         if (user) {
//             return res.send(user)
//         }
//         else {
//             return res.status(300).json('not find');
//         }

//     } catch (error) {
//         console.log(error)

//         return res.status(500).json('failed');
//     }
// }