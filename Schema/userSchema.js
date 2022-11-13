import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    index: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
    min:10
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("user", userSchema);

export default User;
