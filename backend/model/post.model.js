import { Schema } from "mongoose";
import mongoose from "mongoose";

// auto generate ID
const postSchema = new Schema(
  {
    // get object from user-model
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    img: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
    desc: {
      type: String,
    },
    category: {
      type: String,
      default: "general",
    },
    content: {
      type: String,
      required: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    visit: {
      type: Number,
      default: 0,
    },
  },
  //created at timestamp
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);
