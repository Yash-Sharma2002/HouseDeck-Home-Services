import Service from "../model/serviceSchema.js";


export const sendService = async (req, res) => {
    try {
        const service = req.body;
        const newService = new Service(service);
        await newService.save();
        console.log('Service data stored');
        await res.send(200 + 'Service data stored')
    } catch (error) {
        res.send(500 + ' Error occured');
        console.log('Error: from service controller ', error);
    }
}


export const getBookings = async (req, res) => {
    try {
        const user = await Service.find({ Number: req.body.Number },{"services":1,"_id":0});
        if(user) {
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