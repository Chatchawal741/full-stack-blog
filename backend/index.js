import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import connectDB from "./lib/connectDB.js";
const app = express();
const PORT = 3000;

// node watch
// node --watch <file_name>

// node loading env
// node --env-file <env_path> --watch <file_name>
// console.log(process.env.user);

app.use("/users", userRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);
console.log("hello");

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running at http://localhost:${PORT}`);
});
