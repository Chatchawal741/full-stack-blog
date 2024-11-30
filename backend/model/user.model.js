import { Schema } from "mongoose";
import mongoose from "mongoose";

// auto generate ID
const userSchema = new Schema(
  {
    clerkUserId: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
    },
    savedPosts: {
      // array
      type: [String],
      // init value
      default: [],
    },
  },
  //created at timestamp
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
