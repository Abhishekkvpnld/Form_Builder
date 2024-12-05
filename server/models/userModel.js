import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
    },
    phone: {
      required: true,
      type: Number,
    },
    password: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
