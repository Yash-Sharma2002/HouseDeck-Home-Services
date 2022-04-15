import { PromoCode } from "../model/promocodeSchema.js";

export const promocodeStore = async (req, res) => {
    try {
        console.log(req.body);
        const exist = await PromoCode.findOne({ Code: req.body.Code });
        if (exist) {
            console.log('Code Already existed');
            return res.send(400 + 'AlreadyExisted');
        }
        const code = req.body;
        const newCode = new PromoCode(code);
        await newCode.save();
        return res.status(200).json('sucess')
    } catch (error) {
        console.log('error in catch', error);
        return res.status(500).json('failed');
    }
}

export const promocodeFetch = async (req, res) => {
    try {
        const exist = await PromoCode.findOne({ "Code": req.body.Code, "Used_By.Customer_Details.Customer_Phone": req.body.Customer_Details.Customer_Phone });
        if (exist) {
            return res.send('400')
        }
        const reduction = await PromoCode.findOne({ Code: req.body.Code }, { _id: 0, "Price_Reduction": 1 });
        if (reduction) {

            const pushResponse = await PromoCode.updateOne({ Code: req.body.Code }, {
                $push: {
                    Used_By: {
                        Customer_Details: {
                            Customer_Id: req.body.Customer_Details.Customer_Id,
                            Customer_Email: req.body.Customer_Details.Customer_Email,
                            Customer_Phone: req.body.Customer_Details.Customer_Phone
                        }
                    }
                }
            })
            return res.send(reduction)
        }
        else {
            return res.status(500).json('failed');
        }

    } catch (error) {
        console.log('error in catch', error);
        return res.status(500).json('failed');
    }
}
