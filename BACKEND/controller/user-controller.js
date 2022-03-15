import User from "../model/signUpSchema.js";


export const userSignUp = async (req, res) => {
    try {
        // const status = err.status || 500;
        // const exist = await User.findOne({ phoneNumber: req.body.phoneNumber });
        // if(exist) {
        //     return res.status(status).messagejson({ message: 'User already exist'});
        // }
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();
        // res.status(status).json(`${user.username} has been successfully registered`);
        
    } catch (error) {
        res.json('Error: from controller ', error.message);
        console.log('Error: from controller ', error.message);
    }
}