import User from "../model/signUpSchema.js";


export const userSignUp = async (req, res) => {
    try {
        const exist = await User.findOne({ Number: req.body.Number });
        if (exist) {
            console.log('User Already existed');
            return res.send(400 + 'AlreadyExisted');
        }
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();
        console.log('User data stored');
        res.send(200 + 'User data stored')
    } catch (error) {
        res.send(500 + ' Error occured');
        console.log('Error: from controller ', error.message);
    }
}

export const userLogIn = async (req, res) => {
    try {
        const user = await User.findOne({ Number: req.body.Number },{"Username":1});
        if(user) {
            return res.send(user.Username)
        }
         else {
            return res.status(500).json('failed');
        }

    } catch (error) {
        res.json('Error: ', error.message);        
    }
}