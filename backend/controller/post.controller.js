import postModel from "../model/post.model.js";
import userModel from "../model/user.model.js";
// Get all posts
export const getPosts = async (req, res) => {
  const posts = await postModel.find();
  res.status(200).json(posts);
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

  let slug = req.body.title.replace(/ /g, "-").toLowerCase();
  let existingSlug = await postModel.findOne({ slug });
  let counter = 0;

  while (existingSlug) {
    let tempSlug = `${slug}-${counter}`;
    counter++;
    let slugQuery = await postModel.findOne({ slug: tempSlug });
    existingSlug = slugQuery.slug === tempSlug;
  }

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

// upload image
export const uploadAuth = async (req, res) => {};
