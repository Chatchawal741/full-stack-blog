import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import connectDB from "./lib/connectDB.js";
import clerkRouter from "./routes/webhook.route.js";
import { clerkMiddleware } from "@clerk/express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(clerkMiddleware());
app.use("/webhooks", clerkRouter);
app.use(express.json());
app.use(cors(process.env.CLIENT_URL));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// clerk express auth - example
// app.get("/protected", async (req, res) => {
//   const { userId } = req.auth;
//   if (!userId) {
//     return res.status(401).json("Not Authenticated");
//   }
//   res.status(200).json(userId);
// });

// app.get("/protected2", requireAuth(), async (req, res) => {
//   const { userId } = req.auth;
//   if (!userId) {
//     return res.status(401).json("Not Authenticated");
//   }
//   res.status(200).json(userId);
// });

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comment", commentRouter);

// New handling error in expres@5
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

// node watch
// node --watch <file_name>

// node loading env
// node --env-file <env_path> --watch <file_name>
