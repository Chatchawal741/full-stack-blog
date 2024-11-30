import { Schema } from "mongoose";
import mongoose from "mongoose";

// auto generate ID
const commentSchema = new Schema(
  {
    // get object from user-model
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    desc: { type: String, required: true },
  },
  //created at timestamp
  { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);
