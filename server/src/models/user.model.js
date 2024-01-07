import mongoose from "mongoose";

const userSchema = new userSchema(
  {
    firstName: {
      type: String,
      required: [true, "user name is Required"],
      custom_minLength: [5, "Name must be at least 5 characters"],
      custom_maxLength: [50, "Name must be less than 50 characters"],
      trim: true,
      lowercase: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "User email is required"],
      unique: [true, "already registered"],
      lowercase: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "please entre a valid email address(db)",
      ],
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minLength: [8, "password must be at lest eight character"],
      select: false,
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"], // enum → enumeration(means,consists of a set of distinct named values.)
      default: "USER",
    },
    mobileNo: {
      type: String,
    },
    address: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "addresses",
      },
    ],
    paymentInformation: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "payment_information",
      },
    ],
    ratings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ratings",
      },
    ],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "reviews",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("users",userSchema)
export default User
