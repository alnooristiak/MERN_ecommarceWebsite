import JWT from "jsonwebtoken";
import userModel from "../models/userModels.js";

// protected routes
export const requireSignIn = (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECREAT
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

// auth middlewares
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "un authorized access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "error in admin middleware",
    });
  }
};
