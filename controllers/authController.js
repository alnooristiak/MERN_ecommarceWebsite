import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModels.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    if (!name) {
      return res.send({ error: "Name is required" });
    }
    if (!email) {
      return res.send({ error: "email is required" });
    }
    if (!password) {
      return res.send({ error: "password is required" });
    }
    if (!phone) {
      return res.send({ error: "phone is required" });
    }
    if (!address) {
      return res.send({ error: "address is required" });
    }
    // chack user
    const existingUser = await userModel.findOne({ email });
    // existing user
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "already registered Please login",
      });
    }
    // register user
    const hashedPassword = await hashPassword(password);
    // save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();
    res.status(201).send({
      success: true,
      message: "User Registre successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "error in registation",
      error,
    });
  }
};

// login Controller
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Invalid email password",
      });
    }
    // chack user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "email not register",
      });
    }
    const metch = await comparePassword(password, user.password);
    if (!metch) {
      return res.status(404).send({
        success: false,
        message: "invalid password",
      });
    }
    // token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECREAT, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in logi user",
      error,
    });
  }
};
