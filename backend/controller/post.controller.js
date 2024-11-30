import postModel from "../model/post.model.js";
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

// Create post
export const createPost = async (req, res) => {
  const newPost = new postModel(req.body);
  await newPost.save();

  res.status(200).json({ message: "Post has been Created" });
};

// Delete post by ID
export const deletePost = async (req, res) => {
  await postModel.findByIdAndDelete(req.params.id);

  res.status(200).json({ message: "Post has been Deleted" });
};
