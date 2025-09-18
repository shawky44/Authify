import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      minlength: [5, "Email must be at least 5 characters"], // خلي بالك: الكلمة الصحيحة minlength مش minLenght
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationCodeValidation: {
      type: Number,
      select: false,
    },
    verificationCode: {
      type: String,
      select: false,
    },
    forgetPasswordCodeValidation: {
      type: Number,
      select: false,
    },
    forgetPasswordCode: {
      type: String,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
