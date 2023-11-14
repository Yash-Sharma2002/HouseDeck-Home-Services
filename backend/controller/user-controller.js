import User from "../model/signUpSchema.js";

export const userSignUp = async (req, res) => {
    try {
        const exist = await User.findOne({ Email: req.body.Email });
        if (exist) {
            console.log('User Already existed');
            return res.send(400 + 'AlreadyExisted');
        }
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();
        return res.status(200).json('success');
    } catch (error) {
        console.log('Error: from controller ', error.message);
        return res.status(500).json('failed');
    }
}

export const userLogIn = async (req, res) => {
    try {
        const user = await User.findOne({ Email: req.body.Email }, { _id: 0, "Username": 1, "Email": 1, "Number": 1 });
        if (user) {
            return res.send(user)
        }
        else {
            return res.status(500).json('failed');
        }

    } catch (error) {
        console.log('error in catch',error);
        return res.status(500).json('failed');
    }
}

export const userUpdate = async (req, res) => {
    try {

        const user = await User.replaceOne({ Email: req.body.Email }, req.body);
        if (user) {
            return res.send(user)
        }
        else {
            console.log('error in catch',error);
            return res.status(500).json('failed');
        }

    } catch (error) {
        console.log('error in catch',error);
        return res.status(500).json('failed');
    }
}