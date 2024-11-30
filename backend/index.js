import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import connectDB from "./lib/connectDB.js";
import clerkRouter from "./routes/webhook.route.js";
const app = express();

// Exclude webhook from express's middleware
app.use("/webhooks", clerkRouter);
// Middleware
app.use(express.json());
const PORT = 3000;

// node watch
// node --watch <file_name>

// node loading env
// node --env-file <env_path> --watch <file_name>
// console.log(process.env.user);

app.use("/users", userRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);

// new handling error in expres@5
app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    message: error.message || "Something went Wrong",
    status: error.status || 500,
    stack: error.stack,
  });
});

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running at http://localhost:${PORT}`);
});
