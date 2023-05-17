import { Schema } from "mongoose";
import mongoose from 'mongoose';


const postSchema = new mongoose.Schema({
  tweet: {
    type: String,
    required: true
  },
  picturePath: {
    type: String
  },
  userPicturePath: {
    type: String
  },
  user: { // userId, 
    type: Schema.Types.ObjectId,
    ref: "User",
  }, 
  likes: {
    type: Map, // if you like it, your going to add to this map. if you dont, you'll remove from the map.
    of: Boolean // using a map rather than an array is much more efficent. 
    // e.g. someone with 20k likes, its better to map. 
},
    comments: {
      type: Array, 
      default: []
    }
}, { timestamps: true });

export default mongoose.model('Post', postSchema);
