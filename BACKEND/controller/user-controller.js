import User from "../model/signUpSchema.js";
import crypto from 'crypto'

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
        const user = await User.findOne({ Number: req.body.Number }, { _id: 0, "Username": 1, "Email": 1, "Number": 1 });
        if (user) {
            return res.send(user)
        }
        else {
            console.log('error in else');
            return res.sendStatus(500)
        }

    } catch (error) {
        console.log('error in catch');
        res.json('Error: ', error.message);
    }
}

export const userUpdate = async (req, res) => {
    try {

        const user = await User.replaceOne({ Number: req.body.Number }, req.body);
        if (user) {
            return res.send(user)
        }
        else {
            console.log('error in else');
            return res.sendStatus(500)
        }

    } catch (error) {
        console.log('error in catch');
        res.json('Error: ', error.message);
    }
}