import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required:[ true," Title is required"],
    trim: true
  },
  description: {
    type: String,
    required: [true, " Description is required"]
  },
  author: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", // بيربط البوست باليوزر اللي كتبه
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model("Post", postSchema);

export default Post;
