import { Webhook } from "svix";
import userModel from "../model/user.model.js";

export const clerkWebHook = async (req, res) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Webhook Secret Needed");
  }

  const payload = req.body;
  const headers = req.headers;

  // Create new Svix instance with secret
  const wh = new Webhook(WEBHOOK_SECRET);
  let evt;

  try {
    //   verify webhook SIGNING_SECRET
    evt = wh.verify(payload, headers);
  } catch (err) {
    res.status(400).json({
      message: "Webhook Verification Failed",
    });
  }

  console.log(evt.data);
  // Check Webhook's event
  // user.created
  if (evt.type === "user.created") {
    const newUser = new userModel({
      clerkUserId: evt.data.id,
      username: evt.data.username || evt.data.email_addresses[0].email_address,
      email: evt.data.email_addresses[0].email_address,
      img: evt.data.profile_image_url,
    });

    await newUser.save();
  }

  // user.updated
  if (evt.type === "user.updated") {
    const query = { clerkUserId: evt.data.id };
    await userModel.findOneAndUpdate(query, {
      username: evt.data.username,
      email: evt.data.email_addresses[0].email_address,
      img: evt.data.profile_image_url,
    });
  }

  // user.deleted
  if (evt.type === "user.deleted") {
    await userModel.deleteOne({ clerkUserId: evt.data.id });
  }

  return res.status(200).json({ message: "Webhook Received" });
};
