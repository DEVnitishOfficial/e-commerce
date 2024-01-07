import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwtProvider from "../config/jwtProvider.js";
export const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password } = userData;
    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      throw new Error("User already exist with email", email);
    }
    password = await bcrypt.hash(password, 10);
    const user = await User.create({ firstName, lastName, email, password });
    console.log("create user", user);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId).populate("address");
    if (!user) {
      throw new Error("user not found with id", userId);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUserByEmail = async () => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("user not found with email", email);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const getUserProfileByToken = async (token) => {
  try {
    const userId = jwtProvider.getUserIdFromToken(token);
    const user = await findUserById(userId);
    if (!user) {
      throw new Error("user not found with id", userId);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllUsers = async () => {
  try {
    const allUsers = await User.find();
    if (!allUsers) {
      throw new Error("Failed to fetch all users");
    }
    return allUsers;
  } catch (error) {
    throw new Error(error.message);
  }
};
export default getAllUsers
