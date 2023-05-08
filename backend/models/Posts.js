import { Schema } from "mongoose";
import mongoose from 'mongoose';


const postSchema = new mongoose.Schema({
  tweet: {
    type: String,
    required: true
  },
  tweetImage: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
 
  }, 
  likes: {
      type: Number,
      default: 0
    },
  likers: { 
      type: Array
    }, 
}, { timestamps: true });

export default mongoose.model('Post', postSchema);
