import asyncHandler from "express-async-handler";
import User from "../models/User.js";

//@desc Get user Profile
//@route /user/profile
//@access private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error("User doesn't exist");
  }

  const { name, email } = user;
  res.json({
    name,
    email,
  });
});

export { getUserProfile };
