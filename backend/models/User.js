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
    profilePicture: {
        type: String
    }, 
    followers: {
        type: Array, 
        default: []
    },
    following: {
        type: Array, 
        default: []
    },
    description: {
        type: String
    }
},
{ timestamps: true })

export default mongoose.model('User', userSchema);