import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    Number: {
        type: String,
    },
    Username: {
        type: String,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    Email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true
    },
});

const User = mongoose.model('user', userSchema);

export default User;