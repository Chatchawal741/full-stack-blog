import express from "express";
import { clerkWebHook } from "../controller/webhook.controller.js";
import bodyParser from "body-parser";

const router = express.Router();

router.post(
  "/clerk",
  // get raw body from webhooks
  bodyParser.raw({ type: "application/json" }),
  //   controller
  clerkWebHook
);

export default router;
