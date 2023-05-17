import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: true, 
    },
    lastName: {
        type: String, 
        required: true, 
    },
    email: {
        type: String, 
        required: true, 
        unique: true
    },
    username: { 
        type: String, 
        required: true, 
        unique: true
    },
    password: {
        type: String, 
        required: true, 
    }, 
    picturePath: {
        type: String,
        default: ""
    }, 
    friends: {
        type: Array, 
        default: []
    },
    occupation: {
        type: String
    }
},
{ timestamps: true })

export default mongoose.model('User', userSchema);