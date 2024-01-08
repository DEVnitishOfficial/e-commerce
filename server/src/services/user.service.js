import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { getUserIdFromToken } from "../config/jwtProvider.js";
 const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password } = userData;
    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      throw new Error(`User already exist with email, ${email}`);
    }
    password = await bcrypt.hash(password, 10);
    const user = await User.create({ firstName, lastName, email, password });
    console.log("create user", user);
    return user
  } catch (error) {
    throw new Error(error.message);
  }
};

 const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId)
    // .populate("address");
    if (!user) {
      throw new Error("user not found with id", userId);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

 const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      throw new Error("user not found with email", email);
    }
    return user;
  } catch (error) {
    throw new Error({
      success:'false',
      error:error.message
    });
  }
};
 const getUserProfileByToken = async (token) => {
  try {
    const userId = getUserIdFromToken(token);
    const user = await findUserById(userId);
    if (!user) {
      throw new Error("user not found with id", userId);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllUser = async () => {
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
export{
  createUser,
  findUserById,
  getUserByEmail,
  getUserProfileByToken,
  getAllUser
}
