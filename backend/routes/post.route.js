import express from "express";
import {
  getPosts,
  getPost,
  createPost,
  deletePost,
  uploadAuth,
} from "../controller/post.controller.js";
const router = express.Router();

// upload auth
router.get("/auth", uploadAuth);

router.get("/", getPosts);
router.get("/:slug", getPost);
router.post("/", createPost);
router.delete("/:id", deletePost);

export default router;
