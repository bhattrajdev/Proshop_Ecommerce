import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      console.log(`Received token: ${token}`);

      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      console.log(`Decoded data:`, decoded);

      // Retrieve the user based on the decoded ID
      req.user = await User.findById(decoded.id).select("-password");

      console.log(`User found:`, req.user);

      // If everything is successful, proceed to the next middleware or route
      next();
    } catch (error) {
      console.error("JWT Verification Error:", error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export { protect };
