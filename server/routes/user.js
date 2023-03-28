import express from "express";
import userAuthMiddleware from "../middleware/userAuth.js";
import { getUserProfile } from "../controllers/user.js";
const userRouter = express.Router();

userRouter.route("/api/user/profile").get(userAuthMiddleware, getUserProfile);

export default userRouter;
