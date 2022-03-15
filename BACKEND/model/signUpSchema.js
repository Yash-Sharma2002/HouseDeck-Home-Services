import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    phoneNumber: {
        type: String,
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
});

const User = mongoose.model('user', userSchema);

export default User;