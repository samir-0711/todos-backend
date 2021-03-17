import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, 'Username is Required']
    },
    password: {
        type: String,
        require: [true, 'Password is Required']
    }
}, { timestamps: true });

const userModel = mongoose.model('User', userSchema);
export default userModel;