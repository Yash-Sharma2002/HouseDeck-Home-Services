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
