import { Schema } from "mongoose";
import mongoose from "mongoose";

// auto generate ID
const postSchema = new Schema(
  {
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
