import ImageKit from "imagekit";
import postModel from "../model/post.model.js";
import userModel from "../model/user.model.js";

// Get all posts
export const getPosts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 2;

  const posts = await postModel
    .find()
    .limit(limit)
    .skip((page - 1) * limit); // 1-5, 5-10, 10-15

  // check if more posts in DB
  const totalPosts = await postModel.countDocuments();
  const hasMore = page * limit < totalPosts;

  res.status(200).json({ posts, hasMore });
};

// Get post with unique slug
export const getPost = async (req, res) => {
  const post = await postModel.findOne({ slug: req.params.slug });
  res.status(200).json(post);
};

// Create post + request body auth validation
export const createPost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    return res.status(401).json("Not Authenticated!");
  }

  const user = await userModel.findOne({ clerkUserId: clerkUserId });

  // replace spaces with '-'
  let slug = req.body.title.replace(/ /g, "-").toLowerCase();
  let existingPost = await postModel.findOne({ slug });
  let counter = 2;
  let tempSlug = "";

  while (existingPost) {
    tempSlug = `${slug}-${counter}`;
    existingPost = await postModel.findOne({ slug: tempSlug });
    counter++;
  }

  slug = tempSlug || slug;

  const newPost = new postModel({ user: user._id, slug, ...req.body });
  await newPost.save();
  res.status(200).json(newPost);
};

// Delete post by ID + request body auth validation
export const deletePost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    return res.status(401).json("Not Authenticated!");
  }

  const user = await userModel.findOne({ clerkUserId: clerkUserId });

  // Only deleting post if post belongs to that user
  const deletedPost = await postModel.findByIdAndDelete({
    _id: req.params.id,
    user: user._id,
  });
  if (!deletedPost) {
    return res.status(403).json("You can delete only your posts!");
  }
  res.status(200).json({ message: "Post has been Deleted" });
};

const imagekit = new ImageKit({
  urlEndpoint: process.env.IK_ENDPOINT,
  publicKey: process.env.CLERK_PUBLISHABLE_KEY,
  privateKey: process.env.IK_PRIVATE_KEY,
});

// upload image
export const uploadAuth = async (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
};
